<?php
include($_SERVER['DOCUMENT_ROOT']."/class/PHPMailer-master/src/PHPMailer.php");
include($_SERVER['DOCUMENT_ROOT']."/class/PHPMailer-master/src/SMTP.php");
include($_SERVER['DOCUMENT_ROOT']."/class/PHPMailer-master/src/Exception.php");


$nameUser = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$emailUser = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);
$subjectUser = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_SPECIAL_CHARS);
$messageUser = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);
 //Server settings
 $mail = new \PHPMailer\PHPMailer\PHPMailer();
 $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
 $mail->isSMTP();                                            // Send using SMTP
 $mail->Host       = 'files.000webhost.com';                    // Set the SMTP server to send through
 $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
 $mail->Username   = 'portfolioemailtest';                     // SMTP username
 $mail->Password   = 'santana1';                               // SMTP password
 $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
 $mail->Port       = 21;                                    // TCP port to connect to

 //Recipients
 $mail->setFrom($emailUser,$nameUser);
 $mail->addAddress('diogosantana1997@outlook.pt');     // Add a recipient


 // Content
 $mail->isHTML(true);                                  // Set email format to HTML
 $mail->Subject = 'Contacto do site';
 $mail->Body    = "
 Nome: {$nameUser}<br>
 Email: {$emailUser}<br>
 Assunto: {$subjectlUser}<br>
 Mensagem: {$messagelUser}
 ";

 $mail->send();
 echo 'Message has been sent';
 ?>