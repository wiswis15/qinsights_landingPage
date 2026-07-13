const docModules = import.meta.glob('./*.mdx', { eager: true })

export const DOCS_GROUP_ORDER = [
  'Getting Started',
  'Supported File Types',
  'Analysis',
  'Analysis Archive',
  'Working with Q',
  'Account & Team',
  'FAQ',
]

function normalizeDoc(module) {
  const metadata = module.metadata || {}
  return { ...metadata, Content: module.default }
}

function groupRank(group) {
  const index = DOCS_GROUP_ORDER.indexOf(group)
  return index === -1 ? DOCS_GROUP_ORDER.length : index
}

export const docsPages = Object.values(docModules)
  .map(normalizeDoc)
  .sort((left, right) => {
    const groupDiff = groupRank(left.group) - groupRank(right.group)
    if (groupDiff !== 0) return groupDiff
    return (left.order ?? 0) - (right.order ?? 0)
  })

export const docsSlugs = new Set(docsPages.map((doc) => doc.slug))

export const docsNav = DOCS_GROUP_ORDER.map((group) => ({
  group,
  items: docsPages
    .filter((doc) => doc.group === group)
    .map((doc) => ({ slug: doc.slug, title: doc.navTitle || doc.title })),
})).filter((section) => section.items.length > 0)

export const defaultDocSlug = docsPages[0]?.slug || ''

export function getDocBySlug(slug) {
  return docsPages.find((doc) => doc.slug === slug) || null
}

export function getAdjacentDocs(slug) {
  const index = docsPages.findIndex((doc) => doc.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? docsPages[index - 1] : null,
    next: index < docsPages.length - 1 ? docsPages[index + 1] : null,
  }
}
