import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.jsx'
import { getSeoRoute, seoRoutes } from './seo/routes'

export { getSeoRoute, seoRoutes }

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}

