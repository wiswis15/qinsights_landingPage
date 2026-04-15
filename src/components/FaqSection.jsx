import { useState } from 'react'

function renderSegments(segments) {
  return segments.map((segment, index) => {
    if (segment.type === 'link') {
      return (
        <a
          key={`${segment.href}-${index}`}
          className="faq-section__link"
          href={segment.href}
          target={segment.external ? '_blank' : undefined}
          rel={segment.external ? 'noreferrer' : undefined}
        >
          {segment.text}
        </a>
      )
    }

    if (segment.type === 'strong') {
      return <strong key={`${segment.text}-${index}`}>{segment.text}</strong>
    }

    return <span key={`${segment.text}-${index}`}>{segment.text}</span>
  })
}

function renderBlock(block, index) {
  if (block.type === 'list') {
    return (
      <ul key={`list-${index}`} className="faq-section__answer-list">
        {block.items.map((item, itemIndex) => (
          <li key={`${item}-${itemIndex}`} className="faq-section__answer-list-item">
            {item}
          </li>
        ))}
      </ul>
    )
  }

  if (block.type === 'paragraph' && block.segments) {
    return (
      <p key={`paragraph-${index}`} className="faq-section__answer-paragraph">
        {renderSegments(block.segments)}
      </p>
    )
  }

  return (
    <p key={`paragraph-${index}`} className="faq-section__answer-paragraph">
      {block.text}
    </p>
  )
}

export function FaqSection({ content }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq-section" aria-labelledby="faq-section-heading">
      <h2 id="faq-section-heading" className="faq-section__heading">
        {content.heading}
      </h2>

      <div className="faq-section__items">
        {content.items.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `faq-section-panel-${index}`
          const buttonId = `faq-section-button-${index}`

          return (
            <article
              key={item.question}
              className={`faq-section__item ${isOpen ? 'faq-section__item--open' : ''}`}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <button
                id={buttonId}
                type="button"
                className="faq-section__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="faq-section__question">{item.question}</span>
                <span className="faq-section__icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <div
                id={panelId}
                className="faq-section__panel"
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
              >
                <div className="faq-section__answer">
                  {item.answer.map((block, blockIndex) => renderBlock(block, blockIndex))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
