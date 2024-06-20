<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $review = htmlspecialchars($_POST['review']);
    $name = htmlspecialchars($_POST['name']);
    $comment = htmlspecialchars($_POST['comment']);
    
    $entry = "Imię: $name\nKomentarz: $comment\n\n";
    
    file_put_contents("comments/$review.txt", $entry, FILE_APPEND);
    
    header("Location: $review.html");
    exit();
} else {
    echo "Formularz nie został wysłany poprawnie.";
}
?>
