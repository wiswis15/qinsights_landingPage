import { Figure } from './Figure'

function ExternalAwareLink({ href = '', children, ...props }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

export const mdxComponents = {
  Figure,
  a: ExternalAwareLink,
  h1: (props) => <h1 className="blog-article__h1" {...props} />,
  h2: (props) => <h2 className="blog-article__h2" {...props} />,
  h3: (props) => <h3 className="blog-article__h3" {...props} />,
  p: (props) => <p className="blog-article__paragraph" {...props} />,
  ul: (props) => <ul className="blog-article__list" {...props} />,
  ol: (props) => <ol className="blog-article__list blog-article__list--ordered" {...props} />,
  li: (props) => <li className="blog-article__list-item" {...props} />,
  blockquote: (props) => <blockquote className="blog-article__blockquote" {...props} />,
  img: (props) => <img className="blog-article__inline-image" {...props} />,
  figure: (props) => <figure className="blog-article__figure" {...props} />,
  figcaption: (props) => <figcaption className="blog-article__figcaption" {...props} />,
  strong: (props) => <strong className="blog-article__strong" {...props} />,
  em: (props) => <em className="blog-article__emphasis" {...props} />,
}
