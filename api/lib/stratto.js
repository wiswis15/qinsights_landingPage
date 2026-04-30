const STRATTO_TIMEOUT_MS = 5000
const RESPONSE_PREVIEW_LENGTH = 300

function isEnabled(value) {
  return String(value || '').toLowerCase() === 'true'
}

function preview(value) {
  return String(value || '').slice(0, RESPONSE_PREVIEW_LENGTH)
}

export async function syncLeadToStratto(payload) {
  if (!isEnabled(process.env.STRATTO_WEBHOOK_ENABLED)) {
    console.info('[stratto] Sync skipped because STRATTO_WEBHOOK_ENABLED is not true.')
    return { ok: false, skipped: true, reason: 'disabled' }
  }

  const webhookUrl = process.env.STRATTO_WEBHOOK_URL

  if (!webhookUrl) {
    console.warn('[stratto] Sync skipped because STRATTO_WEBHOOK_URL is not configured.')
    return { ok: false, skipped: true, reason: 'missing_url' }
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), STRATTO_TIMEOUT_MS)

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })

    const responseText = await response.text().catch(() => '')

    if (!response.ok) {
      console.warn('[stratto] Sync failed.', {
        status: response.status,
        responsePreview: preview(responseText),
      })

      return { ok: false, status: response.status }
    }

    console.info('[stratto] Sync succeeded.', { status: response.status })
    return { ok: true, status: response.status }
  } catch (error) {
    console.warn('[stratto] Sync failed.', {
      error: error.name === 'AbortError' ? 'timeout' : error.message,
    })

    return { ok: false, error: error.name === 'AbortError' ? 'timeout' : error.message }
  } finally {
    clearTimeout(timeout)
  }
}
