import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')
const serverDir = path.join(distDir, 'server')
const serverEntry = path.join(serverDir, 'entry-server.js')
const templatePath = path.join(distDir, 'index.html')

const { getStructuredData, render, seoRoutes } = await import(pathToFileURL(serverEntry).href)
const template = await fs.readFile(templatePath, 'utf8')

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function renderSeoHead(route) {
  const title = escapeHtml(route.title)
  const description = escapeHtml(route.description)
  const canonical = escapeHtml(route.canonical)
  const image = escapeHtml(route.image)

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    '<meta name="robots" content="max-image-preview:large" />',
    `<link rel="canonical" href="${canonical}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="QInsights" />',
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    renderStructuredData(route),
  ].join('\n  ')
}

function escapeJsonForHtml(value) {
  return JSON.stringify(value, null, 2)
    .replaceAll('<', '\\u003c')
    .replaceAll('>', '\\u003e')
    .replaceAll('&', '\\u0026')
    .replaceAll('\u2028', '\\u2028')
    .replaceAll('\u2029', '\\u2029')
}

function renderStructuredData(route) {
  return `<script type="application/ld+json">\n${escapeJsonForHtml(getStructuredData(route))}\n  </script>`
}

function replaceSeoHead(html, route) {
  return html.replace(
    /<!-- SEO_START -->[\s\S]*?<!-- SEO_END -->/,
    `<!-- SEO_START -->\n  ${renderSeoHead(route)}\n  <!-- SEO_END -->`,
  )
}

function pageOutputPath(routePath) {
  if (routePath === '/') return path.join(distDir, 'index.html')
  return path.join(distDir, routePath.replace(/^\/+/, ''), 'index.html')
}

function cleanUrlOutputPath(routePath) {
  if (routePath === '/') return null
  return path.join(distDir, `${routePath.replace(/^\/+|\/+$/g, '')}.html`)
}

async function writePage(route) {
  const appHtml = render(route.path)
  const html = replaceSeoHead(template, route).replace('<!-- APP_HTML -->', appHtml)
  const outputPath = pageOutputPath(route.path)
  const cleanOutputPath = cleanUrlOutputPath(route.path)

  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, html)

  if (cleanOutputPath) {
    await fs.mkdir(path.dirname(cleanOutputPath), { recursive: true })
    await fs.writeFile(cleanOutputPath, html)
  }
}

function renderSitemap(routes) {
  const urls = routes
    .filter((route) => route.prerender)
    .map((route) => `  <url>\n    <loc>${escapeHtml(route.canonical)}</loc>\n  </url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

await Promise.all(seoRoutes.filter((route) => route.prerender).map(writePage))

await fs.writeFile(path.join(distDir, 'sitemap.xml'), renderSitemap(seoRoutes))
await fs.writeFile(
  path.join(distDir, 'robots.txt'),
  'User-agent: *\nAllow: /\nSitemap: https://qinsights.ai/sitemap.xml\n',
)

await fs.rm(serverDir, { recursive: true, force: true })

console.log(`Prerendered ${seoRoutes.length} routes.`)
