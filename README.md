# QInsights Landing Page

## Run locally

```bash
pnpm install
pnpm dev
```

## Contact form email delivery

The `/contact` form sends pricing/contact requests through the serverless endpoint at `api/request-pricing.js`.
The timed homepage lead magnet popup sends guide requests through `api/lead-magnet.js`.

The frontend form validates the required fields in `src/lib/contactRequest.js`, then posts the payload to:

```txt
/api/request-pricing
```

The API route uses Nodemailer with SMTP credentials from server environment variables.

### Local testing

Copy `.env.example` to `.env`, then fill in the SMTP values.

For local testing with the same recipient used in production, keep:

```env
SUPPORT_TEAM_EMAILS=partnership@qinsights.ai
```

Run the local API server in one terminal:

```bash
pnpm dev:api
```

Run the Vite app in another terminal:

```bash
pnpm dev
```

The contact form still posts to `/api/request-pricing`. During local development, Vite proxies `/api` requests to `http://localhost:3001`.
The lead magnet popup posts to `/api/lead-magnet` through the same local API server and Vite proxy.

### Required server environment variables

Configure these in the deployment environment that runs `api/request-pricing.js`:

- `EMAIL_HOST`
- `EMAIL_PORT` (defaults to `587` when omitted)
- `EMAIL_HOST_USER`
- `EMAIL_HOST_PASSWORD`

### Optional server environment variables

- `DEFAULT_FROM_EMAIL` (defaults to `support@qinsights.ai`)
- `SUPPORT_TEAM_EMAILS` (comma-separated recipients, defaults to `support@qinsights.ai`)

Example:

```env
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_HOST_USER=smtp-user@example.com
EMAIL_HOST_PASSWORD=your-smtp-password
DEFAULT_FROM_EMAIL=support@qinsights.ai
SUPPORT_TEAM_EMAILS=support@qinsights.ai,team@example.com
```

### Request payload

The `/api/request-pricing` endpoint expects a JSON `POST` body with:

- `name`
- `email`
- `organization`
- `licensingNeeds`
- `companyWebsite` honeypot field, which should stay empty

The `/api/lead-magnet` endpoint expects a JSON `POST` body with:

- `name`
- `email`
- `country`
- `companyWebsite` honeypot field, which should stay empty

## Build

```bash
pnpm build
```
