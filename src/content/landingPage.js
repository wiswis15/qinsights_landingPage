import logo1 from '../assets/logo-ticker/logo-1.svg'
import logo2 from '../assets/logo-ticker/logo-2.svg'
import logo3 from '../assets/logo-ticker/logo-3.svg'
import logo4 from '../assets/logo-ticker/logo-4.svg'
import logo5 from '../assets/logo-ticker/logo-5.svg'
import logo6 from '../assets/logo-ticker/logo-6.svg'
import logo7 from '../assets/logo-ticker/logo-7.png'
import logo8 from '../assets/logo-ticker/logo-8.png'
import logo9 from '../assets/logo-ticker/logo-9.png'
import logo10 from '../assets/logo-ticker/logo-10.png'
import logo11 from '../assets/logo-ticker/logo-11.png'

export const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/team' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Use Cases', href: '/' },
  { label: 'Blog', href: '/blog' },
]

export const actions = {
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

export const heroCopy = {
  title: 'Stop drowning in transcripts. Get defensible insights with AI-assisted control.',
  body: 'QInsights is a qualitative analysis workspace for overloaded researchers who need traceable, transparent insights \u2014 not black-box AI guesses. AI helps with the volume. You stay in charge of the thinking.',
  demoVideo: {
    src: 'https://framerusercontent.com/assets/O0noLfORFsZg7rr4p4DmFe0fX3A.mp4',
    title: 'Q-Insights product demo',
  },
}

export const trustLogos = [
  { name: 'Trusted organization 1', src: logo1, width: 253, alt: 'Trusted organization logo 1' },
  { name: 'Trusted organization 2', src: logo2, width: 137, alt: 'Trusted organization logo 2' },
  { name: 'Trusted organization 3', src: logo3, width: 148, alt: 'Trusted organization logo 3' },
  { name: 'Trusted organization 4', src: logo4, width: 159, alt: 'Trusted organization logo 4' },
  { name: 'Trusted organization 5', src: logo5, width: 190, alt: 'Trusted organization logo 5' },
  { name: 'Trusted organization 6', src: logo6, width: 168, alt: 'Trusted organization logo 6' },
  { name: 'Trusted organization 7', src: logo7, width: 235, alt: 'Trusted organization logo 7' },
  { name: 'Trusted organization 8', src: logo8, width: 200, alt: 'Trusted organization logo 8' },
  { name: 'Trusted organization 9', src: logo9, width: 159, alt: 'Trusted organization logo 9' },
  { name: 'Trusted organization 10', src: logo10, width: 159, alt: 'Trusted organization logo 10' },
  { name: 'Trusted organization 11', src: logo11, width: 148, alt: 'Trusted organization logo 11' },
]

export const productProof = {
  image: {
    src: 'https://framerusercontent.com/images/E3g07IGU9BA2wx8ArJpk21aVm8.png?width=1344&height=389',
    alt: 'Q-Insights interface preview displayed on a desktop screen',
  },
  statement: 'Used by researchers at leading universities, evaluation institutes, and market research teams.',
}

export const painPointsSection = {
  image: {
    src: 'https://framerusercontent.com/images/cX33epAnsyboUzXsaIYpqgy9bn8.png?width=847&height=847',
    alt: 'Blue circular illustration used to introduce the pain points section',
  },
  intro: {
    title: "Qualitative analysis shouldn't feel like drowning.",
    body: `Yet most researchers are stuck between heavy software, messy spreadsheets, and AI tools that spit out "themes" they can't defend.`,
  },
  items: [
    {
      title: 'Too many transcripts, not enough time',
      body: 'Hours lost re-reading interviews, open-ended responses, and notes \u2014 just to remember what is where.',
    },
    {
      title: 'Tools that make you feel incompetent',
      body: "Traditional QDAS tools feel overwhelming. Excel breaks at scale. You're juggling exports, tabs, and colour codes instead of thinking.",
    },
    {
      title: "AI that you can't trust",
      body: `Generic AI claims to "do your analysis", but delivers shallow summaries with no clear link back to evidence. You can't put that in front of a supervisor or stakeholder.`,
    },
    {
      title: 'Hidden fear: "Is my analysis defensible?"',
      body: 'Behind the scenes, you worry: What if someone asks how I got from data to these conclusions? Will my trail hold up?',
    },
  ],
}

export const featureSplitSection = {
  anchor: {
    image: {
      src: 'https://framerusercontent.com/images/TnR6ZRNhHzqCHLVqnh52RgtyzT0.png?width=2560&height=2560',
      alt: 'Abstract data-inspired background illustration',
    },
    title: 'QInsights is built for rigor, traceability, and control.',
    body: 'Not "themes in minutes". Not black-box AI. Just a workflow that lets you produce qualitative insights you can explain \u2014 and stand behind.',
  },
  items: [
    {
      title: 'Evidence-first insights',
      body: 'Every theme, pattern, and answer links back to the exact underlying quotes. You always see where an insight comes from \u2014 ready for thesis defence, peer review, or stakeholder scrutiny.',
      icon: {
        src: 'https://framerusercontent.com/images/PWho8Hg2phiiWmn1kCdyuynb4o.png?width=48&height=48',
        alt: 'Evidence-first insights icon',
      },
    },
    {
      title: 'Researcher-in-control, AI-assisted',
      body: 'You ask the questions and interpret the results. AI helps organise, retrieve, and surface candidate patterns. Decisions stay in your hands.',
      icon: {
        src: 'https://framerusercontent.com/images/Lx867CzVcVypOpeVO0cv8dkJaU.png?width=48&height=48',
        alt: 'Researcher-in-control icon',
      },
    },
    {
      title: 'A guided workflow, not a feature maze',
      body: 'No more tool-hopping or guessing the "right" process. QInsights gives you a clear, question-driven workflow for moving from raw text to defensible findings.',
      icon: {
        src: 'https://framerusercontent.com/images/FtGQhh3X5AVxvlZ3SoGJXDiXNo0.png?width=48&height=48',
        alt: 'Guided workflow icon',
      },
    },
    {
      title: 'Low anxiety, high rigor',
      body: 'Stop choosing between heavy tools and superficial AI. Get a structured analysis environment that respects your methods and your time.',
      icon: {
        src: 'https://framerusercontent.com/images/Mmb65zIuyZGuKFHEpgfaRB1TqR4.png?width=48&height=48',
        alt: 'Low anxiety high rigor icon',
      },
    },
  ],
}
