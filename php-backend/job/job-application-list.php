<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap-job.php';

realtime_handle_cors(['GET', 'OPTIONS']);
realtime_require_method('GET');
realtime_require_admin_access();

$limit = isset($_GET['limit']) ? (int) $_GET['limit'] : 200;
$limit = max(1, min($limit, 500));

try {
    $connection = realtime_connection();
    realtime_ensure_job_applications_table($connection);

    $statement = $connection->prepare(
        'SELECT
            id,
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
            ip_address,
            created_at
        FROM job_applications
        ORDER BY created_at DESC, id DESC
        LIMIT :limit'
    );
    $statement->bindValue(':limit', $limit, PDO::PARAM_INT);
    $statement->execute();

    realtime_json_response(200, [
        'success' => true,
        'message' => 'Job applications fetched successfully.',
        'data' => $statement->fetchAll(),
    ]);
} catch (PDOException $exception) {
    realtime_abort('Unable to fetch job applications right now.', 500, [
        'details' => $exception->getMessage(),
    ]);
}
