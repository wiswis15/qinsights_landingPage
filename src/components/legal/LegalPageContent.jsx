export function LegalPageContent({ content }) {
  return (
    <main className="legal-page">
      <div className="legal-page__inner">
        <header className="legal-page__header blog-reveal blog-reveal--visible">
          <h1 className="legal-page__title">{content.title}</h1>
        </header>

        <div
          className="legal-page__content blog-reveal blog-reveal--visible"
          style={{ animationDelay: '100ms' }}
          dangerouslySetInnerHTML={{ __html: content.bodyHtml }}
        />
      </div>
    </main>
  )
}

