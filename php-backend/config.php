<?php

return [
    // Edit these values directly for your MySQL setup.
    'db_host' => 'localhost',
    'db_port' => '',
    'db_name' => 'realtime_contact',
    'db_user' => 'root',
    'db_password' => '',

    // Allow requests from your Next.js local site.
    'allowed_origins' => [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://localhost:3001',
        'http://127.0.0.1:3001',
    ],

    // Keep empty if you do not want admin API protection for now.
    'admin_access_key' => '',
];
