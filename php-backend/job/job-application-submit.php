<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap-job.php';

realtime_handle_cors(['POST', 'OPTIONS']);
realtime_require_method('POST');

$payload = realtime_request_data();
$maxResumeSizeMb = realtime_job_application_resume_max_mb();
$maxResumeSizeBytes = realtime_job_application_resume_max_bytes();

$jobId = filter_var($payload['job_id'] ?? null, FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 1],
]);
$jobTitle = realtime_trimmed_string($payload['job_title'] ?? '', 160);
$fullName = realtime_trimmed_string($payload['name'] ?? '', 120);
$email = realtime_trimmed_string($payload['email'] ?? '', 160);
$phone = realtime_trimmed_string($payload['tel'] ?? '', 40);
$coverLetter = realtime_multiline_string($payload['cover_letter'] ?? '', 5000);
$pageUrl = realtime_trimmed_string($payload['page_url'] ?? '', 255);
$ipAddress = realtime_trimmed_string($_SERVER['REMOTE_ADDR'] ?? '', 45);
$resumeFile = $_FILES['resume'] ?? null;

if ($jobId === false || $jobTitle === '') {
    realtime_abort('The selected job could not be identified. Please refresh the page and try again.');
}

if ($fullName === '' || $email === '' || $phone === '' || $coverLetter === '') {
    realtime_abort('Please fill in your name, email, phone number, and cover letter.');
}

if (realtime_string_length($fullName) < 3 || !preg_match("/^[A-Za-z][A-Za-z\s.'-]{1,}$/", $fullName)) {
    realtime_abort('Please enter a valid full name.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    realtime_abort('Please enter a valid email address.');
}

$phoneDigits = preg_replace('/\D+/', '', $phone);
if ($phoneDigits === null || strlen($phoneDigits) < 10 || strlen($phoneDigits) > 15) {
    realtime_abort('Please enter a valid phone number.');
}

if (realtime_string_length($coverLetter) < 10) {
    realtime_abort('Please enter a cover letter with at least 10 characters.');
}

if (!is_array($resumeFile)) {
    realtime_abort('Please attach your resume as a PDF file.');
}

$resumeUploadError = (int) ($resumeFile['error'] ?? UPLOAD_ERR_NO_FILE);
if ($resumeUploadError !== UPLOAD_ERR_OK) {
    $message = match ($resumeUploadError) {
        UPLOAD_ERR_INI_SIZE, UPLOAD_ERR_FORM_SIZE => "Resume must be a PDF file up to {$maxResumeSizeMb} MB.",
        UPLOAD_ERR_PARTIAL => 'The resume upload was interrupted. Please try again.',
        UPLOAD_ERR_NO_FILE => 'Please attach your resume as a PDF file.',
        default => 'Unable to upload the resume right now. Please try again.',
    };

    realtime_abort($message);
}

$resumeTmpPath = (string) ($resumeFile['tmp_name'] ?? '');
$resumeOriginalName = realtime_trimmed_string($resumeFile['name'] ?? 'resume.pdf', 255);
$resumeSizeBytes = max(0, (int) ($resumeFile['size'] ?? 0));

if ($resumeTmpPath === '' || !is_uploaded_file($resumeTmpPath)) {
    realtime_abort('Uploaded resume could not be processed. Please try again.');
}

if ($resumeSizeBytes <= 0) {
    realtime_abort('The uploaded resume is empty. Please upload a valid PDF file.');
}

if ($resumeSizeBytes > $maxResumeSizeBytes) {
    realtime_abort("Resume must be a PDF file up to {$maxResumeSizeMb} MB.");
}

$resumeExtension = strtolower(pathinfo($resumeOriginalName, PATHINFO_EXTENSION));
if ($resumeExtension !== 'pdf') {
    realtime_abort('Only PDF resumes are allowed.');
}

$resumeSignature = file_get_contents($resumeTmpPath, false, null, 0, 5);
if ($resumeSignature !== '%PDF-') {
    realtime_abort('Only PDF resumes are allowed.');
}

$resumeMimeType = 'application/pdf';
if (class_exists('finfo')) {
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $detectedMimeType = (string) $finfo->file($resumeTmpPath);

    if ($detectedMimeType !== '') {
        $resumeMimeType = $detectedMimeType;
    }
}

$uploadDir = realtime_job_application_upload_dir();
$safeBaseName = preg_replace('/[^A-Za-z0-9._-]+/', '_', pathinfo($resumeOriginalName, PATHINFO_FILENAME)) ?? '';
$safeBaseName = trim($safeBaseName, '._-');
$safeBaseName = $safeBaseName !== '' ? $safeBaseName : 'resume';
$storedResumeName = '';
$storedResumePath = '';

try {
    $connection = realtime_connection();
    realtime_ensure_job_applications_table($connection);

    if (!is_dir($uploadDir) && !mkdir($uploadDir, 0775, true) && !is_dir($uploadDir)) {
        realtime_abort('Unable to prepare the resume upload folder.', 500);
    }

    $storedResumeName = sprintf('%s-%s.pdf', $safeBaseName, bin2hex(random_bytes(8)));
    $storedResumePath = $uploadDir . DIRECTORY_SEPARATOR . $storedResumeName;

    if (!move_uploaded_file($resumeTmpPath, $storedResumePath)) {
        realtime_abort('Unable to save the uploaded resume right now.', 500);
    }

    @chmod($storedResumePath, 0644);

    $statement = $connection->prepare(
        'INSERT INTO job_applications (
            job_id,
            job_title,
            full_name,
            email,
            phone,
            cover_letter,
            resume_original_name,
            resume_stored_name,
            resume_mime_type,
            resume_size_bytes,
            page_url,
            ip_address
        ) VALUES (
            :job_id,
            :job_title,
            :full_name,
            :email,
            :phone,
            :cover_letter,
            :resume_original_name,
            :resume_stored_name,
            :resume_mime_type,
            :resume_size_bytes,
            :page_url,
            :ip_address
        )'
    );

    $statement->execute([
        ':job_id' => (int) $jobId,
        ':job_title' => $jobTitle,
        ':full_name' => $fullName,
        ':email' => $email,
        ':phone' => $phone,
        ':cover_letter' => $coverLetter,
        ':resume_original_name' => $resumeOriginalName !== '' ? $resumeOriginalName : 'resume.pdf',
        ':resume_stored_name' => $storedResumeName,
        ':resume_mime_type' => $resumeMimeType !== '' ? $resumeMimeType : 'application/pdf',
        ':resume_size_bytes' => $resumeSizeBytes,
        ':page_url' => $pageUrl !== '' ? $pageUrl : null,
        ':ip_address' => $ipAddress !== '' ? $ipAddress : null,
    ]);

    realtime_json_response(201, [
        'success' => true,
        'message' => 'We have received your application. Our team will contact you regarding the next steps soon.',
        'data' => [
            'id' => (int) $connection->lastInsertId(),
            'job_id' => (int) $jobId,
        ],
    ]);
} catch (PDOException $exception) {
    if (is_file($storedResumePath)) {
        @unlink($storedResumePath);
    }

    realtime_abort('Unable to save the job application right now.', 500, [
        'details' => $exception->getMessage(),
    ]);
} catch (Throwable $exception) {
    if (is_file($storedResumePath)) {
        @unlink($storedResumePath);
    }

    realtime_abort('Unable to save the job application right now.', 500, [
        'details' => $exception->getMessage(),
    ]);
}
