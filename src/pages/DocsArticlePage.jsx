import { Navigate, useParams } from 'react-router-dom'
import { DocsShell } from '../components/docs/DocsShell'
import { docsMdxComponents } from '../components/docs/docsMdxComponents'
import { docsNav, getAdjacentDocs, getDocBySlug } from '../content/docs'

export function DocsArticlePage() {
  const { slug = '' } = useParams()
  const doc = getDocBySlug(slug)

  if (!doc) {
    return <Navigate to="/docs" replace />
  }

  const { prev, next } = getAdjacentDocs(slug)
  const Content = doc.Content

  return (
    <DocsShell doc={doc} nav={docsNav} prev={prev} next={next}>
      <Content components={docsMdxComponents} />
    </DocsShell>
  )
}
