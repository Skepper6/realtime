<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

realtime_handle_cors(['POST', 'OPTIONS']);
realtime_require_method('POST');

$payload = realtime_request_data();

$fullName = realtime_trimmed_string($payload['name'] ?? '', 120);
$email = realtime_trimmed_string($payload['email'] ?? '', 160);
$phone = realtime_trimmed_string($payload['tel'] ?? '', 40);
$serviceInterest = realtime_trimmed_string($payload['service'] ?? '', 120);
$message = realtime_multiline_string($payload['message'] ?? '', 5000);
$pageUrl = realtime_trimmed_string($payload['page_url'] ?? '', 255);
$ipAddress = realtime_trimmed_string($_SERVER['REMOTE_ADDR'] ?? '', 45);

if ($fullName === '' || $email === '' || $phone === '' || $serviceInterest === '') {
    realtime_abort('Please fill in your name, email, phone number, and service.');
}

$fullNameLength = function_exists('mb_strlen') ? mb_strlen($fullName) : strlen($fullName);
if ($fullNameLength < 3 || !preg_match("/^[A-Za-z][A-Za-z\s.'-]{1,}$/", $fullName)) {
    realtime_abort('Please enter a valid full name.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    realtime_abort('Please enter a valid email address.');
}

$phoneDigits = preg_replace('/\D+/', '', $phone);
if ($phoneDigits === null || strlen($phoneDigits) < 10 || strlen($phoneDigits) > 15) {
    realtime_abort('Please enter a valid phone number.');
}

$messageLength = function_exists('mb_strlen') ? mb_strlen($message) : strlen($message);
if ($message === '' || $messageLength < 10) {
    realtime_abort('Please enter a message with at least 10 characters.');
}

try {
    $connection = realtime_connection();
    $statement = $connection->prepare(
        'INSERT INTO contact_submissions (
            full_name,
            email,
            phone,
            service_interest,
            message,
            page_url,
            ip_address
        ) VALUES (
            :full_name,
            :email,
            :phone,
            :service_interest,
            :message,
            :page_url,
            :ip_address
        )'
    );

    $statement->execute([
        ':full_name' => $fullName,
        ':email' => $email,
        ':phone' => $phone,
        ':service_interest' => $serviceInterest,
        ':message' => $message !== '' ? $message : null,
        ':page_url' => $pageUrl !== '' ? $pageUrl : null,
        ':ip_address' => $ipAddress !== '' ? $ipAddress : null,
    ]);

    realtime_json_response(201, [
        'success' => true,
        'message' => 'Thanks, your contact request has been saved successfully.',
        'data' => [
            'id' => (int) $connection->lastInsertId(),
        ],
    ]);
} catch (PDOException $exception) {
    realtime_abort('Unable to save the contact request right now.', 500, [
        'details' => $exception->getMessage(),
    ]);
}
