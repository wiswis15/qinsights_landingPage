const desktopAppDownloadUrl =
  'https://github.com/aymenbenelghali/q-insight-desktop-app/releases/download/v0.0.1/Qinsight-Privacy-Guard.exe'

const workflowSteps = [
  {
    title: 'Download the app',
    body: 'Install the QInsights Anonymizer on the computer where your transcripts or research notes are stored.',
  },
  {
    title: 'Anonymize your files locally',
    body: 'Open your transcript or notes in the Anonymizer, review the suggested replacements, and prepare the file before upload.',
  },
  {
    title: 'Continue in QInsights',
    body: 'Upload the anonymized file into QInsights and continue with AI-assisted qualitative analysis.',
  },
]

const safeguards = [
  'The Anonymizer is designed for interview transcripts and research notes that may contain identifying information.',
  'It helps you prepare your data locally before you continue your analysis in QInsights.',
  'You can download the Anonymizer here or from within your QInsights account. After installation, log in with your existing QInsights login details.',
  'The Anonymizer is currently a beta version. Feedback is welcome.',
]

export function DesktopAppPage() {
  function handleDownloadClick() {
    const confirmed = window.confirm(
      'You are about to download the QInsights Anonymizer desktop installer. This is a beta desktop app. Continue?'
    )

    if (confirmed) {
      window.location.href = desktopAppDownloadUrl
    }
  }

  return (
    <main className="desktop-app-page">
      <section className="desktop-app-hero" aria-labelledby="desktop-app-title">
        <div className="desktop-app-hero__copy">
          <p className="desktop-app-hero__eyebrow">Desktop App</p>
          <h1 className="desktop-app-hero__title" id="desktop-app-title">
            QInsights Anonymizer
          </h1>
          <p className="desktop-app-hero__body">
            <em>Anonymize transcripts before AI analysis</em>
          </p>
          <p className="desktop-app-hero__body">
            The QInsights Anonymizer helps you remove or replace identifying information in interview transcripts and research notes before uploading them to QInsights.
          </p>
          <p className="desktop-app-hero__body">
            It runs on your computer, so you can prepare your files locally before continuing your analysis in QInsights.
          </p>
          <p className="desktop-app-hero__note">
            The Anonymizer is currently available as a public beta. To use it, you need a QInsights account. After installing the app on your computer, simply log in with your QInsights login details.
          </p>
          <div className="desktop-app-hero__actions desktop-app-hero__actions--copy">
            <a className="button button--ghost button--large" href="https://app.qinsights.ai/login" target="_blank" rel="noreferrer">
              Open QInsights
            </a>
          </div>
        </div>

        <div className="desktop-app-hero__panel" aria-label="QInsights Anonymizer actions">
          <div className="desktop-app-hero__actions desktop-app-hero__actions--panel">
            <button className="button button--primary button--large" type="button" onClick={handleDownloadClick}>
              Download
            </button>
          </div>
        </div>
      </section>

      <section className="desktop-app-section" aria-labelledby="desktop-app-problem-title">
        <div className="desktop-app-section__intro">
          <p className="desktop-app-section__eyebrow">Why use the Anonymizer?</p>
          <h2 className="desktop-app-section__title" id="desktop-app-problem-title">
            Qualitative data often contains information that can make participants identifiable.
          </h2>
        </div>
        <p className="desktop-app-section__body">
          This includes names, places, organizations, roles, dates, and other details that may reveal who someone is, especially in small samples or specific research settings. Before uploading transcripts to a cloud-based AI system, researchers need to ensure they have a legal basis for processing personal data. If this is not covered by consent or another legal basis, the data must be anonymized first. The QInsights Anonymizer gives you a practical way to do this before uploading your transcripts into QInsights.
        </p>
      </section>

      <section className="desktop-app-workflow" aria-labelledby="desktop-app-workflow-title">
        <div className="desktop-app-section__intro">
          <p className="desktop-app-section__eyebrow">Workflow</p>
          <h2 className="desktop-app-section__title" id="desktop-app-workflow-title">
            From raw transcripts to prepared analysis material
          </h2>
        </div>
        <div className="desktop-app-workflow__grid">
          {workflowSteps.map((step, index) => (
            <article className="desktop-app-workflow__step" key={step.title}>
              <span className="desktop-app-workflow__number">{index + 1}</span>
              <h3>
                {index + 1}. {step.title}
              </h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="desktop-app-download" aria-labelledby="desktop-app-download-title">
        <div>
          <p className="desktop-app-section__eyebrow">Download the QInsights Anonymizer</p>
          <h2 className="desktop-app-download__title" id="desktop-app-download-title">
            Download the QInsights Anonymizer
          </h2>
          <ul className="desktop-app-download__list">
            {safeguards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <button className="button button--primary button--large desktop-app-download__button" type="button" onClick={handleDownloadClick}>
          Download
        </button>
      </section>
    </main>
  )
}
