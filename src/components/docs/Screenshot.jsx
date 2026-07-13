// Placeholder visual used in place of the original manual screenshots.
// Swap the markup below for a real <img> once exported screenshots are available
// (see docs README note in the project summary for exact filenames/captions).
export function Screenshot({ caption, alt, label = 'Screenshot', aspect = '16 / 10' }) {
  return (
    <figure className="docs-screenshot">
      <div
        className="docs-screenshot__frame"
        role="img"
        aria-label={alt || caption || label}
        style={{ aspectRatio: aspect }}
      >
        <div className="docs-screenshot__chrome">
          <span className="docs-screenshot__dot" />
          <span className="docs-screenshot__dot" />
          <span className="docs-screenshot__dot" />
        </div>
        <div className="docs-screenshot__body">
          <svg viewBox="0 0 64 64" className="docs-screenshot__icon" aria-hidden="true">
            <rect x="4" y="10" width="56" height="44" rx="6" />
            <path d="M4 22h56" />
            <circle cx="13" cy="16" r="1.6" />
            <circle cx="19" cy="16" r="1.6" />
            <path d="M12 32h18M12 38h26M12 44h14" />
          </svg>
          <span className="docs-screenshot__label">{label}</span>
        </div>
      </div>
      {caption ? <figcaption className="docs-screenshot__caption">{caption}</figcaption> : null}
    </figure>
  )
}
