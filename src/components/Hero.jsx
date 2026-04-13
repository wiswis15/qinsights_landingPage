const metrics = ['AI-Powered Qualitative Analysis', 'Traceable Workflows', 'Researcher-Controlled Output']

export function Hero({ copy, cta }) {
  return (
    <main className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__blur hero__blur--left" />
        <div className="hero__blur hero__blur--center" />
        <div className="hero__blur hero__blur--right" />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">{copy.title}</h1>
        <p className="hero__body">{copy.body}</p>

        <div className="hero__actions">
          <a className="button button--primary button--large" href={cta.href} target="_blank" rel="noreferrer">
            {cta.label}
            <span className="button__arrow" aria-hidden="true">{'\u2192'}</span>
          </a>
        </div>

        <ul className="hero__meta" aria-label="Product qualities">
          {metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}
