<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];

    $to = 'schnatti.techcodes@gmail.com'; 
    $subject = 'Form Submission';
    $message = "Name: $name\n";
    $message .= "Email: $email\n";

    $headers = "From: $email\r\n";
    if (mail($to, $subject, $message, $headers)) {
        echo 'Email sent successfully';
    } else {
        echo 'Failed to send email';
    }
}
?>
