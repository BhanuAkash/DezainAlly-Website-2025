<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libs/PHPMailer/PHPMailer.php';
require 'libs/PHPMailer/SMTP.php';
require 'libs/PHPMailer/Exception.php';

$email_host = 'smtp.gmail.com';
$email_username = 'infodw@dezainally.com'; // replace
$email_password = 'flrw rcjj dady pdkh'; // replace
$email_port = 587;

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Read JSON payload (from React)
    $data = json_decode(file_get_contents("php://input"), true);

    $name = htmlspecialchars($data['name'] ?? '');
    $company = htmlspecialchars($data['company'] ?? '');
    $email = htmlspecialchars($data['email'] ?? '');
    $phone = htmlspecialchars($data['phone'] ?? '');
    $typeOfProject = htmlspecialchars($data['typeOfProject'] ?? '');
    $whyNow = htmlspecialchars($data['whyNow'] ?? '');
    $whyUs = htmlspecialchars($data['whyUs'] ?? '');
    $services = htmlspecialchars(implode(', ', $data['services'] ?? []));

    if (!$name || !$email || !$phone) {
        echo json_encode(["status" => "error", "message" => "Missing required fields"]);
        exit;
    }

    try {
        // Send to Admin
        $adminMail = new PHPMailer(true);
        $adminMail->isSMTP();
        $adminMail->Host = $email_host;
        $adminMail->SMTPAuth = true;
        $adminMail->Username = $email_username;
        $adminMail->Password = $email_password;
        $adminMail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $adminMail->Port = $email_port;

        $adminMail->setFrom($email_username, 'DezainAlly');
        $adminMail->addAddress('infodw@dezainally.com');
        // $adminMail->addAddress('rakesh.tattvahilife@gmail.com');
        // $adminMail->addAddress('rakeshnia11@gmail.com');
        $adminMail->isHTML(true);
        $adminMail->Subject = 'New Project Inquiry - DezainAlly';
       $adminMail->Body = '
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Project Inquiry - DezainAlly</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f7f7f7;
      margin: 0;
      padding: 0;
      color: #333333;
    }
    .container {
      background-color: #ffffff;
      max-width: 650px;
      margin: 30px auto;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #000000;
      color: #ffffff;
      padding: 25px 20px;
      text-align: center;
    }
    .header h2 {
      margin: 0;
      font-size: 26px;
      letter-spacing: 0.5px;
    }
    .body {
      padding: 25px 30px;
      line-height: 1.7;
    }
    .body p {
      margin: 8px 0;
      font-size: 15px;
    }
    .body strong {
      color: #000000;
    }
    .highlight {
      background-color: #f3f3f3;
      border-radius: 8px;
      padding: 15px;
      margin: 15px 0;
    }
    .footer {
      background-color: #000000;
      color: #ffffff;
      text-align: center;
      padding: 15px;
      font-size: 13px;
    }
    .footer a {
      color: #ffffff;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>ðŸ§© New Project Inquiry</h2>
    </div>
    <div class="body">
      <p><strong>Name:</strong> ' . htmlspecialchars($name) . '</p>
      <p><strong>Company:</strong> ' . htmlspecialchars($company) . '</p>
      <p><strong>Email:</strong> ' . htmlspecialchars($email) . '</p>
      <p><strong>Phone:</strong> ' . htmlspecialchars($phone) . '</p>
      <p><strong>Type of Project:</strong> ' . htmlspecialchars($typeOfProject) . '</p>
      <div class="highlight">
        <p><strong>Why Now:</strong><br>' . nl2br(htmlspecialchars($whyNow)) . '</p>
        <p><strong>Why Us:</strong><br>' . nl2br(htmlspecialchars($whyUs)) . '</p>
      </div>
      <p><strong>Selected Services:</strong> ' . htmlspecialchars($services) . '</p>
      <hr style="border:none; border-top:1px solid #ddd; margin:20px 0;">
      <p><em>Sent from <strong>DezainAlly Website</strong>.</em></p>
    </div>
    <div class="footer">
      &copy; ' . date("Y") . ' DezainAlly | <a href="https://dezainally.com">dezainally.com</a>
    </div>
  </div>
</body>
</html>';


        $adminMail->send();

        // Auto Reply to User
        $userMail = new PHPMailer(true);
        $userMail->isSMTP();
        $userMail->Host = $email_host;
        $userMail->SMTPAuth = true;
        $userMail->Username = $email_username;
        $userMail->Password = $email_password;
        $userMail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $userMail->Port = $email_port;

        $userMail->setFrom($email_username, 'DezainAlly');
        $userMail->addAddress($email);
        $userMail->isHTML(true);
        $userMail->Subject = "Thank You for Contacting DezainAlly!";
       $userMail->Body = '
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You - DezainAlly</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f7fb;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      background: #ffffff;
      max-width: 600px;
      margin: 30px auto;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #000000;
      color: #ffffff;
      text-align: center;
      padding: 30px 20px;
    }
    .header h2 {
      margin: 0;
      font-size: 26px;
      letter-spacing: 1px;
    }
    .body {
      padding: 30px 25px;
      line-height: 1.6;
    }
    .body h3 {
      color: #000000;
      margin-bottom: 15px;
    }
    .details {
      background-color: #f1f1f1;
      border-radius: 8px;
      padding: 15px;
      margin-top: 15px;
    }
    .details li {
      margin-bottom: 8px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      background-color: #000000;
      color: #ffffff;
      font-size: 13px;
    }
    .footer a {
      color: #ffffff;
      text-decoration: none;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Thank You for Contacting DezainAlly</h2>
    </div>
    <div class="body">
      <h3>Hi ' . htmlspecialchars($name) . ',</h3>
      <p>Thank you for reaching out to <strong>DezainAlly</strong>! Weâ€™ve received your inquiry and our team will connect with you soon.</p>
      <p><strong>Your Details:</strong></p>
      <ul class="details">
        <li><strong>Name:</strong> ' . htmlspecialchars($name) . '</li>
        <li><strong>Phone:</strong> ' . htmlspecialchars($phone) . '</li>
        <li><strong>Email:</strong> ' . htmlspecialchars($email) . '</li>
        <li><strong>Type of Project:</strong> ' . htmlspecialchars($typeOfProject) . '</li>
        <li><strong>Services:</strong> ' . htmlspecialchars($services) . '</li>
      </ul>
      <p>We appreciate your interest and canâ€™t wait to collaborate with you on something extraordinary!</p>
      <p>â€” The DezainAlly Team</p>
    </div>
    <div class="footer">
      &copy; ' . date("Y") . ' DezainAlly | <a href="https://dezainally.com">dezainally.com</a>
    </div>
  </div>
</body>
</html>';

$userMail->send(); 

        echo json_encode(["status" => "success", "message" => "Mail sent successfully"]);
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Mailer Error: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request"]);
}
