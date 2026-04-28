<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap-job.php';

realtime_handle_cors(['GET', 'OPTIONS']);
realtime_require_method('GET');
realtime_require_admin_access();

$applicationId = filter_var($_GET['id'] ?? null, FILTER_VALIDATE_INT, [
    'options' => ['min_range' => 1],
]);

if ($applicationId === false) {
    realtime_abort('A valid job application id is required.', 422);
}

try {
    $connection = realtime_connection();
    realtime_ensure_job_applications_table($connection);

    $statement = $connection->prepare(
        'SELECT
            id,
            resume_original_name,
            resume_stored_name
        FROM job_applications
        WHERE id = :id
        LIMIT 1'
    );
    $statement->execute([':id' => (int) $applicationId]);

    $application = $statement->fetch();

    if (!$application) {
        realtime_abort('Job application not found.', 404);
    }

    $storedResumeName = basename((string) ($application['resume_stored_name'] ?? ''));
    if ($storedResumeName === '') {
        realtime_abort('Resume file is missing for this application.', 404);
    }

    $resumePath = realtime_job_application_upload_dir() . DIRECTORY_SEPARATOR . $storedResumeName;
    if (!is_file($resumePath)) {
        realtime_abort('Resume file could not be found on the server.', 404);
    }

    $originalResumeName = realtime_trimmed_string($application['resume_original_name'] ?? '', 255);
    if ($originalResumeName === '') {
        $originalResumeName = 'resume.pdf';
    }

    if (strtolower(pathinfo($originalResumeName, PATHINFO_EXTENSION)) !== 'pdf') {
        $originalResumeName .= '.pdf';
    }

    $fallbackDownloadName = preg_replace('/[^A-Za-z0-9._-]+/', '_', $originalResumeName) ?? 'resume.pdf';
    $fallbackDownloadName = trim($fallbackDownloadName, '._-');
    $fallbackDownloadName = $fallbackDownloadName !== '' ? $fallbackDownloadName : 'resume.pdf';

    header('Content-Type: application/pdf');
    header('Content-Length: ' . (string) filesize($resumePath));
    header('Cache-Control: private, max-age=0, must-revalidate');
    header('X-Content-Type-Options: nosniff');
    header(
        'Content-Disposition: attachment; filename="' .
        $fallbackDownloadName .
        '"; filename*=UTF-8\'\'' .
        rawurlencode($originalResumeName)
    );

    readfile($resumePath);
    exit;
} catch (PDOException $exception) {
    realtime_abort('Unable to download the resume right now.', 500, [
        'details' => $exception->getMessage(),
    ]);
}
