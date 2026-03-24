<?php
// Configuration de la base de données principale
$host = 'localhost';
$dbname = 'sem-prod_db';
$username = 'root';
$password = '';

try {
    // Utilisation de backticks pour le nom de la base de données dans le DSN si nécessaire, 
    // mais PDO le gère généralement bien sans si on passe le nom dans le DSN.
    // Note: Pour le DSN, le nom de la base est juste la valeur.
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    // En production, ne pas afficher l'erreur brute
    die("Erreur de connexion à la base de données : " . $e->getMessage());
}
?>
