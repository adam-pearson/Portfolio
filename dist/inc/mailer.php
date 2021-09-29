<?php
//Load Composer's autoloader
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../../vendor/autoload.php';

function sendMail($contactArray) {

    extract($contactArray);

    $emailContents = "<h1>Portfolio Contact Form Submission</h1>\n";
    $emailContents .= "<ul>\n";

    $emailContents .= "<li><strong>Name:</strong> $first_name $last_name</li>\n";
    $emailContents .= "<li><strong>Email:</strong> $email</li>\n";
    $emailContents .= "<li><strong>Subject:</strong> $subject</li>\n";
    $emailContents .= "<li><strong>Message:</strong> $message</li>\n";

    $emailContents .= "</ul>\n";

    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = $_ENV['SMTP_HOST'];
        $mail->Port = $_ENV['SMTP_PORT'];
        $mail->SMTPSecure = $_ENV['SMTP_SECURE'];
        $mail->SMTPAuth = $_ENV['SMTP_AUTH'];
        $mail->Username = $_ENV['SMTP_USERNAME'];
        $mail->Password = $_ENV['SMTP_PASSWORD'];
        $mail->SetFrom('adam@adampearson.design', 'Adam Pearson');
        $mail->addAddress("adam.pearson94@gmail.com", "Adam Pearson");
        $mail->addAddress("adam@adampearson.design", "Adam Pearson");
        $mail->addAddress($email, "$first_name $last_name");
        $mail->IsHTML(true);
        $mail->CharSet = 'UTF-8';

        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = $emailContents;
        $mail->AltBody = $emailContents;

        $mail->send();
        return true;
    } catch (Exception $e) {
        echo $e->getMessage();
        return false;
    }
}