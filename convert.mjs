/**
 * Faithful HTML → React conversion using dangerouslySetInnerHTML.
 * Preserves the exact Framer layout with zero style transformation risk.
 *
 * Strategy:
 *  1. Extract all <style> blocks → src/framer.css
 *  2. Extract <body> content (scripts stripped) → src/framer-body.html  (imported as raw string)
 *  3. App.jsx uses dangerouslySetInnerHTML so the DOM is identical to the original
 *  4. index.html keeps all <head> meta/link tags from the original
 */

import { readFileSync, writeFileSync } from 'fs'

const SRC = '../jolly-garlic-900377.framer.app_tostatic/index.html'
const html = readFileSync(SRC, 'utf8')

// ─── 1. Extract <style> blocks ────────────────────────────────────────────────
const styleBlocks = []
const styleRe = /<style[^>]*>([\s\S]*?)<\/style>/gi
let m
while ((m = styleRe.exec(html)) !== null) {
  styleBlocks.push(m[1])
}
const css = styleBlocks.join('\n\n')
writeFileSync('src/framer.css', css, 'utf8')
console.log(`✓  Extracted ${styleBlocks.length} <style> block(s) → src/framer.css`)

// ─── 2. Extract <body> content ────────────────────────────────────────────────
const bodyMatch = html.match(/<body([^>]*)>([\s\S]*)<\/body>/i)
if (!bodyMatch) throw new Error('No <body> found')
let body = bodyMatch[2]

// Strip all <script> blocks (Framer JS — not needed for static render)
body = body.replace(/<script[\s\S]*?<\/script>/gi, '')
// Strip noscript blocks
body = body.replace(/<noscript[\s\S]*?<\/noscript>/gi, '')
// Strip HTML comments
body = body.replace(/<!--[\s\S]*?-->/g, '')
body = body.trim()

writeFileSync('src/framer-body.html', body, 'utf8')
console.log('✓  Wrote src/framer-body.html')

// ─── 3. App.jsx ───────────────────────────────────────────────────────────────
writeFileSync('src/App.jsx', `import './framer.css'
import bodyHtml from './framer-body.html?raw'

export default function App() {
  return (
    <div
      id="framer-root"
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  )
}
`, 'utf8')
console.log('✓  Wrote src/App.jsx')

// ─── 4. main.jsx ─────────────────────────────────────────────────────────────
writeFileSync('src/main.jsx', `import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)
`, 'utf8')
console.log('✓  Wrote src/main.jsx')

// ─── 5. index.html — keep original <head> meta/link/title ────────────────────
const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)
let headContent = headMatch ? headMatch[1] : ''
// Strip style and script tags from head (CSS goes in framer.css, scripts not needed)
headContent = headContent.replace(/<style[\s\S]*?<\/style>/gi, '')
headContent = headContent.replace(/<script[\s\S]*?<\/script>/gi, '')
headContent = headContent.trim()

// Pull body attributes (e.g. data-redirect-timezone)
const bodyAttrs = bodyMatch[1].trim()

writeFileSync('index.html', `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
${headContent}
</head>
<body ${bodyAttrs}>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
`, 'utf8')
console.log('✓  Wrote index.html')

console.log('\n✅  Done! Run: npm run dev')
