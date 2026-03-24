<?php
// Configuration de la base de données
$host = 'localhost';
$dbname = 'sem_contest';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    // En production, ne pas afficher l'erreur brute
    die("Erreur de connexion à la base de données. Veuillez vérifier la configuration.");
}
?>
