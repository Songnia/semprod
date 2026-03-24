<?php
require_once 'api/db_config_main.php';

// Sécurisation basique (A améliorer pour la prod avec un vrai login)
$admin_password = "admin_sem_2025";
$is_logged_in = false;

if (isset($_POST['password']) && $_POST['password'] === $admin_password) {
    $is_logged_in = true;
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin - Jeu Concours SEM</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f6f9; margin: 0; padding: 20px; }
        .container { max-width: 1400px; margin: 0 auto; }
        .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); margin-bottom: 20px; }
        h1, h2 { color: #333; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #f8f9fa; }
        .login-form { max-width: 400px; margin: 100px auto; text-align: center; }
        .stat-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: #fff; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .stat-number { font-size: 2.5rem; font-weight: bold; color: #d4af37; }
        .btn { padding: 10px 20px; background: #c41e3a; color: white; border: none; border-radius: 5px; cursor: pointer; }
        .link-btn { color: #007bff; text-decoration: none; }
        .link-btn:hover { text-decoration: underline; }
    </style>
</head>
<body>

<?php if (!$is_logged_in): ?>
    <div class="login-form card">
        <h2>Accès Administrateur</h2>
        <form method="POST">
            <input type="password" name="password" placeholder="Mot de passe" style="padding: 10px; width: 80%; margin-bottom: 10px;">
            <br>
            <button type="submit" class="btn">Se connecter</button>
        </form>
    </div>
<?php else: ?>

    <?php
    // Récupération des stats
    try {
        // Total participants
        $stmt = $pdo->query("SELECT COUNT(*) FROM participations");
        $total_participants = $stmt->fetchColumn();
        
        // Stats par ville
        $stmt = $pdo->query("SELECT city, COUNT(*) as count FROM participations GROUP BY city ORDER BY count DESC");
        $stats_city = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Dernières participations
        $stmt = $pdo->query("SELECT * FROM participations ORDER BY created_at DESC LIMIT 50");
        $participants = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
    } catch(PDOException $e) {
        echo "Erreur SQL : " . $e->getMessage();
    }
    ?>

    <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h1><i class="fas fa-chart-line"></i> Tableau de Bord - Jeu Concours</h1>
            <button class="btn" onclick="window.print()"><i class="fas fa-print"></i> Imprimer</button>
        </div>

        <div class="stat-grid">
            <div class="stat-card">
                <div class="stat-number"><?php echo $total_participants; ?></div>
                <div>Participants Total</div>
            </div>
            <div class="stat-card">
                <div class="stat-number"><?php echo count($stats_city); ?></div>
                <div>Villes Touchées</div>
            </div>
        </div>

        <div class="card">
            <h2>Dernières Participations</h2>
            <div style="overflow-x: auto;">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Nom</th>
                            <th>Téléphone</th>
                            <th>Ville</th>
                            <th>Magasin</th>
                            <th>Preuve</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($participants as $p): ?>
                        <tr>
                            <td><?php echo date('d/m/Y H:i', strtotime($p['created_at'])); ?></td>
                            <td><?php echo htmlspecialchars($p['fullname']); ?></td>
                            <td><?php echo htmlspecialchars($p['phone']); ?></td>
                            <td><?php echo htmlspecialchars($p['city']); ?></td>
                            <td><?php echo htmlspecialchars($p['store']); ?></td>
                            <td>
                                <?php if($p['receipt_path']): ?>
                                    <a href="api/<?php echo $p['receipt_path']; ?>" target="_blank" class="link-btn"><i class="fas fa-file-image"></i> Voir</a>
                                <?php else: ?>
                                    -
                                <?php endif; ?>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

<?php endif; ?>

</body>
</html>
