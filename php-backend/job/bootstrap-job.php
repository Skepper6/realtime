<?php

declare(strict_types=1);

$bootstrapPath = dirname(__DIR__) . '/bootstrap.php';

if (!is_file($bootstrapPath)) {
    $bootstrapPath = __DIR__ . '/bootstrap.php';
}

require $bootstrapPath;

if (!function_exists('realtime_string_length')) {
    function realtime_string_length(string $value): int
    {
        if (function_exists('mb_strlen')) {
            return mb_strlen($value);
        }

        return strlen($value);
    }
}

if (!function_exists('realtime_job_application_upload_dir')) {
    function realtime_job_application_upload_dir(): string
    {
        $config = function_exists('realtime_config') ? realtime_config() : [];
        $configuredPath = trim((string) ($config['job_application_upload_dir'] ?? ''));

        if ($configuredPath !== '') {
            return $configuredPath;
        }

        return dirname(__DIR__) . '/uploads/job-applications';
    }
}

if (!function_exists('realtime_job_application_resume_max_mb')) {
    function realtime_job_application_resume_max_mb(): int
    {
        $config = function_exists('realtime_config') ? realtime_config() : [];
        $configuredLimit = (int) ($config['job_application_resume_max_mb'] ?? 5);

        return max(1, $configuredLimit);
    }
}

if (!function_exists('realtime_job_application_resume_max_bytes')) {
    function realtime_job_application_resume_max_bytes(): int
    {
        return realtime_job_application_resume_max_mb() * 1024 * 1024;
    }
}

if (!function_exists('realtime_ensure_job_applications_table')) {
    function realtime_ensure_job_applications_table(PDO $connection): void
    {
        $connection->exec(
            'CREATE TABLE IF NOT EXISTS job_applications (
                id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
                job_id INT UNSIGNED NOT NULL,
                job_title VARCHAR(160) NOT NULL,
                full_name VARCHAR(120) NOT NULL,
                email VARCHAR(160) NOT NULL,
                phone VARCHAR(40) NOT NULL,
                cover_letter TEXT NULL,
                resume_original_name VARCHAR(255) NOT NULL,
                resume_stored_name VARCHAR(255) NOT NULL,
                resume_mime_type VARCHAR(100) NOT NULL,
                resume_size_bytes BIGINT UNSIGNED NOT NULL,
                page_url VARCHAR(255) NULL,
                ip_address VARCHAR(45) NULL,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (id),
                KEY idx_job_applications_created_at (created_at),
                KEY idx_job_applications_job_id (job_id),
                KEY idx_job_applications_email (email)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
        );
    }
}
