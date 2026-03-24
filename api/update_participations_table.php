<?php
require_once 'db_config_main.php';

try {
    // Drop the existing table if it exists to start fresh with the correct schema
    $pdo->exec("DROP TABLE IF EXISTS participations");
    echo "Table 'participations' supprimée.<br>";

    // Recreate the table with columns matching the form
    $sql = "CREATE TABLE participations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        city VARCHAR(100) NOT NULL,
        store VARCHAR(255) NOT NULL,
        receipt_path VARCHAR(255) NOT NULL,
        optin BOOLEAN DEFAULT 0,
        code VARCHAR(50),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sql);
    echo "Table 'participations' recréée avec le schéma correct.<br>";

} catch(PDOException $e) {
    die("Erreur : " . $e->getMessage());
}
?>
