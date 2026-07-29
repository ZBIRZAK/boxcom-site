# Deployment reliability guide

This application renders pages on the server and reads its content from the
Boxcom WordPress REST API. A slow or unavailable WordPress request must not be
allowed to run until Vercel terminates the whole page request.

## Protection implemented in this repository

- WordPress content responses are stored in the Next.js persistent data cache
  for 5 minutes.
- Rank Math SEO responses are cached for 15 minutes.
- An uncached WordPress request times out after 8 seconds by default.
- Vercel functions may run for up to 60 seconds, leaving enough time for a
  controlled backend failure to be handled before Vercel terminates the
  function.
- The requested local development version is recorded in `.nvmrc`.

The backend timeout can be changed without a code deployment by setting:

```text
BACKEND_REQUEST_TIMEOUT_MS=8000
```

Keep this value well below the Vercel function duration. Do not set it to
60000. A value between 5000 and 10000 milliseconds is appropriate for normal
WordPress REST requests.

## Vercel configuration

### 1. Verify environment variables

Open **Vercel > Project > Settings > Environment Variables**. Confirm these
variables exist in Production, Preview, and Development where appropriate:

- `BACKEND_HOST`
- `BACKEND_PAGE`
- `BACKEND_POSTS`
- `BACKEND_PORTFOLIO`
- `BACKEND_MEDIA`
- `BACKEND_SEO`
- all page ID variables such as `HOMEPAGE_ID`, `HEADER_ID`, and `FOOTER_ID`
- their `_EN` and `_FR` variants when the two languages use different pages
- `BACKEND_REQUEST_TIMEOUT_MS=8000`
- `SHOW_SERVICE_FAQS=false` to hide service-page FAQs while keeping the contact
  page FAQ visible

After changing an environment variable, redeploy. An existing deployment does
not automatically receive newly changed build-time values.

Do not use `http://localhost:3000` as the production `FRONTEND_HOST`. Set it to
the canonical public origin:

```text
FRONTEND_HOST=https://www.box-com.com
```

### 2. Verify function settings

Open **Settings > Functions**:

1. Enable Fluid Compute if it is available for the project.
2. Confirm the function maximum duration is at least 60 seconds.
3. Keep the function region near the WordPress server when the project plan
   permits region selection.

The repository also declares a 60-second `maxDuration` in `vercel.json`.
Increasing the duration is only a safety margin; caching and fixing a slow
backend are the primary solutions.

### 3. Select a supported Node.js version

Local verification requested for this change uses:

```bash
nvm use 20
npm ci
npm run build
```

Node.js 20 reached upstream end-of-life and Vercel has announced that new
Node.js 20 deployments will be disabled on October 1, 2026. Before that date:

1. Select **Node.js 24.x** in **Settings > Build and Deployment**.
2. Change `.nvmrc` from `20` to `24`.
3. Run `nvm use 24`, `npm ci`, and `npm run build`.
4. Deploy to Preview, test every important route, then promote to Production.

Reference:
<https://vercel.com/changelog/node-js-20-is-being-deprecated>

### 4. Inspect and monitor logs

Open **Vercel > Project > Logs** and filter for:

- `FUNCTION_INVOCATION_TIMEOUT`
- `ECONNABORTED`
- `ETIMEDOUT`
- HTTP `5xx`
- the request ID displayed on a Vercel error page

When an incident occurs, record:

- affected URL
- exact time and timezone
- Vercel request ID
- WordPress response time at the same moment
- whether the request was a cache miss immediately after deployment

Set an uptime monitor to request the homepage and one WordPress REST endpoint
every 5 minutes. Alert when either returns a non-200 response or takes more
than 5 seconds.

## WordPress maintenance and performance

### 1. Update safely

Use a staging copy first:

1. Back up the WordPress database and all files, and confirm that the backup
   can be restored.
2. Record the current PHP, WordPress, theme, ACF/ACF Pro, and Rank Math
   versions.
3. Update PHP to a version supported by the installed WordPress release and
   plugins.
4. Update WordPress core.
5. Update active plugins, especially ACF/ACF Pro and Rank Math.
6. Update the active theme.
7. Clear the WordPress page cache, object cache, CDN cache, and PHP OPcache.
8. Test the REST endpoints listed below.
9. Repeat the updates in Production during a low-traffic maintenance window.
10. Keep the backup until production has remained stable for at least 24
    hours.

Official WordPress instructions:

- <https://wordpress.org/documentation/article/updating-wordpress/>
- <https://wordpress.org/documentation/article/plugins-themes-auto-updates/>
- <https://wordpress.org/documentation/update-php/>

### 2. Test the REST API

Replace the example IDs with the Production IDs:

```bash
curl --connect-timeout 5 --max-time 10 \
  -o /dev/null \
  -w "status=%{http_code} total=%{time_total}s\n" \
  "https://backend-boxcom-site.box-com.com/wp-json/wp/v2/pages/9"
```

Test at least:

- English and French homepage pages
- header and footer pages
- `/wp-json/wp/v2/posts`
- the portfolio endpoint
- the media endpoint
- `/wp-json/rankmath/v1/getHead`

Healthy content endpoints should return HTTP 200 consistently, normally in
less than 2 seconds and always below the application's 8-second timeout.

### 3. Improve WordPress performance

Ask the WordPress host to verify:

- PHP workers are not exhausted during traffic spikes.
- PHP memory is at least 256 MB, subject to the host's recommendation.
- OPcache is enabled.
- MySQL slow-query logging is inspected.
- a persistent object cache such as Redis is enabled when supported.
- WP-Cron is healthy; use **Tools > Site Health** to find scheduled-task
  failures.
- the database has adequate free storage and is regularly optimized.
- DNS and TLS certificates for `backend-boxcom-site.box-com.com` are healthy.

If a cache/security plugin or firewall is installed, ensure it does not block
or challenge legitimate GET requests to `/wp-json/`. Do not expose private
WordPress endpoints, and do not disable the firewall globally.

### 4. Configure caching carefully

It is safe for a CDN or WordPress cache to cache public GET responses from:

- `/wp-json/wp/v2/pages/*`
- `/wp-json/wp/v2/posts`
- public portfolio/media endpoints
- the public Rank Math head endpoint

Do not cache authenticated WordPress admin requests, previews, POST requests,
contact form submissions, or responses containing user-specific data.

After editors publish content, the Vercel site can show the previous cached
version for up to 5 minutes (SEO data for up to 15 minutes). This is the
intentional reliability tradeoff that prevents every visitor from waiting for
WordPress.

## Deployment checklist

Run before promoting a Vercel Preview deployment:

```bash
nvm use 20
npm ci
npm run build
```

Then verify:

1. `/` and `/en` return HTTP 200.
2. French and English service pages return HTTP 200.
3. blog and project detail pages work.
4. contact form submission works.
5. Vercel Logs contain no timeout or backend connection errors.
6. refresh the homepage several times and confirm response times stay stable.
7. temporarily stop only in a staging environment's backend, if available,
   and confirm requests fail before Vercel's 60-second deadline.

Never test backend shutdown or failure injection against the Production
WordPress installation.
