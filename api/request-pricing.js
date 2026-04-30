import nodemailer from 'nodemailer'
import { syncLeadToStratto } from './lib/stratto.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const rateLimitStore = new Map()

const FIELD_LIMITS = {
  name: 120,
  email: 254,
  organization: 160,
  licensingNeeds: 4000,
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

function getClientIp(req) {
  const forwardedFor = req.headers?.['x-forwarded-for']
  const firstForwardedIp = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor

  return clean(firstForwardedIp?.split(',')[0]) || clean(req.headers?.['x-real-ip']) || req.socket?.remoteAddress || 'unknown'
}

function isRateLimited(req) {
  const key = getClientIp(req)
  const now = Date.now()
  const current = rateLimitStore.get(key)

  for (const [storedKey, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(storedKey)
    }
  }

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  current.count += 1
  rateLimitStore.set(key, current)

  return current.count > RATE_LIMIT_MAX_REQUESTS
}

function normalizeContactPayload(payload) {
  return {
    name: truncate(clean(payload.name), FIELD_LIMITS.name),
    email: truncate(clean(payload.email).toLowerCase(), FIELD_LIMITS.email),
    organization: truncate(clean(payload.organization), FIELD_LIMITS.organization),
    licensingNeeds: truncate(clean(payload.licensingNeeds), FIELD_LIMITS.licensingNeeds),
    companyWebsite: clean(payload.companyWebsite),
  }
}

function validateContactPayload(payload) {
  if (!payload.name || !payload.email || !payload.organization || !payload.licensingNeeds) {
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
    full_name: payload.name,
    company_name: payload.organization,
    source: 'landing_page_contact',
    registration_origin: 'landing_page',
    licensing_needs: payload.licensingNeeds,
    submitted_at: new Date().toISOString(),
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const payload = normalizeContactPayload(req.body ?? {})

  if (payload.companyWebsite) {
    return res.status(200).json({ ok: true })
  }

  if (isRateLimited(req)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' })
  }

  const validationError = validateContactPayload(payload)

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

  const subject = `Pricing request from ${payload.name}`
  const safeName = escapeHtml(payload.name)
  const safeEmail = escapeHtml(payload.email)
  const safeOrganization = escapeHtml(payload.organization)
  const safeLicensingNeeds = escapeHtml(payload.licensingNeeds).replaceAll('\n', '<br />')

  try {
    await transporter.sendMail({
      from,
      to: to.join(', '),
      replyTo: payload.email,
      subject,
      html: `
        <h2>New pricing request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Organization/Institution:</strong> ${safeOrganization}</p>
        <p><strong>Licensing needs:</strong><br />${safeLicensingNeeds}</p>
      `,
    })
  } catch (err) {
    return res.status(502).json({ error: `Email delivery failed: ${err.message}` })
  }

  await syncLeadToStratto(buildStrattoPayload(payload))

  return res.status(200).json({ ok: true })
}
