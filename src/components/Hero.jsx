import { DemoVideo } from './DemoVideo'

export function Hero({ copy, cta }) {
  return (
    <main className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__blur hero__blur--left" />
        <div className="hero__blur hero__blur--center" />
        <div className="hero__blur hero__blur--right" />
      </div>

      <div className="hero__content">
        {copy.eyebrow ? <p className="hero__eyebrow">{copy.eyebrow}</p> : null}
        <h1 className="hero__title">{copy.title}</h1>
        {copy.subtitle ? <h2 className="hero__subtitle">{copy.subtitle}</h2> : null}
        <p className="hero__body">{copy.body}</p>

        <div className="hero__actions">
          <a className="button button--primary button--large" href={cta.href} target="_blank" rel="noreferrer">
            {cta.label}
            <span className="button__arrow" aria-hidden="true">{'\u2192'}</span>
          </a>
        </div>

        <DemoVideo className="hero__demo" src={copy.demoVideo.src} title={copy.demoVideo.title} />

        {copy.audienceLine ? <p className="hero__audience">{copy.audienceLine}</p> : null}
      </div>
    </main>
  )
}
