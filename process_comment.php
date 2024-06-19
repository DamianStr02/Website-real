<?php
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
