export function Figure({ src, alt, caption, className = '', imageClassName = '' }) {
  const figureClassName = ['blog-figure', className].filter(Boolean).join(' ')
  const imageClasses = ['blog-figure__image', imageClassName].filter(Boolean).join(' ')

  return (
    <figure className={figureClassName}>
      <img className={imageClasses} src={src} alt={alt} />
      {caption ? <figcaption className="blog-figure__caption">{caption}</figcaption> : null}
    </figure>
  )
}
