export function GettingStartedSection({ content }) {
  return (
    <section className="getting-started" aria-labelledby="getting-started-title">
      <div className="page-frame">
        <div className="getting-started__card">
          <div className="getting-started__content">
            <h2 id="getting-started-title" className="getting-started__title">
              {content.title}
            </h2>
            <div className="getting-started__body">
              {content.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {content.note && (
              <div className="getting-started__note">
                <p>{content.note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
