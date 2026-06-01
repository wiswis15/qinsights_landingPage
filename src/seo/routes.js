import { blogArticles } from '../content/blog'
import { useCases } from '../content/useCases'

export const siteUrl = 'https://qinsights.ai'
export const defaultSocialImage = '/Q.webp'

export const defaultDescription =
  'QInsights is AI qualitative research software for analyzing interviews, focus groups, open-ended survey responses, and unstructured data with traceable evidence and researcher control.'

const defaultLastModified = '2026-06-01'

const staticRoutes = [
  {
    path: '/',
    title: 'QInsights | AI Qualitative Research Software',
    description: defaultDescription,
    lastModified: defaultLastModified,
    schemaType: 'WebPage',
    breadcrumb: ['Home'],
    includeSoftware: true,
    includeFaq: true,
  },
  {
    path: '/pricing',
    title: 'QInsights Pricing | AI Qualitative Analysis Software',
    description: 'Compare QInsights licensing options for research teams, consultants, non-profits, institutions, and businesses using AI for qualitative data analysis.',
    lastModified: defaultLastModified,
    schemaType: 'WebPage',
    breadcrumb: ['Home', 'Pricing'],
    includeSoftware: true,
  },
  {
    path: '/contact',
    title: 'Contact QInsights | Book a Demo',
    description: 'Contact QInsights to discuss demos, pricing, licensing, and AI-assisted qualitative analysis workflows for your research data.',
    lastModified: defaultLastModified,
    schemaType: 'ContactPage',
    breadcrumb: ['Home', 'Contact'],
  },
  {
    path: '/team',
    title: 'QInsights Team | Qualitative Research and AI Experts',
    description: 'Meet the QInsights team building evidence-linked AI software for qualitative researchers, evaluators, consultants, and organizations.',
    lastModified: defaultLastModified,
    schemaType: 'AboutPage',
    breadcrumb: ['Home', 'Team'],
  },
  {
    path: '/in-practice',
    title: 'QInsights in Practice | AI Analysis for Interviews and Survey Responses',
    description: 'See how teams use QInsights for AI analysis of interviews, focus groups, open-ended survey responses, and unstructured research data.',
    lastModified: defaultLastModified,
    schemaType: 'CollectionPage',
    breadcrumb: ['Home', 'In Practice'],
  },
  {
    path: '/blog',
    title: 'QInsights Blog | AI and Qualitative Research',
    description: 'Read articles on AI qualitative research, interview analysis, open-ended survey analysis, traceability, research ethics, and practical workflows.',
    lastModified: defaultLastModified,
    schemaType: 'CollectionPage',
    breadcrumb: ['Home', 'Blog'],
  },
  {
    path: '/webinars',
    title: 'QInsights Webinars | AI Qualitative Data Analysis',
    description: 'Join QInsights webinars on AI-assisted qualitative data analysis, live demos, research workflows, and replay sessions with Dr. Susanne Friese.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | QInsights',
    description: 'Read how QInsights handles data protection, privacy, security, user rights, and responsible processing of qualitative research data.',
    lastModified: defaultLastModified,
    schemaType: 'WebPage',
    breadcrumb: ['Home', 'Privacy Policy'],
  },
  {
    path: '/terms',
    title: 'Terms and Conditions | QInsights',
    description: 'Read the QInsights terms and conditions covering subscriptions, services, payments, liability, and use of the QInsights platform.',
    lastModified: defaultLastModified,
    schemaType: 'WebPage',
    breadcrumb: ['Home', 'Terms and Conditions'],
  },
  {
    path: '/company-information',
    title: 'Company Information | QInsights',
    description: 'Find official QInsights company information, including registered address, VAT number, and Dutch Chamber of Commerce number.',
    lastModified: defaultLastModified,
    schemaType: 'AboutPage',
    breadcrumb: ['Home', 'Company Information'],
  },
  {
    path: '/anonymizer',
    title: 'QInsights | Anonymize your data off-line before AI analysis',
    description: 'Download the QInsights Anonymizer beta desktop app to prepare qualitative research files locally before AI-supported analysis.',
    lastModified: defaultLastModified,
    schemaType: 'WebPage',
    breadcrumb: ['Home', 'Anonymizer'],
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
  lastModified: article.updatedAt || article.modifiedAt || article.publishedAt,
  schemaType: 'Article',
  breadcrumb: ['Home', 'Blog', article.title],
  article: {
    headline: article.title,
    description: article.description || article.summary || `Read ${article.title} from QInsights on AI-assisted qualitative research and analysis workflows.`,
    image: article.coverImage || defaultSocialImage,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.modifiedAt || article.publishedAt,
    author: article.author || 'QInsights',
  },
}))

const useCaseRoutes = useCases.map((useCase) => createRoute({
  path: `/in-practice/${useCase.slug}`,
  title: `${useCase.headline} | QInsights in Practice`,
  description: useCase.summary || useCase.intro,
  lastModified: defaultLastModified,
  schemaType: 'WebPage',
  breadcrumb: ['Home', 'In Practice', useCase.headline],
}))

export const seoRoutes = [...staticRoutes.map(createRoute), ...useCaseRoutes, ...blogRoutes]

export function getSeoRoute(pathname = '/') {
  const normalizedPath = normalizePath(pathname)
  return seoRoutes.find((route) => route.path === normalizedPath) || seoRoutes[0]
}
