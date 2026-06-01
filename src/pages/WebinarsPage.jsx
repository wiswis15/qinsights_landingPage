import { Link } from 'react-router-dom'
import { webinarsPage } from '../content/webinars'

const logoSrc = 'https://framerusercontent.com/images/Q9rz4yZMCZVjxacKp2KQIWkUmU.png?width=688&height=105'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.4 16.6 4.8 12l1.4-1.4 3.2 3.2 8.4-8.4L19.2 7 9.4 16.6Z" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h2v3h6V2h2v3h3v17H4V5h3V2Zm13 8H6v10h14V10ZM6 8h14V7H6v1Zm3 5h3v3H9v-3Zm5 0h3v3h-3v-3Z" />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Zm0-8a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-5.5 12c.8-1.1 2.8-2 5.5-2s4.7.9 5.5 2h-11Z" />
    </svg>
  )
}

function FormatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4h14v16H5V4Zm2 2v12h10V6H7Zm2 2h6v2H9V8Zm0 4h6v2H9v-2Z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm1-13h-2v6l5 3 1-1.7-4-2.3V7Z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5Zm2 3.6 5.2 3.4L10 15.4V8.6Z" />
    </svg>
  )
}

function WebinarHero({ content }) {
  return (
    <section className="webinars-hero" aria-labelledby="webinars-hero-title">
      <div className="webinars-hero__copy">
        <p className="webinars-hero__eyebrow">{content.eyebrow}</p>
        <h1 className="webinars-hero__title" id="webinars-hero-title">
          <span>Qualitative</span>
          <span>Data Analysis</span>
          <span className="webinars-hero__title-accent">with AI and</span>
          <span className="webinars-hero__title-accent">QInsights</span>
        </h1>
        <p className="webinars-hero__body">{content.body}</p>

        <ul className="webinars-hero__bullets">
          {content.bullets.map((bullet) => (
            <li key={bullet}>
              <span className="webinars-hero__check">
                <CheckIcon />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <a className="button button--primary button--large" href={content.primaryAction.href} target="_blank" rel="noreferrer">
          <span>{content.primaryAction.label}</span>
          <span className="button__arrow" aria-hidden="true">-&gt;</span>
        </a>
        <p className="webinars-hero__note">{content.note}</p>
      </div>

      <div className="webinars-hero__media">
        <img className="webinars-hero__image" src={content.image.src} alt={content.image.alt} />
      </div>
    </section>
  )
}

function UpcomingWebinarCard({ webinar }) {
  const [dateLead, dateYear] = webinar.date.split(',').map((part) => part.trim())

  return (
    <article className="webinar-event">
      <div className="webinar-event__date">
        <span className="webinar-event__date-lead">{dateLead}</span>
        <span className="webinar-event__date-year">{dateYear}</span>
      </div>
      <div className="webinar-event__content">
        <h3 className="webinar-event__title">{webinar.title}</h3>
        <p className="webinar-event__meta">{webinar.meta}</p>
        <div className="webinar-event__description">
          {webinar.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="webinar-event__footer">
          <a className="button button--primary" href={webinar.action.href} target="_blank" rel="noreferrer">
            {webinar.action.label}
          </a>
        </div>
      </div>
    </article>
  )
}

function PastWebinarCard({ webinar }) {
  return (
    <article className="webinar-replay">
      <div className="webinar-replay__date-row">
        <span className="webinar-replay__calendar">
          <CalendarIcon />
        </span>
        <p className="webinar-replay__date">{webinar.date}</p>
      </div>
      <h3 className="webinar-replay__title">{webinar.title}</h3>
      <p className="webinar-replay__summary">{webinar.summary}</p>
      <dl className="webinar-replay__details">
        <div>
          <span className="webinar-replay__detail-icon">
            <PersonIcon />
          </span>
          <dt>Speaker</dt>
          <dd>{webinar.speaker}</dd>
        </div>
        <div>
          <span className="webinar-replay__detail-icon">
            <FormatIcon />
          </span>
          <dt>Format</dt>
          <dd>{webinar.format}</dd>
        </div>
        <div>
          <span className="webinar-replay__detail-icon">
            <ClockIcon />
          </span>
          <dt>Duration</dt>
          <dd>{webinar.duration}</dd>
        </div>
      </dl>
      {webinar.action.href ? (
        <a className="button button--ghost" href={webinar.action.href} target="_blank" rel="noreferrer">
          <PlayIcon />
          {webinar.action.label}
        </a>
      ) : (
        <span className="webinar-replay__coming-soon">
          <PlayIcon />
          {webinar.action.label}
        </span>
      )}
    </article>
  )
}

function SectionHeader({ id, eyebrow, title, body }) {
  return (
    <header className="webinars-section-header">
      <p className="webinars-section-header__eyebrow">{eyebrow}</p>
      <h2 className="webinars-section-header__title" id={id}>{title}</h2>
      {body ? <p className="webinars-section-header__body">{body}</p> : null}
    </header>
  )
}

export function WebinarsPage() {
  const { hero, upcoming, past, newsletter } = webinarsPage

  return (
    <>
      <header className="webinars-campaign-header">
        <Link className="webinars-campaign-header__brand" to="/" aria-label="QInsights home">
          <img src={logoSrc} alt="QInsights" />
        </Link>
      </header>

      <main className="webinars-page">
      <div className="webinars-page__inner">
        <WebinarHero content={hero} />

        <section className="webinars-section webinars-section--upcoming" aria-labelledby="upcoming-webinars-title">
          <SectionHeader id="upcoming-webinars-title" eyebrow={upcoming.eyebrow} title={upcoming.title} />
          <div className="webinars-section__list">
            {upcoming.webinars.map((webinar) => (
              <UpcomingWebinarCard key={`${webinar.date}-${webinar.action.href}`} webinar={webinar} />
            ))}
          </div>
        </section>

        <section className="webinars-section webinars-section--past" aria-labelledby="past-webinars-title">
          <SectionHeader id="past-webinars-title" eyebrow={past.eyebrow} title={past.title} body={past.body} />
          <div className="webinars-replay-grid">
            {past.webinars.map((webinar) => (
              <PastWebinarCard key={`${webinar.date}-${webinar.title}`} webinar={webinar} />
            ))}
          </div>
        </section>

        <section className="webinars-newsletter" aria-labelledby="webinars-newsletter-title">
          <div>
            <p className="webinars-newsletter__eyebrow">Newsletter</p>
            <h2 className="webinars-newsletter__title" id="webinars-newsletter-title">
              {newsletter.title}
            </h2>
            <p className="webinars-newsletter__body">{newsletter.body}</p>
          </div>
          <ul className="webinars-newsletter__benefits">
            {newsletter.benefits.map((benefit) => (
              <li key={benefit}>
                <CheckIcon />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <a className="button button--primary" href={newsletter.action.href} target="_blank" rel="noreferrer">
            {newsletter.action.label}
          </a>
        </section>
      </div>
      </main>
    </>
  )
}
