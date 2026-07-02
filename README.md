# QInsights Landing Page

## Run locally

```bash
pnpm install
pnpm dev
```

## Contact form email and Stratto CRM sync

The `/contact` form sends pricing/contact requests through the serverless endpoint at `api/request-pricing.js`.
The timed homepage lead magnet popup sends guide requests through `api/lead-magnet.js`.

The frontend form validates the required fields in `src/lib/contactRequest.js`, then posts the payload to:

```txt
/api/request-pricing
```

The contact API route uses Nodemailer with SMTP credentials from server environment variables. It can also sync valid contact submissions directly to Stratto CRM from the serverless API. The browser never calls Stratto directly and never receives the Stratto webhook URL.

### Local testing

Copy `.env.example` to `.env`, then fill in the SMTP values.

For local testing with the same recipient used in production, keep:

```env
VITE_SUPPORT_TEAM_EMAILS=partnership@qinsights.ai
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

- `VITE_DEFAULT_FROM_EMAIL` (defaults to `support@qinsights.ai`)
- `VITE_SUPPORT_TEAM_EMAILS` (comma-separated recipients, defaults to `support@qinsights.ai`)
- `STRATTO_WEBHOOK_ENABLED` (`true` enables direct landing-page CRM sync)
- `STRATTO_WEBHOOK_URL` (server-only Stratto webhook URL)

Stratto sync is best-effort: if email delivery succeeds, the endpoint returns success even when Stratto is disabled, missing, slow, or returns an error. SMTP/email delivery remains required for a successful contact submission.

Example:

```env
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_HOST_USER=smtp-user@example.com
EMAIL_HOST_PASSWORD=your-smtp-password
VITE_DEFAULT_FROM_EMAIL=support@qinsights.ai
VITE_SUPPORT_TEAM_EMAILS=support@qinsights.ai,team@example.com
STRATTO_WEBHOOK_ENABLED=false
STRATTO_WEBHOOK_URL=
```

### Request payload

The `/api/request-pricing` endpoint expects a JSON `POST` body with:

- `name`
- `email`
- `organization`
- `licensingNeeds`
- `companyWebsite` honeypot field, which should stay empty

For valid contact submissions, `api/request-pricing.js` maps the form to this Stratto payload:

```json
{
  "email": "amir@example.com",
  "full_name": "Amir Abdallah",
  "company_name": "QInsights",
  "source": "landing_page_contact",
  "registration_origin": "landing_page",
  "licensing_needs": "We need an institutional license for a research team.",
  "submitted_at": "2026-04-30T00:00:00.000Z"
}
```

The endpoint also keeps the hidden honeypot check and adds a lightweight in-memory rate limit. Use platform-level rate limiting as the stronger production control for public traffic.

The `/api/lead-magnet` endpoint expects a JSON `POST` body with:

- `firstName`
- `lastName`
- `email`
- `organization`
- `country`
- `phone` optional
- `companyWebsite` honeypot field, which should stay empty

## Build

```bash
pnpm build
```
