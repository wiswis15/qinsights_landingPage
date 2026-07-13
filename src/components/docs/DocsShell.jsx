import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { DocsSidebar } from './DocsSidebar'
import { DocsTocDesktop, DocsTocMobile } from './DocsToc'
import { DocsPrevNext } from './DocsPrevNext'
import { useDocHeadings } from './useDocHeadings'

export function DocsShell({ doc, nav, prev, next, children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const bodyRef = useRef(null)
  const { headings, activeId } = useDocHeadings(bodyRef, doc.slug)

  return (
    <div className="docs-page">
      <div className="docs-topbar">
        <button
          type="button"
          className="docs-topbar__toggle"
          aria-expanded={isSidebarOpen}
          aria-controls="docs-sidebar"
          onClick={() => setIsSidebarOpen((open) => !open)}
        >
          <span className="docs-topbar__toggle-icon" aria-hidden="true" />
          Menu
        </button>
        <nav className="docs-topbar__breadcrumbs" aria-label="Breadcrumb">
          <Link to="/docs">Docs</Link>
          <span aria-hidden="true">/</span>
          <span>{doc.group}</span>
        </nav>
      </div>

      <div className="docs-layout">
        <DocsSidebar nav={nav} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <div className="docs-layout__main">
          <article className="docs-article" key={doc.slug}>
            <header className="docs-article__header">
              <p className="docs-article__eyebrow">{doc.group}</p>
              <h1 className="docs-article__title">{doc.title}</h1>
              {doc.description ? <p className="docs-article__lede">{doc.description}</p> : null}
            </header>

            <DocsTocMobile headings={headings} activeId={activeId} />

            <div className="docs-article__body" ref={bodyRef}>
              {children}
            </div>
          </article>

          <DocsPrevNext prev={prev} next={next} />
        </div>

        <DocsTocDesktop headings={headings} activeId={activeId} />
      </div>
    </div>
  )
}
