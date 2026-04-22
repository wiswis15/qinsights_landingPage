import { Navigate, Link, useParams } from 'react-router-dom'
import { actions } from '../content/landingPage'
import { getUseCaseBySlug } from '../content/useCases'

function UseCaseStorySection({ title, paragraphs }) {
  return (
    <section className="use-case-story__section">
      <h2 className="use-case-story__section-title">{title}</h2>
      <div className="use-case-story__section-copy">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="use-case-story__paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export function UseCaseStoryPage() {
  const { slug = '' } = useParams()
  const story = getUseCaseBySlug(slug)

  if (!story) {
    return <Navigate to="/in-practice" replace />
  }

  const proofLine = story.proofMode === 'named'
    ? `${story.personName}, ${story.personRole} — ${story.organization}`
    : `${story.personRole} — ${story.organization}`

  return (
    <article
      className="use-case-story"
      style={{
        '--use-case-accent': story.themeAccent.solid,
        '--use-case-surface': story.themeAccent.soft,
        '--use-case-border': story.themeAccent.border,
        '--use-case-glow': story.themeAccent.glow,
      }}
    >
      <div className="use-case-story__inner">
        <header className="use-case-story__hero blog-reveal blog-reveal--visible">
          <div className="use-case-story__intro">
            <Link className="use-case-story__back-link" to="/in-practice">
              <span className="use-case-story__back-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M15.75 5.25 9 12l6.75 6.75"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  />
                </svg>
              </span>
              <span className="use-case-story__back-text">In Practice</span>
            </Link>

            <p className="use-case-story__sector">{story.sector}</p>
            <h1 className="use-case-story__title">{story.headline}</h1>
            <p className="use-case-story__summary">{story.intro}</p>
            <p className="use-case-story__proof">{proofLine}</p>
          </div>

          <blockquote className="use-case-story__lead-quote">
            <p>{story.quote}</p>
            <footer>{story.quoteAttribution}</footer>
          </blockquote>
        </header>

        <div className="use-case-story__layout">
          <div className="use-case-story__main blog-reveal blog-reveal--visible" style={{ animationDelay: '100ms' }}>
            <UseCaseStorySection title="The Challenge" paragraphs={story.challenge} />

            <blockquote className="use-case-story__feature-quote">
              <p>{story.storyQuotes[0].text}</p>
              <footer>{story.storyQuotes[0].attribution}</footer>
            </blockquote>

            <UseCaseStorySection title="The Solution" paragraphs={story.solution} />

            {story.storyQuotes[1] ? (
              <blockquote className="use-case-story__feature-quote use-case-story__feature-quote--secondary">
                <p>{story.storyQuotes[1].text}</p>
                <footer>{story.storyQuotes[1].attribution}</footer>
              </blockquote>
            ) : null}

            <UseCaseStorySection title="The Impact" paragraphs={story.impact} />

            <section className="use-case-story__closing" aria-labelledby="use-case-closing-title">
              <p className="use-case-story__closing-eyebrow">See It In Your Work</p>
              <h2 className="use-case-story__closing-title" id="use-case-closing-title">
                See how this would work for your team.
              </h2>
              <p className="use-case-story__closing-body">
                Bring a live project into a demo and see how QInsights handles your transcripts, responses, or interviews.
              </p>
              <a className="button button--primary" href={actions.demo.href} target="_blank" rel="noreferrer">
                <span>Book a Demo</span>
                <span className="button__arrow" aria-hidden="true">{'\u2192'}</span>
              </a>
            </section>
          </div>

          <aside className="use-case-story__rail blog-reveal blog-reveal--visible" style={{ animationDelay: '180ms' }}>
            <div className="use-case-story__rail-card">
              <p className="use-case-story__rail-label">Key Outcomes</p>
              <ul className="use-case-story__rail-list">
                {story.keyOutcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {story.metrics.length ? (
              <div className="use-case-story__rail-card">
                <p className="use-case-story__rail-label">Metrics</p>
                <ul className="use-case-story__rail-list">
                  {story.metrics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="use-case-story__rail-card use-case-story__rail-card--cta">
              <p className="use-case-story__rail-label">See QInsights Live</p>
              <p className="use-case-story__rail-text">
                Walk through your own use case with the team and see how the workflow holds up under real research pressure.
              </p>
              <a className="button button--ghost" href={actions.demo.href} target="_blank" rel="noreferrer">
                <span>Schedule Demo</span>
                <span className="button__arrow" aria-hidden="true">{'\u2192'}</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
