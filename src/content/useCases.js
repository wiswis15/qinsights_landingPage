import { actions } from './landingPage'

export const inPracticePage = {
  hero: {
    title: 'How Researchers Use QInsights',
    subtitle:
      'See how academic, healthcare, consulting, and corporate teams use QInsights to move from overloaded qualitative data to confident decisions.',
    primaryAction: {
      label: 'Book a Demo',
      href: actions.demo.href,
    },
    secondaryAction: {
      label: 'Start Free',
      href: actions.cta.href,
    },
  },
  closingCta: {
    heading: 'Bring your next study, evaluation, or client project into a workflow you can defend.',
    body: 'QInsights helps teams move faster without losing the evidence trail behind their conclusions.',
    action: {
      label: 'Book a Demo',
      href: actions.demo.href,
    },
  },
}

export const useCases = [
  {
    slug: 'academic-replacing-manual-coding',
    sector: 'Academic',
    headline: 'Replacing Manual Coding',
    summary:
      'A research chair at the University of Munich used QInsights to regain control over overwhelming text and audio datasets. The team could re-open older projects, surface new insights, and give junior researchers a clearer starting point.',
    quote:
      "I realized that some of my PhD students lose control. It's too much text, and manual coding becomes exhausting.",
    quoteAttribution: 'Prof. dr. Anja Ballis, Chair of German Language Education, University of Munich',
    personName: 'Prof. dr. Anja Ballis',
    personRole: 'Chair of German Language Education',
    organization: 'University of Munich',
    proofMode: 'named',
    themeAccent: {
      solid: '#2f6bda',
      soft: '#eef4ff',
      border: 'rgba(47, 107, 218, 0.18)',
      glow: 'rgba(47, 107, 218, 0.12)',
    },
    intro:
      'QInsights helped an academic research team replace exhausting manual coding with a faster, more motivating way to explore large qualitative datasets.',
    keyOutcomes: [
      'Worked directly with audio instead of requiring manual transcription first',
      'Made older datasets usable again for fresh research questions',
      'Reduced overwhelm for early-career researchers',
    ],
    metrics: [],
    challenge: [
      'Prof. dr. Anja Ballis conducts research in language education and comparative education, where projects often involve vast amounts of non-linear text and audio data.',
      'Her team repeatedly ran into a volume crisis: traditional Grounded Theory workflows demanded iterative reading and manual coding, which quickly became exhausting and difficult to manage.',
      'The result was not just slowness. Valuable insights from older studies remained dormant because revisiting them with manual processes took too much time and effort.',
    ],
    solution: [
      'QInsights gave the research group a different starting point. Instead of manually transcribing and coding every interview before insight work could begin, students could work directly with audio and use conversational analysis to get an initial grasp of the material.',
      'That shift also changed what was possible with archived research. Existing datasets could be re-analyzed for new questions without needing fresh data collection or additional funding.',
    ],
    impact: [
      'The team gained speed, but the bigger shift was psychological and methodological. An overwhelming process became more navigable, especially for researchers who were still learning how to work with qualitative material at scale.',
      'QInsights also unlocked scientific value already sitting in past projects, helping the group move faster toward papers and new discussions without sacrificing depth.',
    ],
    storyQuotes: [
      {
        text: 'In former times you had to transcribe interviews manually... QInsights works directly with the audio, which is amazing for the students. It allows us to re-analyze data we already collected to open up new discussions instantly.',
        attribution: 'Prof. dr. Anja Ballis',
      },
      {
        text: 'We are living in fast times and we have to write papers pretty fast. QInsights helps me catch up with the data.',
        attribution: 'Prof. dr. Anja Ballis',
      },
    ],
  },
  {
    slug: 'healthcare-hidden-gems-deep-reflection',
    sector: 'Healthcare',
    headline: 'Uncover Hidden Gems and Allow for Deep Reflection',
    summary:
      'A public health anthropologist at UC San Diego used QInsights to move beyond both manual-coding fatigue and generic AI context limits. The result was more rigorous pattern finding, less bias pressure, and more time for reflection.',
    quote:
      "It has freed up much more time for me to be reflective. That is the essence of anthropology.",
    quoteAttribution: 'Dr. Samantha Hurst, Health Sciences Clinical Professor, UC San Diego',
    personName: 'Dr. Samantha Hurst',
    personRole: 'Health Sciences Clinical Professor',
    organization: 'University of California, San Diego',
    proofMode: 'named',
    themeAccent: {
      solid: '#1f8d88',
      soft: '#edf9f7',
      border: 'rgba(31, 141, 136, 0.18)',
      glow: 'rgba(31, 141, 136, 0.12)',
    },
    intro:
      'QInsights helped a healthcare researcher uncover nuance across sensitive qualitative datasets while restoring the time needed for genuine anthropological reflection.',
    keyOutcomes: [
      'Handled dozens of transcripts together without losing context',
      'Helped identify nuanced references to sensitive topics',
      'Shifted effort from manual coding toward reflective interpretation',
    ],
    metrics: [],
    challenge: [
      'Dr. Samantha Hurst works on community health interventions among diverse cultural groups, where long-form qualitative data and strict grant requirements demand both rigor and sensitivity.',
      'She faced a dual limitation. Generic AI tools could not reliably hold enough context across the full dataset, while manual coding remained slow, exhausting, and vulnerable to human bias.',
      'For publishable work, she needed a workflow that could carry the full dataset, preserve nuance, and still let her interrogate the material rigorously.',
    ],
    solution: [
      'QInsights allowed Dr. Hurst to upload entire sets of transcripts at once and interrogate them conversationally. She could compare universality against edge cases, revisit subtle references, and test whether themes were genuinely grounded in the data.',
      'In one study involving Native American women, she used different phrasing for the same topic to uncover implicit references to sensitive terms without relying on exact keyword matches.',
    ],
    impact: [
      'The biggest gain was not just speed. By taking over the heavy lifting of pattern recognition, QInsights returned the time and mental bandwidth needed for high-level reflection.',
      'That gave Dr. Hurst more confidence that proposals and publications were based on traceable evidence rather than fatigue-driven coding routines.',
    ],
    storyQuotes: [
      {
        text: "When it gets down to introducing bias, the humans are really the vehicle by which that always happens.",
        attribution: 'Dr. Samantha Hurst',
      },
      {
        text: "I love the fact that you can put multiple transcripts inside that product... It didn't just find the words; it found the nuance.",
        attribution: 'Dr. Samantha Hurst',
      },
    ],
  },
  {
    slug: 'consulting-sharper-client-insights',
    sector: 'Consulting',
    headline: 'Delivering Sharper Insights to Clients, Faster',
    summary:
      'Align OD Consulting replaced days of manual coding across open-ended employee survey data with conversational analysis. Consultants moved faster from raw responses to cross-departmental insight and stronger client conversations.',
    quote:
      'We used to dread the analysis phase. Now it is the part we look forward to.',
    quoteAttribution: 'Marcus Dahl, Managing Partner, Align OD Consulting',
    personName: 'Marcus Dahl',
    personRole: 'Managing Partner',
    organization: 'Align OD Consulting',
    proofMode: 'named',
    themeAccent: {
      solid: '#b27a2a',
      soft: '#fff7ec',
      border: 'rgba(178, 122, 42, 0.2)',
      glow: 'rgba(178, 122, 42, 0.14)',
    },
    intro:
      'QInsights gave a consulting firm a faster path from open-ended survey responses to client-ready diagnosis, without sacrificing cross-departmental nuance.',
    keyOutcomes: [
      'Reduced time from data collection to client-ready insight by 80%',
      'Compared departments without manual recoding',
      'Freed consultants to focus on interpretation and intervention design',
    ],
    metrics: ['80% faster from data collection to client-ready insight'],
    challenge: [
      'Align OD Consulting works with mid-sized companies on culture change, leadership transitions, and post-merger integration. Their diagnostics often include 300 or more open-ended responses from multiple departments.',
      'Manual coding slowed every engagement down. It took days just to organize and interpret the material, and the effort introduced inconsistency across analysts while making department-by-department comparison cumbersome.',
      'By the time themes were ready, the team had already spent significant energy just preparing the data rather than thinking strategically with it.',
    ],
    solution: [
      'The firm adopted QInsights as its standard diagnostic engine. Consultants upload the full response set and ask focused questions by function, such as how production differs from sales or where HR and frontline teams fundamentally disagree.',
      'Because QInsights generates descriptive themes across the whole dataset quickly, the team can move straight from data collection into interpretation without a manual coding step.',
    ],
    impact: [
      'QInsights cut the time to client-ready insight by 80%, but the more valuable gain was better use of consultant attention. Analysts now spend their time interpreting findings in context, challenging assumptions, and shaping change interventions.',
      'Cross-departmental comparison has become a central part of client presentations, making the firm faster and sharper in how it frames organizational fault lines.',
    ],
    storyQuotes: [
      {
        text: 'We were spending two to three days just getting the data ready to think about.',
        attribution: 'Marcus Dahl, Align OD Consulting',
      },
      {
        text: "Within an hour of closing the survey, we already know where the fault lines are. That changes how we walk into every client conversation.",
        attribution: 'Marcus Dahl, Align OD Consulting',
      },
    ],
  },
  {
    slug: 'corporate-no-two-patients-speak-the-same-language',
    sector: 'Corporate',
    headline: 'No Two Patients Speak the Same Language',
    summary:
      'A global MedTech research team used QInsights to compare qualitative studies across markets, patient groups, and clinical stakeholders. Analysts moved from impression-driven synthesis to a more grounded and confident reporting process.',
    quote:
      "Now I finish faster, and I finish knowing I haven't missed anything.",
    quoteAttribution: 'Clinical Insights Lead, global MedTech company',
    personName: 'Clinical Insights Lead',
    personRole: 'Clinical Insights Lead',
    organization: 'Global MedTech company',
    proofMode: 'anonymous',
    themeAccent: {
      solid: '#546a84',
      soft: '#f2f6fa',
      border: 'rgba(84, 106, 132, 0.18)',
      glow: 'rgba(84, 106, 132, 0.12)',
    },
    intro:
      'QInsights helped a MedTech team analyze diverse patient and clinician voices across countries without flattening them into a single generic story.',
    keyOutcomes: [
      'Compared populations and countries within one analytical workflow',
      'Reduced dependence on fast, impression-led transcript review',
      'Improved confidence in how findings were presented internally',
    ],
    metrics: [],
    challenge: [
      'The company serves very different populations, from surgeons and athletes to elderly patients recovering from joint replacements. Their qualitative research spans countries, languages, and respondent types.',
      'The difficulty was not running the interviews. It was what happened afterward, when tight timelines pushed analysts into fast read-throughs, selective highlights, and meeting-room comparisons instead of full dataset grounding.',
      'That created a confidence problem. Findings were defensible on paper, but analysts still worried that important signals had been missed, especially when respondents described the same issue in very different language.',
    ],
    solution: [
      'QInsights was integrated across the team’s portfolio of qualitative studies. Analysts could upload complete transcript sets and ask equivalent questions across surgeons, patients, athletes, and different countries without losing respondent context.',
      'Because the platform retained the full voice of each participant, the team could compare how different groups framed the same issue and trace every conclusion back to exactly who said what.',
    ],
    impact: [
      'The period between fieldwork and reporting became less of a pressured sprint and more of a structured analytical process. Analysts could cover the full dataset instead of relying on the most vivid or memorable excerpts.',
      'For cross-country work in particular, the ability to compare populations and markets with more confidence created strategic value that the previous workflow rarely had time to produce.',
    ],
    storyQuotes: [
      {
        text: 'A 70-year-old describing knee pain and a professional footballer describing the same injury barely sound like they are talking about the same thing.',
        attribution: 'Clinical Insights Lead, global MedTech company',
      },
      {
        text: "The tool understands that a military patient and an elderly patient are not the same respondent. It doesn't flatten them into a single voice.",
        attribution: 'Clinical Insights Lead, global MedTech company',
      },
    ],
  },
]

export const useCaseSlugs = new Set(useCases.map((useCase) => useCase.slug))

export function getUseCaseBySlug(slug) {
  return useCases.find((useCase) => useCase.slug === slug) || null
}
