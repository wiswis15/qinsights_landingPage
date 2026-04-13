import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/team' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Use Cases', href: '/' },
  { label: 'Blog', href: '/blog' },
]

const actions = {
  demo: {
    label: 'Schedule Demo',
    href: 'https://calendly.com/s-friese-qinsights/45min',
  },
  login: {
    label: 'Login',
    href: 'https://app.qinsights.ai/login',
  },
  cta: {
    label: 'Try it for free',
    href: 'https://qinsights.vercel.app/register',
  },
}

const heroCopy = {
  title: 'Stop drowning in transcripts. Get defensible insights with AI-assisted control.',
  body: 'QInsights is a qualitative analysis workspace for overloaded researchers who need traceable, transparent insights \u2014 not black-box AI guesses. AI helps with the volume. You stay in charge of the thinking.',
  demoVideo: {
    src: 'https://framerusercontent.com/assets/O0noLfORFsZg7rr4p4DmFe0fX3A.mp4',
    title: 'Q-Insights product demo',
  },
}

export default function App() {
  return (
    <div className="page-shell">
      <div className="page-frame">
        <Navbar links={navLinks} actions={actions} />
        <Hero copy={heroCopy} cta={actions.cta} />
      </div>
    </div>
  )
}
