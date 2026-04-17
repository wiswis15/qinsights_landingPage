import nodemailer from 'nodemailer'

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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const { name, email, organization, licensingNeeds, companyWebsite } = req.body ?? {}

  if (companyWebsite) {
    return res.status(200).json({ ok: true })
  }

  if (!name || !email || !organization || !licensingNeeds) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  const host = process.env.EMAIL_HOST
  const port = Number(process.env.EMAIL_PORT || 587)
  const user = process.env.EMAIL_HOST_USER
  const pass = process.env.EMAIL_HOST_PASSWORD
  const from = process.env.DEFAULT_FROM_EMAIL || 'support@qinsights.ai'
  const to = parseRecipients(process.env.SUPPORT_TEAM_EMAILS)

  if (!host || !user || !pass) {
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  const subject = `Pricing request from ${name}`
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeOrganization = escapeHtml(organization)
  const safeLicensingNeeds = escapeHtml(licensingNeeds).replaceAll('\n', '<br />')

  try {
    await transporter.sendMail({
      from,
      to: to.join(', '),
      replyTo: email,
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

  return res.status(200).json({ ok: true })
}
