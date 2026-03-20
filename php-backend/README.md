# PHP Contact Backend

This folder contains the PHP + MySQL backend for the website contact form.

## Files

- `config.php`: PHP backend configuration.
- `bootstrap.php`: shared DB, JSON, CORS, and auth helpers.
- `contact-submit.php`: saves contact form submissions to MySQL.
- `contact-list.php`: returns saved submissions for the admin page.
- `contact_submissions.sql`: MySQL table schema.

## 1. Create the MySQL table

Run the SQL inside `contact_submissions.sql` in your MySQL database.

## 2. Configure PHP and MySQL

Open `config.php` and edit these values directly:

- `db_host`
- `db_port`
- `db_name`
- `db_user`
- `db_password`
- `allowed_origins`
- `admin_access_key` (optional)

## 3. Point the Next.js app to the PHP backend

Open `src/libs/contactApiConfig.js` and edit:

- `baseUrl`
- `adminApiKey`

## 4. Run the PHP backend locally

If PHP is installed locally, you can run:

```bash
php -S 127.0.0.1:8080 -t php-backend
```

That will expose:

- `http://127.0.0.1:8080/contact-submit.php`
- `http://127.0.0.1:8080/contact-list.php`

## Admin page

The website admin view is available at:

- `/admin/contact-details`

That page reads from `contact-list.php` and shows the saved contact submissions.
