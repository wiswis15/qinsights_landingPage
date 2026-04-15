const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value) {
  return typeof value === 'string' ? value.trim() : ''
}

export function validateContactPayload(payload) {
  const errors = {}

  const name = clean(payload.name)
  const email = clean(payload.email)
  const organization = clean(payload.organization)
  const licensingNeeds = clean(payload.licensingNeeds)

  if (!name) errors.name = 'Name is required.'
  if (!email) errors.email = 'Email is required.'
  if (email && !EMAIL_PATTERN.test(email)) errors.email = 'Enter a valid email address.'
  if (!organization) errors.organization = 'Organization / Institution is required.'
  if (!licensingNeeds) errors.licensingNeeds = 'Please share your licensing needs.'
  if (payload.companyWebsite) errors.companyWebsite = 'Spam check failed.'

  return { errors, isValid: Object.keys(errors).length === 0 }
}

async function sendViaEmailJs(payload) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const receiverEmail = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || 'support@qinsights.ai'

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Email service is not configured. Missing EmailJS environment variables.')
  }

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        to_email: receiverEmail,
        name: clean(payload.name),
        email: clean(payload.email),
        organization: clean(payload.organization),
        licensing_needs: clean(payload.licensingNeeds),
      },
    }),
  })

  if (!response.ok) {
    const reason = await response.text()
    throw new Error(`Email delivery failed: ${reason}`)
  }
}

async function sendViaApi(payload) {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_API_ENDPOINT || '/api/request-pricing'

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(result.error || 'Email delivery failed.')
  }
}

export async function sendContactRequest(payload) {
  const provider = (import.meta.env.VITE_CONTACT_FORM_PROVIDER || 'emailjs').toLowerCase()

  if (provider === 'api') {
    await sendViaApi(payload)
    return
  }

  await sendViaEmailJs(payload)
}
