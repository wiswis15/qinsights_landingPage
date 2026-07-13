import { Link } from 'react-router-dom'
import { Screenshot } from './Screenshot'
import { slugify, textFromChildren } from '../../lib/slugify'

function ExternalAwareLink({ href = '', children, ...props }) {
  const isExternal = /^https?:\/\//.test(href) || href.startsWith('mailto:')

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    )
  }

  if (href.startsWith('/')) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

function DocsH1({ children, ...props }) {
  return (
    <h1 id={slugify(textFromChildren(children))} className="docs-article__h1" {...props}>
      {children}
    </h1>
  )
}

function DocsH2({ children, ...props }) {
  return (
    <h2 id={slugify(textFromChildren(children))} className="docs-article__h2" {...props}>
      {children}
    </h2>
  )
}

function DocsH3({ children, ...props }) {
  return (
    <h3 id={slugify(textFromChildren(children))} className="docs-article__h3" {...props}>
      {children}
    </h3>
  )
}

function DocsH4({ children, ...props }) {
  return (
    <h4 id={slugify(textFromChildren(children))} className="docs-article__h4" {...props}>
      {children}
    </h4>
  )
}

export const docsMdxComponents = {
  Screenshot,
  a: ExternalAwareLink,
  h1: DocsH1,
  h2: DocsH2,
  h3: DocsH3,
  h4: DocsH4,
  p: (props) => <p className="docs-article__paragraph" {...props} />,
  ul: (props) => <ul className="docs-article__list" {...props} />,
  ol: (props) => <ol className="docs-article__list docs-article__list--ordered" {...props} />,
  li: (props) => <li className="docs-article__list-item" {...props} />,
  blockquote: (props) => <blockquote className="docs-article__blockquote" {...props} />,
  table: (props) => (
    <div className="docs-article__table-wrap">
      <table className="docs-article__table" {...props} />
    </div>
  ),
  th: (props) => <th className="docs-article__th" {...props} />,
  td: (props) => <td className="docs-article__td" {...props} />,
  img: (props) => <img className="docs-article__inline-image" loading="lazy" {...props} />,
  figure: (props) => <figure className="docs-article__figure" {...props} />,
  figcaption: (props) => <figcaption className="docs-article__figcaption" {...props} />,
  strong: (props) => <strong className="docs-article__strong" {...props} />,
  em: (props) => <em className="docs-article__emphasis" {...props} />,
  code: (props) => <code className="docs-article__code" {...props} />,
  pre: (props) => <pre className="docs-article__pre" {...props} />,
  hr: (props) => <hr className="docs-article__hr" {...props} />,
}
