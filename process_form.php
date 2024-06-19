<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $entry = "Imię: $name\nEmail: $email\nWiadomość: $message\n\n";
    
    file_put_contents("messages.txt", $entry, FILE_APPEND);
    
    echo "Dziękujemy za kontakt, " . $name . "!";
} else {
    echo "Formularz nie został wysłany poprawnie.";
}
?>

