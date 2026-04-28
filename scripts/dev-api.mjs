import http from 'node:http'
import process from 'node:process'
import handler from '../api/request-pricing.js'

try {
  process.loadEnvFile('.env')
} catch {
  // The local API can still run with environment variables provided by the shell.
}

const port = Number(process.env.LOCAL_API_PORT || 3001)

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(payload))
}

async function readJsonBody(req) {
  const chunks = []

  for await (const chunk of req) {
    chunks.push(chunk)
  }

  if (!chunks.length) return undefined

  const body = Buffer.concat(chunks).toString('utf8')
  return JSON.parse(body)
}

function createResponseAdapter(res) {
  let statusCode = 200
  const headers = {}

  return {
    setHeader(name, value) {
      headers[name] = value
    },
    status(code) {
      statusCode = code
      return this
    },
    json(payload) {
      res.writeHead(statusCode, { 'Content-Type': 'application/json', ...headers })
      res.end(JSON.stringify(payload))
    },
  }
}

const server = http.createServer(async (req, res) => {
  if (!req.url?.startsWith('/api/request-pricing')) {
    sendJson(res, 404, { error: 'Not found.' })
    return
  }

  try {
    req.body = await readJsonBody(req)
    await handler(req, createResponseAdapter(res))
  } catch (error) {
    sendJson(res, 500, { error: error.message || 'Local API error.' })
  }
})

server.listen(port, () => {
  console.log(`Local contact API listening on http://localhost:${port}`)
})
