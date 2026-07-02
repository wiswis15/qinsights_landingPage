import nodemailer from 'nodemailer'
import { syncLeadToStratto } from './lib/stratto.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FIELD_LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  organization: 160,
  phone: 80,
  country: 100,
}

function parseRecipients(value) {
  return (value || 'support@qinsights.ai')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function clean(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function truncate(value, limit) {
  return value.length > limit ? value.slice(0, limit) : value
}

function normalizeLeadMagnetPayload(payload) {
  const firstName = truncate(clean(payload.firstName), FIELD_LIMITS.firstName)
  const lastName = truncate(clean(payload.lastName), FIELD_LIMITS.lastName)

  return {
    firstName,
    lastName,
    name: [firstName, lastName].filter(Boolean).join(' '),
    email: truncate(clean(payload.email).toLowerCase(), FIELD_LIMITS.email),
    organization: truncate(clean(payload.organization), FIELD_LIMITS.organization),
    phone: truncate(clean(payload.phone), FIELD_LIMITS.phone),
    country: truncate(clean(payload.country), FIELD_LIMITS.country),
    companyWebsite: clean(payload.companyWebsite),
  }
}

function validateLeadMagnetPayload(payload) {
  if (!payload.firstName || !payload.lastName || !payload.email || !payload.organization || !payload.country) {
    return 'All fields are required.'
  }

  if (!EMAIL_PATTERN.test(payload.email)) {
    return 'Enter a valid email address.'
  }

  return ''
}

function buildStrattoPayload(payload) {
  return {
    email: payload.email,
    first_name: payload.firstName,
    last_name: payload.lastName,
    full_name: payload.name,
    phone: payload.phone || undefined,
    company_name: payload.organization,
    country: payload.country,
    source: 'lead_magnet_popup',
    registration_origin: 'landing_page_popup',
    lead_magnet: 'QInsights Conversational Analysis Guide',
    submitted_at: new Date().toISOString(),
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const payload = normalizeLeadMagnetPayload(req.body ?? {})

  if (payload.companyWebsite) {
    return res.status(200).json({ ok: true })
  }

  const validationError = validateLeadMagnetPayload(payload)

  if (validationError) {
    return res.status(400).json({ error: validationError })
  }

  const host = process.env.EMAIL_HOST
  const port = Number(process.env.EMAIL_PORT || 587)
  const user = process.env.EMAIL_HOST_USER
  const pass = process.env.EMAIL_HOST_PASSWORD
  const from = process.env.VITE_DEFAULT_FROM_EMAIL || 'support@qinsights.ai'
  const to = parseRecipients(process.env.VITE_SUPPORT_TEAM_EMAILS)

  if (!host || !user || !pass) {
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  const subject = `QInsights guide request from ${payload.name}`
  const safeName = escapeHtml(payload.name)
  const safeFirstName = escapeHtml(payload.firstName)
  const safeLastName = escapeHtml(payload.lastName)
  const safeEmail = escapeHtml(payload.email)
  const safeOrganization = escapeHtml(payload.organization)
  const safePhone = payload.phone ? escapeHtml(payload.phone) : ''
  const safeCountry = escapeHtml(payload.country)

  try {
    await transporter.sendMail({
      from,
      to: to.join(', '),
      replyTo: payload.email,
      subject,
      html: `
        <h2>New QInsights guide request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>First name:</strong> ${safeFirstName}</p>
        <p><strong>Last name:</strong> ${safeLastName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Organization:</strong> ${safeOrganization}</p>
        ${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
        <p><strong>Country:</strong> ${safeCountry}</p>
        <p><strong>Source:</strong> Timed homepage popup</p>
      `,
    })
  } catch (err) {
    return res.status(502).json({ error: `Email delivery failed: ${err.message}` })
  }

  await syncLeadToStratto(buildStrattoPayload(payload))

  return res.status(200).json({ ok: true })
}
