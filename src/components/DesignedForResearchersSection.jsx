export function DesignedForResearchersSection({ content }) {
  return (
    <section className="designed-for-researchers" aria-labelledby="designed-heading">
      <h2
        id="designed-heading"
        className="designed-for-researchers__heading"
      >
        {content.heading}
      </h2>

      <p className="designed-for-researchers__subtitle">
        {content.subtitle}
      </p>

      <div className="designed-for-researchers__use-cases">
        {content.useCases.map((useCase, index) => (
          <article key={index} className="designed-for-researchers__use-case">
            <div className="designed-for-researchers__use-case-content">
              <h3 className="designed-for-researchers__use-case-heading">
                {useCase.heading}
              </h3>
              <p className="designed-for-researchers__use-case-description">
                {useCase.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="designed-for-researchers__closing-card">
        <p className="designed-for-researchers__closing">
          {content.closingStatement}
        </p>
      </div>
    </section>
  )
}
