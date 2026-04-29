const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value) {
  return typeof value === 'string' ? value.trim() : ''
}

export function validateLeadMagnetPayload(payload) {
  const errors = {}

  const name = clean(payload.name)
  const email = clean(payload.email)
  const country = clean(payload.country)

  if (!name) errors.name = 'Name is required.'
  if (!email) errors.email = 'Email is required.'
  if (email && !EMAIL_PATTERN.test(email)) errors.email = 'Enter a valid email address.'
  if (!country) errors.country = 'Country is required.'
  if (payload.companyWebsite) errors.companyWebsite = 'Spam check failed.'

  return { errors, isValid: Object.keys(errors).length === 0 }
}

export async function sendLeadMagnetRequest(payload) {
  const response = await fetch('/api/lead-magnet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(result.error || 'Lead request delivery failed.')
  }
}
