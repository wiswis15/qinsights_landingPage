function TocList({ headings, activeId, onNavigate }) {
  return (
    <ul className="docs-toc__list">
      {headings.map((heading) => (
        <li
          key={heading.id}
          className={`docs-toc__item docs-toc__item--h${heading.level}${
            heading.id === activeId ? ' docs-toc__item--active' : ''
          }`}
        >
          <a href={`#${heading.id}`} onClick={onNavigate}>
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function DocsTocDesktop({ headings, activeId }) {
  if (headings.length === 0) return null

  return (
    <aside className="docs-toc docs-toc--desktop" aria-label="On this page">
      <p className="docs-toc__heading">On this page</p>
      <TocList headings={headings} activeId={activeId} />
    </aside>
  )
}

export function DocsTocMobile({ headings, activeId }) {
  if (headings.length === 0) return null

  return (
    <details className="docs-toc docs-toc--mobile">
      <summary className="docs-toc__heading">On this page</summary>
      <TocList headings={headings} activeId={activeId} />
    </details>
  )
}
