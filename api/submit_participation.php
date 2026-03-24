<?php
header('Content-Type: application/json');
require_once 'db_config_main.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $fullname = $_POST['fullname'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $city = $_POST['city'] ?? '';
    $store = $_POST['store'] ?? '';
    $optin = isset($_POST['optin']) ? 1 : 0;
    
    // Validation basique
    if (empty($fullname) || empty($phone) || empty($city) || empty($store)) {
        echo json_encode(['success' => false, 'message' => 'Veuillez remplir tous les champs obligatoires.']);
        exit;
    }
    
    // Gestion de l'upload
    $uploadDir =  __DIR__ . '/../uploads/receipts/';
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    
    $receiptPath = '';
    if (isset($_FILES['receipt'])) {
        if ($_FILES['receipt']['error'] === UPLOAD_ERR_OK) {
            $fileTmpPath = $_FILES['receipt']['tmp_name'];
            $fileName = $_FILES['receipt']['name'];
            $fileSize = $_FILES['receipt']['size'];
            $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
            
            $allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf'];
            if (!in_array($fileExtension, $allowedExtensions)) {
                echo json_encode(['success' => false, 'message' => 'Format de fichier non supporté (JPG, PNG, PDF uniquement).']);
                exit;
            }
            
            // Limite de taille (ex: 5Mo)
            if ($fileSize > 5 * 1024 * 1024) {
                 echo json_encode(['success' => false, 'message' => 'Le fichier est trop volumineux (Max 5Mo).']);
                 exit;
            }
            
            $newFileName = uniqid() . '.' . $fileExtension;
            $destPath = $uploadDir . $newFileName;
            
            if(move_uploaded_file($fileTmpPath, $destPath)) {
                $receiptPath = 'uploads/receipts/' . $newFileName;
            }     
            else {
                $error = error_get_last();
                $errorMsg = isset($error['message']) ? $error['message'] : 'Erreur inconnue';
                echo json_encode(['success' => false, 'message' => 'Erreur sauvegarde: ' . $errorMsg]);
                exit;
            }
        } elseif ($_FILES['receipt']['error'] !== UPLOAD_ERR_NO_FILE) {
             echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'upload du fichier.']);
             exit;
        }
    }

    if (empty($receiptPath)) {
        echo json_encode(['success' => false, 'message' => 'La preuve d\'achat est obligatoire.']);
        exit;
    }
    
    try {
        // Génération d'un code unique simple (ex: NGON-XXXX)
        $code = 'NGON-' . strtoupper(substr(uniqid(), -4));

        $stmt = $pdo->prepare("INSERT INTO participations (fullname, phone, city, store, receipt_path, optin, code) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$fullname, $phone, $city, $store, $receiptPath, $optin, $code]);
        
        echo json_encode(['success' => true, 'message' => 'Votre candidature a été enregistrée avec succès ! Code: ' . $code]);
    } catch(PDOException $e) {
        error_log("DB Error: " . $e->getMessage());
        echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'enregistrement en base de données.']);
    }
    
} else {
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
}
?>
