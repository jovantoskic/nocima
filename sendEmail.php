<?php
/**
 * Created by IntelliJ IDEA.
 * User: pedja
 * Date: 18.9.16.
 * Time: 00.20
 */

if(strlen($_POST['verificationF']) > 1){
    header("Location: index.html");
}
$to      = 'milan.blagojevic@nocima.com';
$subject = 'Kontakt Poruka - Nocima.com';
$message =
    "User: <strong>".$_POST['name']." ".$_POST['email']."</strong><br>".
    "Message: <br>".$_POST['message'];
$headers = 'From: website@nocima.com' . "\r\n" .
    'Reply-To: website@nocima.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
header("Location: index.html");