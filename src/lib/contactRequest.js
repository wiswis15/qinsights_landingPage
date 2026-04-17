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

export async function sendContactRequest(payload) {
  const response = await fetch('/api/request-pricing', {
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
