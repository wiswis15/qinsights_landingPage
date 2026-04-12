import './framer.css'
import bodyHtml from './framer-body.html?raw'

export default function App() {
  return (
    <div
      id="framer-root"
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  )
}
