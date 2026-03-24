<?php
$host = 'localhost';
$username = 'root';
$password = '';

try {
    // Connexion sans DB pour la créer
    $pdo = new PDO("mysql:host=$host", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Création de la DB
    $pdo->exec("CREATE DATABASE IF NOT EXISTS sem_contest CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    echo "Base de données 'sem_contest' vérifiée.<br>";
    
    // Connexion à la DB
    $pdo->exec("USE sem_contest");
    
    // Création de la table (Mise à jour pour inclure video_link)
    // Note: En prod, on ferait un ALTER TABLE, mais ici on recrée si n'existe pas
    $sql = "CREATE TABLE IF NOT EXISTS participations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        city VARCHAR(100) NOT NULL,
        store VARCHAR(100),
        video_link VARCHAR(255),
        receipt_path VARCHAR(255),
        optin TINYINT(1) DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    $pdo->exec($sql);
    
    // Tenter d'ajouter la colonne video_link si elle manque (migration simple)
    try {
        $pdo->exec("ALTER TABLE participations ADD COLUMN video_link VARCHAR(255) AFTER store");
        echo "Colonne 'video_link' ajoutée.<br>";
    } catch (PDOException $e) {
        // La colonne existe probablement déjà, on ignore
    }

    echo "Table 'participations' prête.<br>";
    
} catch(PDOException $e) {
    die("Erreur : " . $e->getMessage());
}
?>
