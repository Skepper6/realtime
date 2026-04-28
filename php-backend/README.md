# PHP Contact and Careers Backend

This folder contains the PHP + MySQL backend for the website contact form and careers job applications.

## Files

- `config.php`: PHP backend configuration.
- `bootstrap.php`: shared DB, JSON, CORS, and auth helpers.
- `contact-submit.php`: saves contact form submissions to MySQL.
- `contact-list.php`: returns saved submissions for the admin page.
- `contact_submissions.sql`: MySQL table schema.
- `job/job-application-submit.php`: saves careers form submissions and uploaded PDF resumes.
- `job/job-application-list.php`: returns saved job applications for the admin page.
- `job/job-application-download.php`: lets the admin download stored PDF resumes.
- `job/bootstrap-job.php`: job-only helper layer that works with the existing main backend.
- `job_applications.sql`: MySQL table schema for careers submissions.

## 1. Create the MySQL table

Run the SQL inside `contact_submissions.sql` in your MySQL database.

Run the SQL inside `job_applications.sql` for careers submissions.

The careers endpoints also auto-create the `job_applications` table if it does not exist yet.

## 2. Configure PHP and MySQL

Open `config.php` and edit these values directly:

- `db_host`
- `db_port`
- `db_name`
- `db_user`
- `db_password`
- `job_application_upload_dir`
- `job_application_resume_max_mb`
- `allowed_origins`
- `admin_access_key` (optional)

## 3. Point the Next.js app to the PHP backend

The frontend defaults to the live PHP backend:

- `https://skepper.in/realtime-backend`
- `https://skepper.in/realtime-backend/job`

That matches the server folder:

- `public_html/skepper.in/realtime-backend/job`

If you want to override the defaults, use environment variables:

- `NEXT_PUBLIC_CONTACT_API_BASE_URL`
- `NEXT_PUBLIC_JOB_API_BASE_URL`
- `NEXT_PUBLIC_USE_LOCAL_PHP_BACKEND=true` to use a local PHP folder again
- `NEXT_PUBLIC_LOCAL_CONTACT_API_BASE_URL`
- `NEXT_PUBLIC_LOCAL_JOB_API_BASE_URL`

Keep `adminApiKey` in `src/libs/contactApiConfig.js` if your admin endpoints need one.

## 4. Run the PHP backend locally

If PHP is installed locally, you can run:

```bash
php -S 127.0.0.1:8080 -t php-backend
```

That will expose:

- `http://127.0.0.1:8080/contact-submit.php`
- `http://127.0.0.1:8080/contact-list.php`
- `http://127.0.0.1:8080/job/job-application-submit.php`
- `http://127.0.0.1:8080/job/job-application-list.php`
- `http://127.0.0.1:8080/job/job-application-download.php?id=1`

## Admin page

The website admin view is available at:

- `/admin/contact-details`
- `/admin/job-applications`

These pages read from the PHP backend and show saved contact enquiries and job applications.

## Careers upload rules

- Only PDF resumes are allowed.
- Default max upload size is `5 MB`.
- Uploaded resumes are saved inside `php-backend/uploads/job-applications`.
- On the live server, upload the three job endpoint files into `realtime-backend/job`.
- Upload `job/bootstrap-job.php` into the same `realtime-backend/job` folder too.
