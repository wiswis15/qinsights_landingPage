export function ComparisonSection({ content }) {
  return (
    <section className="comparison" aria-labelledby="comparison-heading">
      <h2
        id="comparison-heading"
        className="comparison__heading"
      >
        {content.heading}
      </h2>

      <div className="comparison__table">
        <div className="comparison__headers">
          <div className="comparison__header comparison__header--others">
            <span className="comparison__header-label">{content.othersColumn.label}</span>
          </div>
          <div className="comparison__header comparison__header--qinsights">
            <img
              className="comparison__header-icon"
              src={content.qinsightsColumn.icon.src}
              alt={content.qinsightsColumn.icon.alt}
              loading="lazy"
              decoding="async"
            />
            <img
              className="comparison__header-logo"
              src={content.qinsightsColumn.logo.src}
              alt={content.qinsightsColumn.logo.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {content.rows.map((row, index) => (
          <div key={index} className="comparison__row">
            <div className="comparison__cell comparison__cell--others">
              <p className="comparison__cell-text">{row.others}</p>
            </div>
            <div className="comparison__cell comparison__cell--qinsights">
              <p className="comparison__cell-text">{row.qinsights}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
