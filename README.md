# QInsights Landing Page

## Run locally

```bash
pnpm install
pnpm dev
```

## Contact form email delivery

The `/contact` form now supports two delivery modes configured by env:

1. `emailjs` (default): sends directly from the frontend.
2. `api`: sends via the serverless endpoint in `api/request-pricing.js`.

Copy `.env.example` to `.env` and set values.

### EmailJS setup (frontend-only)

Set:

- `VITE_CONTACT_FORM_PROVIDER=emailjs`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_CONTACT_RECEIVER_EMAIL` (for example `support@qinsights.ai`)

Your EmailJS template should accept these params:

- `to_email`
- `name`
- `email`
- `organization`
- `licensing_needs`

### API mode setup (optional)

Set:

- `VITE_CONTACT_FORM_PROVIDER=api`
- `VITE_CONTACT_FORM_API_ENDPOINT=/api/request-pricing` (or your deployed API URL)

For `api/request-pricing.js`, configure server env:

- `RESEND_API_KEY`
- `CONTACT_FORM_FROM`
- `CONTACT_FORM_TO`

## Build

```bash
pnpm build
```
