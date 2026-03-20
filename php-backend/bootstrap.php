<?php

declare(strict_types=1);

function realtime_config(): array
{
    static $config;

    if ($config === null) {
        $config = require __DIR__ . '/config.php';
    }

    return $config;
}

function realtime_json_response(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function realtime_abort(string $message, int $statusCode = 400, array $extra = []): void
{
    realtime_json_response($statusCode, array_merge([
        'success' => false,
        'message' => $message,
    ], $extra));
}

function realtime_handle_cors(array $allowedMethods): void
{
    $config = realtime_config();
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $allowedOrigins = $config['allowed_origins'] ?? [];

    if ($origin !== '' && in_array($origin, $allowedOrigins, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Vary: Origin');
    }

    header('Access-Control-Allow-Headers: Content-Type, X-Admin-Key');
    header('Access-Control-Allow-Methods: ' . implode(', ', $allowedMethods));

    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

function realtime_require_method(string $expectedMethod): void
{
    $actualMethod = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

    if ($actualMethod !== strtoupper($expectedMethod)) {
        realtime_abort('Method not allowed.', 405);
    }
}

function realtime_connection(): PDO
{
    static $connection;

    if ($connection instanceof PDO) {
        return $connection;
    }

    $config = realtime_config();
    $dsn = sprintf(
        'mysql:host=%s;port=%s;dbname=%s;charset=utf8mb4',
        $config['db_host'],
        $config['db_port'],
        $config['db_name']
    );

    try {
        $connection = new PDO($dsn, $config['db_user'], $config['db_password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    } catch (PDOException $exception) {
        realtime_abort('Database connection failed. Check the PHP backend config.', 500, [
            'details' => $exception->getMessage(),
        ]);
    }

    return $connection;
}

function realtime_request_data(): array
{
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';

    if (stripos($contentType, 'application/json') !== false) {
        $rawBody = file_get_contents('php://input');
        $decoded = json_decode($rawBody ?: '[]', true);

        if (!is_array($decoded)) {
            realtime_abort('Invalid JSON payload.', 422);
        }

        return $decoded;
    }

    return $_POST;
}

function realtime_trimmed_string(mixed $value, int $maxLength = 255): string
{
    if (!is_string($value)) {
        return '';
    }

    $value = trim(preg_replace('/\s+/', ' ', $value) ?? '');

    if ($value === '') {
        return '';
    }

    return realtime_limit($value, $maxLength);
}

function realtime_multiline_string(mixed $value, int $maxLength = 5000): string
{
    if (!is_string($value)) {
        return '';
    }

    $value = trim($value);

    if ($value === '') {
        return '';
    }

    return realtime_limit($value, $maxLength);
}

function realtime_limit(string $value, int $maxLength): string
{
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength);
    }

    return substr($value, 0, $maxLength);
}

function realtime_require_admin_access(): void
{
    $config = realtime_config();
    $expectedKey = trim((string) ($config['admin_access_key'] ?? ''));

    if ($expectedKey === '') {
        return;
    }

    $providedKey = trim((string) ($_SERVER['HTTP_X_ADMIN_KEY'] ?? ($_GET['key'] ?? '')));

    if ($providedKey !== $expectedKey) {
        realtime_abort('Admin access denied.', 401);
    }
}
