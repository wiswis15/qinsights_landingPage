# QInsights Landing Page

## Run locally

```bash
pnpm install
pnpm dev
```

## Contact form email delivery

The `/contact` form sends pricing/contact requests through the serverless endpoint at `api/request-pricing.js`.

The frontend form validates the required fields in `src/lib/contactRequest.js`, then posts the payload to:

```txt
/api/request-pricing
```

The API route uses Nodemailer with SMTP credentials from server environment variables.

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

The endpoint expects a JSON `POST` body with:

- `name`
- `email`
- `organization`
- `licensingNeeds`
- `companyWebsite` honeypot field, which should stay empty

## Build

```bash
pnpm build
```
