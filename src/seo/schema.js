import { faqSection } from '../content/landingPage'
import { defaultDescription, siteUrl } from './routes'

const organizationId = `${siteUrl}/#organization`
const websiteId = `${siteUrl}/#website`
const softwareId = `${siteUrl}/#software`

const sameAs = [
  'https://www.linkedin.com/company/qinsights-ai/?viewAsMember=true',
  'https://www.youtube.com/@qinsights-ai-for-qualanalysis',
  'https://ai-in-qualitative-research.com/',
]

function reference(id) {
  return { '@id': id }
}

function absoluteUrl(value) {
  if (!value) return undefined
  if (/^https?:\/\//i.test(value)) return value
  return `${siteUrl}${value.startsWith('/') ? value : `/${value}`}`
}

function compactText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim()
}

function isObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value)
}

function answerPartToText(part) {
  if (typeof part === 'string') return part
  if (!isObject(part)) return ''
  if (part.text) return part.text
  if (Array.isArray(part.items)) return part.items.join(', ')
  if (Array.isArray(part.segments)) {
    return part.segments.map(answerPartToText).join('')
  }
  return ''
}

function faqAnswerToText(answer) {
  const lines = answer.map(answerPartToText).map(compactText).filter(Boolean)
  return [...new Set(lines)].join(' ')
}

function createOrganization() {
  return {
    '@type': 'Organization',
    '@id': organizationId,
    name: 'QInsights',
    legalName: 'QInsights B.V.',
    url: siteUrl,
    logo: `${siteUrl}/Q.webp`,
    description: defaultDescription,
    email: 'contact@qinsights.ai',
    telephone: '+31639205531',
    vatID: 'NL867092142B01',
    identifier: {
      '@type': 'PropertyValue',
      name: 'Dutch Chamber of Commerce number',
      value: '95337822',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bierstraat 123C',
      postalCode: '3011 XA',
      addressLocality: 'Rotterdam',
      addressCountry: 'NL',
    },
    founder: [
      {
        '@type': 'Person',
        name: 'Dr. Susanne Friese',
      },
      {
        '@type': 'Person',
        name: 'Wissem Golli',
      },
    ],
    director: [
      {
        '@type': 'Person',
        name: 'Dr. Susanne Friese',
      },
      {
        '@type': 'Person',
        name: 'Wissem Golli',
      },
    ],
    sameAs,
  }
}

function createWebsite() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    name: 'QInsights',
    url: siteUrl,
    publisher: reference(organizationId),
    inLanguage: 'en',
  }
}

function createSoftwareApplication() {
  return {
    '@type': 'SoftwareApplication',
    '@id': softwareId,
    name: 'QInsights',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: siteUrl,
    description: defaultDescription,
    publisher: reference(organizationId),
    offers: {
      '@type': 'Offer',
      url: `${siteUrl}/pricing`,
    },
  }
}

function createWebPage(route) {
  return {
    '@type': route.schemaType === 'Article' ? 'WebPage' : route.schemaType || 'WebPage',
    '@id': `${route.canonical}#webpage`,
    url: route.canonical,
    name: route.title,
    description: route.description,
    isPartOf: reference(websiteId),
    publisher: reference(organizationId),
    inLanguage: 'en',
    primaryImageOfPage: route.image ? {
      '@type': 'ImageObject',
      url: route.image,
    } : undefined,
    about: route.includeSoftware ? reference(softwareId) : reference(organizationId),
  }
}

function createArticle(route) {
  const article = route.article || {}

  return {
    '@type': 'Article',
    '@id': `${route.canonical}#article`,
    headline: article.headline || route.title,
    description: article.description || route.description,
    image: absoluteUrl(article.image || route.image),
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author || 'Dr Susanne Friese',
    },
    publisher: reference(organizationId),
    mainEntityOfPage: reference(`${route.canonical}#webpage`),
    inLanguage: 'en',
  }
}

function createBreadcrumbList(route) {
  const labels = route.breadcrumb?.length ? route.breadcrumb : ['Home']
  const pathSegments = route.path === '/' ? [] : route.path.replace(/^\/+/, '').split('/')
  const itemListElement = labels.map((label, index) => {
    const isHome = index === 0
    const isBlogParent = route.schemaType === 'Article' && index === 1
    const itemPath = isHome ? '/' : isBlogParent ? '/blog' : `/${pathSegments.slice(0, index).join('/')}`
    const itemUrl = index === labels.length - 1 ? route.canonical : `${siteUrl}${itemPath === '/' ? '/' : itemPath}`

    return {
      '@type': 'ListItem',
      position: index + 1,
      name: label,
      item: itemUrl,
    }
  })

  return {
    '@type': 'BreadcrumbList',
    '@id': `${route.canonical}#breadcrumbs`,
    itemListElement,
  }
}

function createFaqPage(route) {
  return {
    '@type': 'FAQPage',
    '@id': `${route.canonical}#faq`,
    mainEntity: faqSection.items.map((item) => ({
      '@type': 'Question',
      name: compactText(item.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text: faqAnswerToText(item.answer || []),
      },
    })).filter((item) => item.name && item.acceptedAnswer.text),
  }
}

function pruneUndefined(value) {
  if (Array.isArray(value)) {
    return value.map(pruneUndefined).filter((item) => item !== undefined)
  }

  if (isObject(value)) {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, entryValue]) => entryValue !== undefined)
        .map(([key, entryValue]) => [key, pruneUndefined(entryValue)]),
    )
  }

  return value
}

export function getStructuredData(route) {
  const graph = [
    createOrganization(),
    createWebsite(),
    ...(route.includeSoftware ? [createSoftwareApplication()] : []),
    createWebPage(route),
    createBreadcrumbList(route),
    ...(route.schemaType === 'Article' ? [createArticle(route)] : []),
    ...(route.includeFaq ? [createFaqPage(route)] : []),
  ]

  return pruneUndefined({
    '@context': 'https://schema.org',
    '@graph': graph,
  })
}
