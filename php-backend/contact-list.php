<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

realtime_handle_cors(['GET', 'OPTIONS']);
realtime_require_method('GET');
realtime_require_admin_access();

$limit = isset($_GET['limit']) ? (int) $_GET['limit'] : 200;
$limit = max(1, min($limit, 500));

try {
    $connection = realtime_connection();
    $statement = $connection->prepare(
        'SELECT
            id,
            full_name,
            email,
            phone,
            service_interest,
            message,
            page_url,
            ip_address,
            created_at
        FROM contact_submissions
        ORDER BY created_at DESC, id DESC
        LIMIT :limit'
    );
    $statement->bindValue(':limit', $limit, PDO::PARAM_INT);
    $statement->execute();

    realtime_json_response(200, [
        'success' => true,
        'message' => 'Contact submissions fetched successfully.',
        'data' => $statement->fetchAll(),
    ]);
} catch (PDOException $exception) {
    realtime_abort('Unable to fetch contact submissions right now.', 500, [
        'details' => $exception->getMessage(),
    ]);
}
