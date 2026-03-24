<?php
// Configuration de la connexion
$host = 'localhost';
$username = 'root';
$password = '';

try {
    // Connexion au serveur MySQL sans sélectionner de base de données
    $pdo = new PDO("mysql:host=$host", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connexion au serveur MySQL réussie.<br>";

    // Création de la base de données
    $dbname = 'sem-prod_db';
    // Utilisation de backticks pour le nom de la base de données car il contient un tiret
    $sql = "CREATE DATABASE IF NOT EXISTS `$dbname` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci";
    $pdo->exec($sql);
    echo "Base de données '$dbname' créée ou déjà existante.<br>";

    // Connexion à la base de données créée
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Création des tables

    // 1. Products
    $sql = "CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2),
        image_url VARCHAR(255),
        category VARCHAR(100),
        badge VARCHAR(50),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sql);
    echo "Table 'products' créée.<br>";

    // 2. Events
    $sql = "CREATE TABLE IF NOT EXISTS events (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        date DATE,
        location VARCHAR(255),
        image_url VARCHAR(255),
        type ENUM('event', 'news') DEFAULT 'event',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sql);
    echo "Table 'events' créée.<br>";

    // 3. Technologies
    $sql = "CREATE TABLE IF NOT EXISTS technologies (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        image_url VARCHAR(255),
        section_key VARCHAR(100),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sql);
    echo "Table 'technologies' créée.<br>";

    // 4. Recipes
    $sql = "CREATE TABLE IF NOT EXISTS recipes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        ingredients TEXT,
        preparation_steps TEXT,
        image_url VARCHAR(255),
        prep_time VARCHAR(50),
        cooking_time VARCHAR(50),
        servings INT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sql);
    echo "Table 'recipes' créée.<br>";

    // 5. Gallery
    $sql = "CREATE TABLE IF NOT EXISTS gallery (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        description TEXT,
        file_url VARCHAR(255) NOT NULL,
        type ENUM('photo', 'video') DEFAULT 'photo',
        category VARCHAR(50),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sql);
    echo "Table 'gallery' créée.<br>";

    // 6. Messages
    $sql = "CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        subject VARCHAR(255),
        message TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sql);
    echo "Table 'messages' créée.<br>";

    // 7. Participations
    $sql = "CREATE TABLE IF NOT EXISTS participations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        code VARCHAR(50) NOT NULL,
        nom VARCHAR(100) NOT NULL,
        prenom VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        telephone VARCHAR(50) NOT NULL,
        ville VARCHAR(100) NOT NULL,
        date_participation DATETIME DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sql);
    echo "Table 'participations' créée.<br>";

    // 8. Stores
    $sql = "CREATE TABLE IF NOT EXISTS stores (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        location VARCHAR(255) NOT NULL
    )";
    $pdo->exec($sql);
    echo "Table 'stores' créée.<br>";

    // 9. Orders
    $sql = "CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        customer_name VARCHAR(255) NOT NULL,
        customer_email VARCHAR(255),
        customer_phone VARCHAR(50) NOT NULL,
        customer_address TEXT,
        total_amount DECIMAL(10, 2),
        status ENUM('pending', 'processing', 'completed', 'cancelled') DEFAULT 'pending',
        source VARCHAR(50) DEFAULT 'web',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )";
    $pdo->exec($sql);
    echo "Table 'orders' créée.<br>";

    // 10. Order Items
    $sql = "CREATE TABLE IF NOT EXISTS order_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        order_id INT NOT NULL,
        product_name VARCHAR(255) NOT NULL,
        quantity INT NOT NULL,
        unit_price DECIMAL(10, 2) NOT NULL,
        total_price DECIMAL(10, 2) NOT NULL,
        FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
    )";
    $pdo->exec($sql);
    echo "Table 'order_items' créée.<br>";


    echo "Initialisation de la base de données terminée avec succès.";

} catch(PDOException $e) {
    die("Erreur : " . $e->getMessage());
}
?>
