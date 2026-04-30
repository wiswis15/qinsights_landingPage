const desktopAppDownloadUrl =
  'https://github.com/aymenbenelghali/q-insight-desktop-app/releases/download/v0.0.1/Qinsight-Privacy-Guard.exe'

const workflowSteps = [
  {
    title: 'Download the Windows app',
    body: 'Install QInsights Privacy Guard on the computer where your research files are stored.',
  },
  {
    title: 'Prepare sensitive files locally',
    body: 'Review transcripts, notes, and participant details before anything moves into your cloud workflow.',
  },
  {
    title: 'Continue in QInsights',
    body: 'Upload prepared material into QInsights for analysis with a cleaner privacy posture.',
  },
]

const safeguards = [
  'Designed for transcripts, notes, survey exports, and participant metadata that may contain PII.',
  'Keeps the preparation step local before researchers continue with QInsights analysis.',
  'Desktop entitlement is handled inside the installed app through the existing QInsights access flow.',
]

export function DesktopAppPage() {
  function handleDownloadClick() {
    const confirmed = window.confirm(
      'You are about to download the QInsights Privacy Guard desktop installer for Windows. This is a beta desktop app. Continue?'
    )

    if (confirmed) {
      window.location.href = desktopAppDownloadUrl
    }
  }

  return (
    <main className="desktop-app-page">
      <section className="desktop-app-hero" aria-labelledby="desktop-app-title">
        <div className="desktop-app-hero__copy">
          <p className="desktop-app-hero__eyebrow">Desktop PII app</p>
          <h1 className="desktop-app-hero__title" id="desktop-app-title">
            QInsights Privacy Guard
          </h1>
          <p className="desktop-app-hero__body">
            Prepare sensitive qualitative research files locally before continuing your analysis in QInsights.
          </p>
          <div className="desktop-app-hero__actions">
            <button className="button button--primary button--large" type="button" onClick={handleDownloadClick}>
              Download for Windows
            </button>
            <a className="button button--ghost button--large" href="https://app.qinsights.ai/login" target="_blank" rel="noreferrer">
              Open QInsights
            </a>
          </div>
          <p className="desktop-app-hero__note">
            Public beta installer. Access to protected desktop workflows remains tied to your QInsights account.
          </p>
        </div>

        <div className="desktop-app-hero__panel" aria-label="Local privacy preparation workflow">
          <div className="desktop-app-device">
            <div className="desktop-app-device__bar">
              <span />
              <span />
              <span />
            </div>
            <div className="desktop-app-device__screen">
              <div className="desktop-app-device__status">Local preparation</div>
              <div className="desktop-app-device__file">
                <span>Interview transcript.docx</span>
                <strong>PII review</strong>
              </div>
              <div className="desktop-app-device__file desktop-app-device__file--safe">
                <span>Prepared transcript.docx</span>
                <strong>Ready for QInsights</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="desktop-app-section" aria-labelledby="desktop-app-problem-title">
        <div className="desktop-app-section__intro">
          <p className="desktop-app-section__eyebrow">Business problem</p>
          <h2 className="desktop-app-section__title" id="desktop-app-problem-title">
            Sensitive research material needs a local preparation step.
          </h2>
        </div>
        <p className="desktop-app-section__body">
          Researchers often work with participant names, locations, organizations, health details, and other identifying information. QInsights Privacy Guard gives teams a dedicated desktop step for preparing those files before upload and analysis.
        </p>
      </section>

      <section className="desktop-app-workflow" aria-labelledby="desktop-app-workflow-title">
        <div className="desktop-app-section__intro">
          <p className="desktop-app-section__eyebrow">Workflow</p>
          <h2 className="desktop-app-section__title" id="desktop-app-workflow-title">
            From raw files to prepared analysis material.
          </h2>
        </div>
        <div className="desktop-app-workflow__grid">
          {workflowSteps.map((step, index) => (
            <article className="desktop-app-workflow__step" key={step.title}>
              <span className="desktop-app-workflow__number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="desktop-app-download" aria-labelledby="desktop-app-download-title">
        <div>
          <p className="desktop-app-section__eyebrow">Beta download</p>
          <h2 className="desktop-app-download__title" id="desktop-app-download-title">
            Download the Windows installer directly from the QInsights release asset.
          </h2>
          <ul className="desktop-app-download__list">
            {safeguards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <button className="button button--primary button--large desktop-app-download__button" type="button" onClick={handleDownloadClick}>
          Download for Windows
        </button>
      </section>
    </main>
  )
}
