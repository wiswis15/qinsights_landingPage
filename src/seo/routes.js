import { blogArticles } from '../content/blog'
import { useCases } from '../content/useCases'

export const siteUrl = 'https://qinsights.ai'
export const defaultSocialImage = '/Q.webp'

const defaultDescription =
  'QInsights helps researchers analyze transcripts, focus groups, and survey responses with AI while keeping control of coding, themes, and evidence.'

const staticRoutes = [
  {
    path: '/',
    title: 'AI Qualitative Data Analysis Software | QInsights',
    description: defaultDescription,
  },
  {
    path: '/pricing',
    title: 'QInsights Pricing | Licensing Options for Research Teams',
    description: 'Explore QInsights licensing options for individual researchers, research teams, institutions, non-profits, and business users.',
  },
  {
    path: '/contact',
    title: 'Contact QInsights | Talk to Our Team',
    description: 'Contact the QInsights team to discuss pricing, licensing, demos, and AI-assisted qualitative research workflows.',
  },
  {
    path: '/team',
    title: 'QInsights Team | Qualitative Research and AI Experts',
    description: 'Meet the QInsights team building AI-assisted qualitative analysis tools for researchers, evaluators, consultants, and organizations.',
  },
  {
    path: '/in-practice',
    title: 'QInsights in Practice | Research Use Cases',
    description: 'See how academic, healthcare, consulting, and corporate teams use QInsights for traceable qualitative analysis.',
  },
  {
    path: '/blog',
    title: 'QInsights Blog | AI and Qualitative Research',
    description: 'Read QInsights articles on qualitative research, AI-assisted analysis, research ethics, traceability, and practical workflows.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | QInsights',
    description: 'Read the QInsights privacy policy for information about data handling, security, privacy standards, and user rights.',
  },
  {
    path: '/terms',
    title: 'Terms and Conditions | QInsights',
    description: 'Read the QInsights terms and conditions for use of QInsights services, subscriptions, payment, liability, and legal terms.',
  },
  {
    path: '/customer-information',
    title: 'Customer Information | QInsights',
    description: 'Find customer information for QInsights users, including company, service, and subscription details.',
  },
  {
    path: '/anonymizer',
    title: 'QInsights Anonymizer | Prepare Research Data Before AI Analysis',
    description: 'Use the QInsights Anonymizer to remove identifying information from interview transcripts and research notes before AI-assisted qualitative analysis.',
  },
]

function trimDescription(value, fallback = defaultDescription) {
  const text = String(value || fallback).replace(/\s+/g, ' ').trim()
  return text.length > 155 ? `${text.slice(0, 152).trim()}...` : text
}

function toAbsoluteImage(src = defaultSocialImage) {
  if (/^https?:\/\//i.test(src)) return src
  return `${siteUrl}${src.startsWith('/') ? src : `/${src}`}`
}

function normalizePath(path) {
  if (!path || path === '/') return '/'
  return `/${path.replace(/^\/+|\/+$/g, '')}`
}

function createRoute(route) {
  const path = normalizePath(route.path)
  return {
    prerender: true,
    ...route,
    path,
    title: route.title,
    description: trimDescription(route.description),
    canonical: `${siteUrl}${path === '/' ? '/' : path}`,
    image: toAbsoluteImage(route.image),
  }
}

const blogRoutes = blogArticles.map((article) => createRoute({
  path: `/${article.slug}`,
  title: `${article.title} | QInsights`,
  description: article.description || article.summary || `Read ${article.title} from QInsights on AI-assisted qualitative research and analysis workflows.`,
  image: article.coverImage || defaultSocialImage,
}))

const useCaseRoutes = useCases.map((useCase) => createRoute({
  path: `/in-practice/${useCase.slug}`,
  title: `${useCase.headline} | QInsights in Practice`,
  description: useCase.summary || useCase.intro,
}))

export const seoRoutes = [...staticRoutes.map(createRoute), ...useCaseRoutes, ...blogRoutes]

export function getSeoRoute(pathname = '/') {
  const normalizedPath = normalizePath(pathname)
  return seoRoutes.find((route) => route.path === normalizedPath) || seoRoutes[0]
}
