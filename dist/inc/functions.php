<?php

require __DIR__ . '/../../vendor/autoload.php';
require __DIR__ . "/connection.php";

// post to contact database

function postContact($db, $contactArray) {
    try {
        $query = "INSERT INTO contact (first_name, last_name, email, subject, message, date)
                VALUES (:first_name, :last_name, :email, :subject, :message, :date)";
        $stmt = $db->prepare($query);
        $stmt->bindParam(":first_name", $contactArray['first_name']);
        $stmt->bindParam(":last_name", $contactArray['last_name']);
        $stmt->bindParam(":email", $contactArray['email']);
        $stmt->bindParam(":subject", $contactArray['subject']);
        $stmt->bindParam(":message", $contactArray['message']);
        $stmt->bindParam(":date", $contactArray['date']);
        $stmt->execute();
        return true;
    } catch (Exception $e) {
        echo "Unable to connect - ";
        echo $e->getMessage();
        return false;
    }
}

// clean html from a text or textarea input
function cleanHtml($dirty_html) {

    $config = HTMLPurifier_Config::createDefault();
    $purifier = new HTMLPurifier($config);

    $html_purifier_cache_dir = sys_get_temp_dir() . '/HTMLPurifier/DefinitionCache';
    if (!is_dir($html_purifier_cache_dir)) {
      mkdir($html_purifier_cache_dir, 0770, TRUE);
    }

    $config->set('Cache.SerializerPath', $html_purifier_cache_dir);
    $clean_html = $purifier->purify($dirty_html);
    
    return $clean_html;
    
}

// function to replace file_get_contents with CURL
function curl_get_file_contents($URL) {
    $c = curl_init();
    curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($c, CURLOPT_URL, $URL);
    $contents = curl_exec($c);
    curl_close($c);

    if ($contents) return $contents;
    else return FALSE;
}


// verify and post contact form data

function validateForm() {
    $contactArray = [];
    $errorArray = [];
    // test if each field is set or not empty, add it to 
    if (!empty($_POST['first-name'])) {
        $first_name = $_POST['first-name'];
    } else {
        $errorArray[] = "first name";
    }
    if (!empty($_POST['last-name'])) {
        $last_name = $_POST['last-name'];
    } else {
        $errorArray[] = "last name";
    }
    if (!empty($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $email = $_POST['email'];
    } else {
        $errorArray[] = "email";
    }
    if (!empty($_POST['subject'])) {
        $subject = cleanHtml($_POST['subject']);
    }else {
        $errorArray[] = "subject";
    }
    if (!empty($_POST['message'])) {
        $message = cleanHtml($_POST['message']);
    } else {
        $errorArray[] = "message";
    }
    if (!empty($_POST['g-recaptcha-response'])) {
        $captcha = $_POST['g-recaptcha-response'];

        // test the validity of the captcha
        $secretKey = $_ENV['RECAPTCHA_SECRET'];
        $ip = $_SERVER['REMOTE_ADDR'];
        // post request to server
        $url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
        $response = curl_get_file_contents($url);
        $responseKeys = json_decode($response, true);
        
        // should return JSON with success as true
        if (!$responseKeys["success"]) {
            $errorArray[] = "captcha";
        }

    } else {
        $errorArray[] = "captcha";
    }

    // grab today's date in UK time
    $dt = new DateTime();
    $dt->setTimeZone(new DateTimeZone("Europe/London"));
    $today = $dt->format("Y-m-d H:i:s");

    // if no errors showed up, add variables to an array and submit
    if (empty($errorArray)) {
        $contactArray = [
        "first_name" => $first_name,
        "last_name" => $last_name,
        "email" => $email,
        "subject" => $subject,
        "message" => $message,
        "date" => $today
        ];

        return ["passed" => true, "array" => $contactArray];
    } else {
        return ["passed" => false, "array" => $errorArray, "pre-filled" => $contactArray];
    }
}

function createMessage($array) {
    if ($array["passed"]) {
      $message = "Form was submitted successfully!";
    } else {
      $message = "<strong>Error:</strong> please enter a valid ";
      $message .= implode(", ", $array["array"]);
    }
    return $message;
  }