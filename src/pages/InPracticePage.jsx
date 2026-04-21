import { Link } from 'react-router-dom'
import { inPracticePage, useCases } from '../content/useCases'

function UseCaseCard({ useCase }) {
  const proofLine = useCase.proofMode === 'named'
    ? `${useCase.personName}, ${useCase.personRole} — ${useCase.organization}`
    : `${useCase.personRole} — ${useCase.organization}`

  return (
    <Link
      className="in-practice-card blog-reveal blog-reveal--visible"
      to={`/in-practice/${useCase.slug}`}
      style={{
        '--in-practice-accent': useCase.themeAccent.solid,
        '--in-practice-surface': useCase.themeAccent.soft,
        '--in-practice-border': useCase.themeAccent.border,
        '--in-practice-glow': useCase.themeAccent.glow,
      }}
    >
      <div className="in-practice-card__header">
        <p className="in-practice-card__sector">{useCase.sector}</p>
        <span className="in-practice-card__pulse" aria-hidden="true" />
      </div>

      <h2 className="in-practice-card__title">{useCase.headline}</h2>
      <p className="in-practice-card__summary">{useCase.summary}</p>

      <blockquote className="in-practice-card__quote">
        <p>{useCase.quote}</p>
      </blockquote>

      <p className="in-practice-card__proof">{proofLine}</p>
      <p className="in-practice-card__link">
        Read full story <span aria-hidden="true">{'\u2192'}</span>
      </p>
    </Link>
  )
}

export function InPracticePage() {
  const { hero, closingCta } = inPracticePage

  return (
    <section className="in-practice-page" aria-labelledby="in-practice-title">
      <div className="in-practice-page__inner">
        <header className="in-practice-hero">
          <p className="in-practice-hero__eyebrow">In Practice</p>
          <h1 className="in-practice-hero__title" id="in-practice-title">
            {hero.title}
          </h1>
          <p className="in-practice-hero__subtitle">{hero.subtitle}</p>

          <div className="in-practice-hero__actions">
            <a className="button button--primary" href={hero.primaryAction.href} target="_blank" rel="noreferrer">
              <span>{hero.primaryAction.label}</span>
              <span className="button__arrow" aria-hidden="true">{'\u2192'}</span>
            </a>
            <a className="button button--ghost" href={hero.secondaryAction.href} target="_blank" rel="noreferrer">
              <span>{hero.secondaryAction.label}</span>
              <span className="button__arrow" aria-hidden="true">{'\u2192'}</span>
            </a>
          </div>
        </header>

        <div className="in-practice-grid">
          {useCases.map((useCase, index) => (
            <div key={useCase.slug} style={{ animationDelay: `${index * 90}ms` }}>
              <UseCaseCard useCase={useCase} />
            </div>
          ))}
        </div>

        <section className="in-practice-cta" aria-labelledby="in-practice-cta-title">
          <div className="in-practice-cta__copy">
            <p className="in-practice-cta__eyebrow">Traceable By Design</p>
            <h2 className="in-practice-cta__title" id="in-practice-cta-title">
              {closingCta.heading}
            </h2>
            <p className="in-practice-cta__body">{closingCta.body}</p>
          </div>

          <a className="button button--primary" href={closingCta.action.href} target="_blank" rel="noreferrer">
            <span>{closingCta.action.label}</span>
            <span className="button__arrow" aria-hidden="true">{'\u2192'}</span>
          </a>
        </section>
      </div>
    </section>
  )
}
