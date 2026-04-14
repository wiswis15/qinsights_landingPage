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

  const resendApiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FORM_FROM || 'QInsights Contact <no-reply@qinsights.ai>'
  const to = parseRecipients(process.env.CONTACT_FORM_TO)

  if (!resendApiKey) {
    return res.status(500).json({ error: 'Email provider is not configured.' })
  }

  const subject = `Pricing request from ${name}`
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeOrganization = escapeHtml(organization)
  const safeLicensingNeeds = escapeHtml(licensingNeeds).replaceAll('\n', '<br />')

  const payload = {
    from,
    to,
    reply_to: email,
    subject,
    html: `
      <h2>New pricing request</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Organization/Institution:</strong> ${safeOrganization}</p>
      <p><strong>Licensing needs:</strong><br />${safeLicensingNeeds}</p>
    `,
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorText = await response.text()
    return res.status(502).json({ error: `Email delivery failed: ${errorText}` })
  }

  return res.status(200).json({ ok: true })
}
