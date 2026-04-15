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
import teamIcon from '../assets/team.svg'
import enterpriseIcon from '../assets/enterprise.svg'

export const navLinks = [
  { label: 'Home', href: '/' },
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

export const teamHero = {
  title: 'Meet the Minds Behind QInsights',
  subtitle: 'Experts in Qualitative Research. Pioneers in AI.',
  backdrop: {
    src: 'https://framerusercontent.com/images/4FsUg1TkQOlM1JhWkNaLldmwI.png?width=1920&height=671',
    alt: '',
  },
}

export const pricingHero = {
  title: 'QInsights Licensing Options',
  subtitle: 'Research That Matters Deserves a Plan That Fits',
  backdrop: {
    src: 'https://framerusercontent.com/images/4FsUg1TkQOlM1JhWkNaLldmwI.png?width=1920&height=671',
    alt: '',
  },
}

export const contactHero = {
  title: 'Reach out to our Team',
  subtitle: 'Research That Matters Deserves a Plan That Fits',
  backdrop: {
    src: 'https://framerusercontent.com/images/4FsUg1TkQOlM1JhWkNaLldmwI.png?width=1920&height=671',
    alt: '',
  },
}

export const contactPricingFormSection = {
  fields: {
    name: {
      label: 'Name',
      placeholder: 'Jane Smith',
    },
    email: {
      label: 'Email',
      placeholder: 'jane@organization.com',
    },
    organization: {
      label: 'Organization / Institution',
      placeholder: 'Your organization / Institution',
    },
    licensingNeeds: {
      label: 'Tell us about your licensing needs',
      placeholder:
        'Please let us know if you’re an individual researcher, part of a team, or representing an educational or business organization. You can also share what kind of data you typically analyze (e.g., interviews, focus groups, survey responses, etc.).',
    },
  },
  submitLabel: 'Request Pricing',
  successMessage: 'Thank you. Your request has been sent to the QInsights team.',
  validationMessage: 'Please review the highlighted fields and try again.',
  errorMessage: 'We could not send your request right now. Please try again later.',
}

export const freeTrialSection = {
  title: 'Free Trial Available',
  subtitle: '1 Million Tokens',
  features: [
    '1 Million Tokens or 1 month — whichever comes first',
    'Upload 3–4 documents to test all features',
    'Upgrade anytime within the app',
  ],
  cta: {
    label: 'Start Free Trial',
    href: 'https://app.qinsights.ai/signup',
    subtext: 'No credit card required',
  }
}

export const pricingSection = {
  currencySymbol: '€',
  periodSuffix: '',
  saveLabel: 'Save 12%',
  cycles: [
    { id: '6mo', label: '6 Months' },
    { id: '12mo', label: '12 Months' }
  ],
  plans: [
    {
      id: 'educational',
      name: 'Educational*',
      prices: {
        '6mo': 279,
        '12mo': 489
      },
      descriptions: {
        '6mo': 'For academic research projects.',
        '12mo': 'For academic research projects.'
      },
      bodies: {
        '6mo': 'Enough capacity for 1-2 full studies per year. Ideal for research projects, dissertations or longitudinal research.',
        '12mo': 'Enough capacity for 1-2 full studies per year. Ideal for research projects, dissertations or longitudinal research.'
      },
      features: {
        '6mo': [
          '12.5 Million Tokens',
          'Office Hours Support'
        ],
        '12mo': [
          '25 Million Tokens',
          'Office Hours Support'
        ]
      },
      buttonLabel: 'Start your Free Trial',
      buttonHref: 'https://app.qinsights.ai/signup'
    },
    {
      id: 'nonprofit',
      name: 'Non-Profit',
      prices: {
        '6mo': 510,
        '12mo': 899
      },
      descriptions: {
        '6mo': 'Built for impact-driven work.',
        '12mo': 'Built for impact-driven work.'
      },
      bodies: {
        '6mo': 'Supports evaluation cycles, participatory research, and grant-funded projects.',
        '12mo': 'Supports evaluation cycles, participatory research, and grant-funded projects.'
      },
      features: {
        '6mo': [
          '20 Million Tokens',
          'Office Hours Support'
        ],
        '12mo': [
          '40 Million Tokens',
          'Office Hours Support'
        ]
      },
      buttonLabel: 'Start your Free Trial',
      buttonHref: 'https://app.qinsights.ai/signup'
    },
    {
      id: 'business',
      name: 'Regular Business',
      prices: {
        '6mo': 799,
        '12mo': 1399
      },
      descriptions: {
        '6mo': 'Built for continuous insight.',
        '12mo': 'Built for continuous insight.'
      },
      bodies: {
        '6mo': "For professional researchers and independent consultants. You work to client deadlines or internal timelines - and analysis can't be the bottleneck.",
        '12mo': "For professional researchers and independent consultants. You work to client deadlines or internal timelines - and analysis can't be the bottleneck."
      },
      features: {
        '6mo': [
          '37.5 Million Tokens',
          'Priority Support'
        ],
        '12mo': [
          '75 Million Tokens',
          'Priority Support'
        ]
      },
      buttonLabel: 'Start your Free Trial',
      buttonHref: 'https://app.qinsights.ai/signup'
    }
  ]
}

export const teamStorySection = {
  title: 'Why We Built QInsights',
  blocks: [
    {
      type: 'paragraph',
      text: 'At QInsights, we’re not just building software — we’re building a new way of thinking about qualitative research in the age of AI. QInsights was born out of her desire to empower researchers — not replace them — by combining cutting-edge AI with the kind of insight that only humans can provide.',
    },
    {
      type: 'subheading',
      text: 'Built on an Ethical Compass',
    },
    {
      type: 'paragraph',
      text: 'We don’t believe in black-box AI. Our approach is transparent, responsible, and designed to elevate—not automate—your thinking. We stand for ethical co-intelligence where you stay in control of your analysis.',
    },
    {
      type: 'paragraph',
      text: 'Our work is grounded in qualitative research traditions, not just AI trends. We translate complex analytic processes into intuitive, research-driven workflows—so you don’t need to be a methods expert to produce meaningful results.',
    },
    {
      type: 'paragraph',
      segments: [
        { type: 'text', text: 'QInsights isn’t just a tool; it’s part of a movement. Through ' },
        { type: 'link', text: 'workshops, articles, and our podcast', href: 'https://qeludra.com/', external: true },
        { type: 'text', text: ', we’re shaping the future of AI-powered qualitative research and sharing that journey with a global community.' },
      ],
    },
    {
      type: 'paragraph',
      text: 'We believe in showing up as we are: reflective, curious, and open to learning. QInsights continues to evolve through honest dialogue with our users. We listen, we adapt, and we grow—with you.',
    },
  ],
}

export const teamProfilesSection = {
  profiles: [
    {
      name: 'Dr Susanne Friese (co-founder)',
      role: 'CEO and domain expert',
      image: {
        src: 'https://framerusercontent.com/images/4lzjuMn0AioIHdTg7xzpdXuBurY.jpg?scale-down-to=512&width=2560&height=2056',
        alt: 'Portrait of Dr Susanne Friese',
      },
      paragraphs: [
        '30+ years of experience in qualitative research and qualitative computing.',
        'Keynote speaker and thought leader in AI for Qualitative Researcher',
      ],
    },
    {
      name: 'Wissem Golli (co-founder)',
      role: 'CTO',
      image: {
        src: 'https://framerusercontent.com/images/O0MJqmRZMFqVIasmlwI6fGLtnso.png?scale-down-to=512&width=2048&height=1664',
        alt: 'Portrait of Wissem Golli',
      },
      paragraphs: [
        'With 12 years in software development and 3 years focused on AI and LLM, our technical co-founder excels at turning ideas into reality and building the right team to make it happen.',
      ],
    },
  ],
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

export const webinarHighlightSection = {
  eyebrow: 'Insights On-Demand:',
  title: 'Our Webinar Series',
  body: 'Stay ahead of the curve with our collection of live and on-demand webinars. Learn best practices, discover industry trends, and gain actionable insights directly from our experts. Access the knowledge you need, whenever you need it.',
  cta: {
    label: 'Explore All Webinars',
    href: 'https://www.qinsights.info/webinars',
  },
  image: {
    src: 'https://framerusercontent.com/images/8R8HbaFJm9qxLyQRqebr8zYDcpA.png?width=600&height=604',
    alt: 'Live webinar promotional artwork for Q-Insights',
  },
}

export const howItWorksSection = {
  intro: {
    eyebrow: 'How It Works:',
    title: 'Smarter Qualitative Research in 3 Steps',
    titleMobile: 'Smarter Qualitative Research in',
    mobileHighlight: '3 Steps',
    qMarkOuter: {
      src: 'https://framerusercontent.com/images/fRZlNruMasf5O4EjBLzRuCaeaI.png?width=270&height=270',
      alt: 'QInsights mark background',
    },
    qMarkInner: {
      src: 'https://framerusercontent.com/images/ALBTu75Nk6YYgWZzRPxO8bnb5U.png?width=74&height=130',
      alt: 'QInsights mark symbol',
    },
    backdrop: {
      src: 'https://framerusercontent.com/images/vPyGZof9pOCaRba4uUm44tjIBHk.png?width=3022&height=3022',
      alt: 'Soft abstract backdrop for the how it works section',
    },
  },
  steps: [
    {
      number: '1',
      title: 'Upload your material',
      body: 'Bring your transcripts, open-ended survey data, notes or audio files.',
      image: {
        src: 'https://framerusercontent.com/images/FLoXUdGokI7THiKH67ILVDxpUUs.png?width=1880&height=1812',
        alt: 'Step one preview showing data exploration',
      },
    },
    {
      number: '2',
      title: 'Explore and question your data',
      mobileTitle: 'Choose your analysis style',
      body: 'Ask targeted questions, compare groups, surface patterns \u2014 and always see the supporting quotes behind each answer.',
      image: {
        src: 'https://framerusercontent.com/images/Ky4zZoOHeDwGbl8yg6vpV3hAk.png?width=1880&height=1812',
        alt: 'Step two preview showing material upload',
      },
    },
    {
      number: '3',
      title: 'Build a trail you can defend',
      mobileTitle: 'Synthesize and share with confidence',
      body: 'Organise themes, evidence, and interpretations in one place. Export what you need for your thesis, report, slide deck, or stakeholder presentation \u2014 with your analysis trail intact.',
      image: {
        src: 'https://framerusercontent.com/images/AZ0vcFpnavDyhpo3FBJsAJPt6mM.png?width=1880&height=1812',
        alt: 'Step three preview showing defensible analysis trail',
      },
    },
  ],
}

export const comparisonSection = {
  heading: 'Not "AI does your analysis." A workspace for analysis you can defend.',
  othersColumn: {
    label: 'Others',
  },
  qinsightsColumn: {
    label: 'QInsights',
    logo: {
      src: 'https://framerusercontent.com/images/Q9rz4yZMCZVjxacKp2KQIWkUmU.png?scale-down-to=512&width=688&height=105',
      alt: 'QInsights logo',
    },
    icon: {
      src: 'https://framerusercontent.com/images/xV1amte0eNVJ3Sv3tGWy5lZE.png?width=466&height=580',
      alt: 'Crown icon for QInsights column',
    },
  },
  rows: [
    {
      others: 'Black-box "themes in minutes"',
      qinsights: 'Every insight linked to underlying quotations',
    },
    {
      others: 'Shallow summaries with no clear evidence',
      qinsights: 'Researcher-led, AI-assisted workflow',
    },
    {
      others: 'Steep learning curves and feature overload',
      qinsights: 'Clear, question-driven steps instead of feature maze',
    },
    {
      others: 'Leave you guessing how insights were produced',
      qinsights: 'Built for publishable, defensible qualitative work',
    },
  ],
}

export const testimonialsSection = {
  heading: 'What Our Customers Say',
  subheading: 'Higher-Quality',
  subheadingLine2: 'Thinking',
  body: 'Brainstorm angles, test hypotheses, and pull counter-examples in real-time—strengthening your conclusions through AI collaboration.',
  appScreenshot: {
    src: 'https://framerusercontent.com/images/KZx6u0DP38JnvSrISFD3UuF7g.png?scale-down-to=1024&width=2082&height=2390',
    alt: 'Q-Insights app interface showing a research conversation',
  },
  testimonials: [
    {
      name: 'Pamela Rothpletz-Puglia',
      role: 'Ed.D., RDN, Professor of Qualitative and Mixed Methods Research',
      affiliation: 'Rutgers School of Health Professions, USA',
      quote: '"I think of it like a thought partner... it advanced my depth of thinking because I can have a conversation, talk through what I am thinking."',
      photo: 'https://framerusercontent.com/images/9UZZl2l1sDnV9565lciwPV9GOQ.jpg?width=185&height=272',
    },
  ],
}

export const testimonialSpotlightSection = {
  headingLine1: 'Spend Less Time on Process,',
  headingLine2: 'More Time on Insight',
  body: 'Cut through the noise - move from raw data to clear patterns faster, without losing depth.',
  productImage: {
    src: 'https://framerusercontent.com/images/rSU2xqqjrpdowXmPpkgVw8nbwM.png?width=1683&height=921',
    alt: 'QInsights interface showing streamlined qualitative analysis workflow',
  },
  testimonial: {
    photo: 'https://framerusercontent.com/images/2kXkiXLVDiAMfKZEJoyTU9YBQfo.png?width=751&height=824',
    name: 'Miguel Alejandro Saquimux Contreras',
    role: 'PhD Candidate Health Sciences',
    affiliation: 'UNICAMP, Universidade Estadual de Campinas, Brazil',
    quote: '"QInsights was able to identify the same themes that took me months to create in a fraction of the time. It\'s a clear, effective, and efficient tool. I\'m genuinely impressed by how much detail it preserves, and its range of features makes it easy to carry out thoughtful and critical analysis."',
  },
  theme: {
    headingColor: '#111111',
    bodyColor: '#111111',
    roleColor: '#1f6fa7',
    cardBackground: '#eef6ff',
    portraitBackground: 'linear-gradient(180deg, #d8e9ff 0%, #edf6ff 100%)',
  },
}

export const samanthaSpotlightSection = {
  headingLine1: 'An Assistant That Thinks Qualitatively,',
  headingLine2: 'So You Can Think Creatively',
  body: 'Empower your team with tools that make qualitative work more engaging.',
  layout: 'inline-card',
  productImage: {
    src: 'https://framerusercontent.com/images/jjjbb0P27OdMdtLeZBwTAgpBrwk.png?width=1544&height=2365',
    alt: 'QInsights workflow illustration supporting creative qualitative work',
  },
  testimonial: {
    photo: 'https://framerusercontent.com/images/yjcjZwqJqlqLZeyXcyu2KopXayE.jpeg?width=350&height=350',
    name: 'Prof. Samantha Hurst',
    role: 'Professor',
    affiliation: 'Public Health, UC San Diego, USA',
    quote: `"It's like having a personal research assistant that not only understands the complexities of qualitative research but also allows me to focus more attention on the creative and intuitive aspects of my work."`,
  },
  theme: {
    headingColor: '#111111',
    bodyColor: '#111111',
    roleColor: '#4f63d8',
    cardBackground: '#eef1ff',
    portraitBackground: 'linear-gradient(180deg, #dde4ff 0%, #eef1ff 100%)',
  },
}

export const onboardingSpotlightSection = {
  headingLine1: 'Up & Running',
  headingLine2: 'in an Afternoon',
  body: 'No months-long training. If you’ve used an AI assistant before, you’re already halfway there. New to AI? Toggle Guided Analysis for step-by-step help - from smart starter questions to defensible synthesis.',
  layout: 'stacked-media-card',
  productImage: {
    src: 'https://framerusercontent.com/images/WAADaMQ17axm0QczmVO6Tvm9wSY.png?width=4420&height=923',
    alt: 'QInsights onboarding workflow illustration showing guided analysis and setup flow',
  },
  testimonial: {
    photo: 'https://framerusercontent.com/images/q3Ij4s5TRo9hyEXWxielmVo.jpeg?width=800&height=800',
    name: 'Dr. Elisabeth Brackerdaponte',
    role: 'Doctor',
    affiliation: 'Cornelsen Verlag GmbH, Germany',
    quote: '"QInsights supports us with impressive quality in analyzing qualitative data, saving us a great deal of time. It’s developed with strong user focus and offers excellent customer service."',
  },
  theme: {
    headingColor: '#111111',
    bodyColor: '#111111',
    roleColor: '#2f7aa8',
    cardBackground: '#eef8ff',
    portraitBackground: 'linear-gradient(180deg, #d8efff 0%, #eef8ff 100%)',
    cardAlign: 'center',
  },
}

export const designedForResearchersSection = {
  heading: 'Designed for Researchers Under Real Pressure',
  subtitle: 'Whether you\'re in academia, consulting, marketing, or evaluation, QInsights supports qualitative work where rigor and deadlines both matter.',
  useCases: [
    {
      heading: 'Academic researchers',
      description: 'For grant-funded research teams, professors, postdocs, and PhD researchers needing a transparent analysis trail for high-impact papers, peer-reviewed publications and dissertations.',
    },
    {
      heading: 'Evaluation & Policy teams',
      description: 'NGOs and public sector teams working with interviews, focus groups, and open-ended surveys.',
    },
    {
      heading: 'Consulting and Marketing',
      description: 'Mixed-methods teams who must deliver insights quickly while keeping qualitative work credible and explainable.',
    },
  ],
  closingStatement: 'If you\'re juggling complex software tutorials, overgrown spreadsheets, and ChatGPT exports, QInsights gives you a calmer, more defensible way forward.',
}

export const privacySecuritySection = {
  heading: "Your participants' words are sensitive. We treat them that way.",
  subtitle: 'QInsights is built for qualitative work where confidentiality and ethics matter.',
  cards: [
    {
      title: 'GDPR-aligned',
      body: 'Data handling designed with European privacy standards in mind. You stay in control of what is uploaded and deleted.',
      image: {
        src: 'https://framerusercontent.com/images/qmOcIC89rzyPI7DZsMgDfgqSkwo.png?width=940&height=940',
        alt: 'Illustration representing GDPR-aligned data handling',
      },
    },
    {
      title: 'No training on your data',
      body: 'Your project data is never used to train generic models. It stays your project, your context, your responsibility.',
      image: {
        src: 'https://framerusercontent.com/images/UH9uH5H4kemXFFVtsRhzq8NHOlU.png?width=3024&height=3116',
        alt: 'Illustration representing isolated project data',
      },
    },
    {
      title: 'Encryption by default',
      body: 'Data is encrypted in transit and at rest, so you can focus on analysis knowing that the basics are covered.',
      image: {
        src: 'https://framerusercontent.com/images/fFehu4dGSkCKxrxAlA4EJFTxw.jpg?width=503&height=503',
        alt: 'Illustration representing default encryption',
      },
    },
  ],
}

export const callToActionSection = {
  heading: 'Try QInsights with a real project.',
  body: 'Bring one set of transcripts or open-ended responses into QInsights and see what it feels like to analyse with clarity instead of chaos.',
  actions: [
    {
      label: 'Book a Live Walkthrough',
      href: 'https://qinsights.vercel.app/register',
      variant: 'secondary',
    },
    {
      label: 'Start Free',
      href: 'https://qinsights.vercel.app/register',
      variant: 'primary',
    },
  ],
  footnote: 'No credit card required. Ideal for academic as well as professional research, market analysis, evaluations, and collaborative teams.',
}

export const newsletterSection = {
  heading: 'Subscribe to our Newsletter',
  image: {
    src: 'https://framerusercontent.com/images/6fhM7K34PqKkBdrg9LVTEU5aI4.png?width=1288&height=1074',
    alt: 'Newsletter section illustration promoting QInsights updates',
  },
  cta: {
    label: 'Subscribe',
    href: '#',
  },
}

export const faqSection = {
  heading: 'Frequently Asked Questions',
  items: [
    {
      question: 'What languages can I analyse?',
      answer: [
        {
          type: 'paragraph',
          text: 'QInsights supports most commonly spoken languages. For example, if you upload a document in Spanish, the system will recognize the language and provide a summary in Spanish. If you then ask a question in English, the answer will be provided in English, while any quoted text from the source remains in the original language.',
        },
        {
          type: 'paragraph',
          text: "Tip: To view the QInsights interface in your preferred language, adjust your browser's language settings. Our interface will follow your browser preferences.",
        },
      ],
    },
    {
      question: 'How can I get support if I have a question or problem?',
      answer: [
        {
          type: 'paragraph',
          segments: [
            { type: 'text', text: 'You can contact our support team by emailing ' },
            { type: 'link', text: 'support@qinsights.ai', href: 'mailto:support@qinsights.ai' },
            { type: 'text', text: '.' },
          ],
        },
        {
          type: 'paragraph',
          text: "When you register, you'll also receive a series of onboarding emails with helpful information, including a link to our user guide and video tutorials to guide you through your first steps with QInsights.",
        },
        {
          type: 'paragraph',
          segments: [
            { type: 'link', text: 'English Tutorials', href: 'https://youtube.com/playlist?list=PLSgHlhN1_M_N470aYDJeqxHYS8aR8ykPv&si=zoCsBgtHzS3tWv1t', external: true },
          ],
        },
        {
          type: 'paragraph',
          segments: [
            { type: 'link', text: 'Spanish Tutorials', href: 'https://youtube.com/playlist?list=PLSgHlhN1_M_N470aYDJeqxHYS8aR8ykPv&si=zoCsBgtHzS3tWv1t', external: true },
          ],
        },
      ],
    },
    {
      question: 'What types of data can I analyse with QInsights?',
      answer: [
        {
          type: 'paragraph',
          text: 'You can upload and analyse a wide range of unstructured text formats, including:',
        },
        {
          type: 'list',
          items: [
            'Interview and focus group transcripts (DOCX, TXT, PDF)',
            'Open-ended survey responses (Excel)',
            'Reports, articles, and documents',
            'Audio files (MP3, M4A) — these are automatically transcribed for analysis',
          ],
        },
      ],
    },
    {
      question: 'Does QInsights generate citations or references to my data?',
      answer: [
        {
          type: 'paragraph',
          text: 'Yes. When QInsights provides themes or answers, it includes supporting quotes or segments from your uploaded documents. This lets you verify and trace where insights come from—ensuring transparency and trustworthiness.',
        },
      ],
    },
    {
      question: 'Can I use QInsights for team projects?',
      answer: [
        {
          type: 'paragraph',
          text: 'Yes. QInsights supports team collaboration. You can share projects with team members who also have a QInsights account, making it easy to collaborate on data analysis within your research group, organization, or consultancy team.',
        },
      ],
    },
    {
      question: 'Can we use QInsights within our own company / organisation network?',
      answer: [
        {
          type: 'paragraph',
          text: 'Yes, this is possible. We offer on-premise or private deployment solutions at an additional cost. Please contact us to discuss your needs:',
        },
        {
          type: 'paragraph',
          segments: [
            { type: 'link', text: 'support@qinsights.ai', href: 'mailto:support@qinsights.ai' },
          ],
        },
      ],
    },
    {
      question: 'Data Security & Compliances',
      answer: [
        {
          type: 'paragraph',
          text: 'All your content is stored securely on servers located in Europe. We comply with numerous international privacy standards and regulations, including GDPR, ISO/IEC 27701, ISO/IEC 27018, EU SCCs, HIPAA, HITRUST, FERPA, Japan My Number Act, Canada PIPEDA, Spain LOPD, and Argentina PDPA.',
        },
        {
          type: 'paragraph',
          text: 'All data is encrypted both in transit and at rest using state-of-the-art encryption and key management practices.',
        },
        {
          type: 'paragraph',
          segments: [
            { type: 'text', text: 'For more details, please visit our ' },
            { type: 'link', text: 'privacy page', href: '/privacy' },
            { type: 'text', text: '. If you require specific documentation for ethics committees or data protection officers, contact us at ' },
            { type: 'link', text: 'support@qinsights.ai', href: 'mailto:support@qinsights.ai' },
            { type: 'text', text: '.' },
          ],
        },
      ],
    },
    {
      question: 'Is my data shared with any third parties?',
      answer: [
        {
          type: 'paragraph',
          text: 'No. QInsights places the highest priority on the privacy and security of your data. Your data is never used for training purposes and is not shared beyond what is necessary for processing. You retain full ownership of your content at all times.',
        },
        {
          type: 'paragraph',
          segments: [
            { type: 'text', text: 'See our ' },
            { type: 'link', text: 'privacy page', href: '/privacy' },
            { type: 'text', text: '.' },
          ],
        },
      ],
    },
  ],
}

export const footerContent = {
  brand: {
    logo: {
      src: 'https://framerusercontent.com/images/Q9rz4yZMCZVjxacKp2KQIWkUmU.png?width=688&height=105',
      alt: 'QInsights logo',
    },
    tagline: 'Your Thinking Partner for Qualitative Research',
  },
  pagesHeading: 'Pages',
  pages: [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About Us', href: '/team' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  contactHeading: 'Find us on',
  socialLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/qinsights-ai/?viewAsMember=true',
      icon: 'linkedin',
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com/playlist?list=PLSgHlhN1_M_N470aYDJeqxHYS8aR8ykPv&si=zoCsBgtHzS3tWv1t',
      icon: 'youtube',
    },
  ],
  contacts: [
    {
      label: 'hello@qinsights.ai',
      href: 'mailto:hello@qinsights.ai',
    },
    {
      label: 'support@qinsights.ai',
      href: 'mailto:support@qinsights.ai',
    },
  ],
  metaLabel: 'AI-Powered Qualitative Analysis',
  metaLinks: [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms & conditions', href: '/terms' },
    { label: 'Customer information', href: '/customer-information' },
  ],
}

export const largerScalePlansSection = {
  title: 'Larger-Scale Plans',
  subtitle: 'Scalable licensing for research groups and institutions.',
  plans: [
    {
      title: 'Team License',
      icon: teamIcon,
      targetAudience: 'For small research teams (3–10 users).',
      features: [
        'Shared token pool',
        'Flexible user management',
        'Bundled discount'
      ],
      ctaLabel: 'Contact us →',
      ctaUrl: '/contact',
      style: 'light'
    },
    {
      title: 'Enterprise Solutions',
      icon: enterpriseIcon,
      targetAudience: 'For large organizations or university-wide deployments.',
      features: [
        'Custom license models',
        'On-premise options',
        'Highest-level security compliance'
      ],
      ctaLabel: 'Contact us →',
      ctaUrl: '/contact',
      style: 'highlight'
    }
  ]
}

export const gettingStartedSection = {
  title: 'Getting started',
  body: [
    "Select the plan that fits your work and start with a free trial — 1 million tokens or 1 month, whichever comes first. When you're ready to upgrade, you can do so directly in the app under Settings → Billing."
  ],
  note: "*Educational pricing is applied automatically when you sign up with a university email address (.edu, .ac.uk, and equivalent institutional domains). If you register with a personal email (Gmail, Hotmail, etc.), you will be offered the standard price. Switching email addresses after sign-up is not possible, so make sure to use your institutional email from the start."
}


export const pricingComparisonSection = {
  heading: '"Coding" vs. "Conversational Analysis"',
  othersColumn: {
    label: 'Traditional Software',
  },
  qinsightsColumn: {
    label: 'Conversational Analysis',
    logo: {
      src: 'https://framerusercontent.com/images/Q9rz4yZMCZVjxacKp2KQIWkUmU.png?scale-down-to=512&width=688&height=105',
      alt: 'QInsights logo',
    },
    icon: {
      src: 'https://framerusercontent.com/images/xV1amte0eNVJ3Sv3tGWy5lZE.png?width=466&height=580',
      alt: 'Crown icon for QInsights column',
    },
  },
  rows: [
    {
      others: 'Manual Coding: You spend weeks tagging segments.',
      qinsights: 'Data Dialogue: You ask the data questions; it answers.',
    },
    {
      others: 'Static Hierarchies: Rigid codebooks that break easily.',
      qinsights: 'Fluid Themes: Patterns emerge organically from the AI.',
    },
    {
      others: 'Steep Learning Curve: Takes days to learn the UI.',
      qinsights: 'Intuitive Chat: If you can text, you can analyze.',
    },
    {
      others: 'Slow Iteration: Hard to change course mid-study.',
      qinsights: 'Instant Pivot: Update your inquiry focus whenever necessary.',
    },
  ],
}

export const pricingContactCtaSection = {
  eyebrow: 'Not sure which plan fits?',
  headline: 'Let’s talk,',
  body: 'We’ll help you find the right setup for your project.',
  image: {
    src: 'https://framerusercontent.com/images/NJJlcNBPbqDtVWmVWLkF4DdDE.png?scale-down-to=512&width=743&height=542',
    alt: 'Illustration for discussing the right QInsights setup',
  },
  action: {
    label: 'Discuss your use case',
    href: 'https://app.simplymeet.me',
  },
}

export const whyChooseQInsightsSection = {
  eyebrow: 'Why Choose QInsights?',
  subtitle: 'Purpose-Built for Qualitative Research – Powered by Human-AI Collaboration',
  points: [
    'No hallucinations – all results based strictly on your uploaded data',
    'Transparent referencing – no black box answers',
    'Segment data by variables, filter by metadata',
    'GDPR-compliant, secure environment',
    'Designed by experts with 30+ years in digital qualitative analysis',
    'Not a one-click AI solution. QInsights keeps you in control.',
  ],
  closing:
    'QInsights harnesses the reach of Large Language Models through true human-AI collaboration. By combining the breadth of AI with your contextual expertise, QInsights delivers high-quality insights that drive real impact.',
}
