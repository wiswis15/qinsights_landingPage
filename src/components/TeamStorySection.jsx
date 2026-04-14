function renderSegments(segments) {
  return segments.map((segment, index) => {
    if (segment.type === 'link') {
      return (
        <a
          key={`${segment.text}-${index}`}
          className="team-story__link"
          href={segment.href}
          target={segment.external ? '_blank' : undefined}
          rel={segment.external ? 'noreferrer' : undefined}
        >
          {segment.text}
        </a>
      )
    }

    return <span key={`${segment.text}-${index}`}>{segment.text}</span>
  })
}

export function TeamStorySection({ content }) {
  return (
    <section className="team-story" aria-labelledby="team-story-title">
      <div className="team-story__inner">
        <div className="team-story__stack">
          <h2 className="team-story__title" id="team-story-title">
            {content.title}
          </h2>

          <div className="team-story__body">
            {content.blocks.map((block, index) => {
              if (block.type === 'subheading') {
                return (
                  <p key={`${block.text}-${index}`} className="team-story__subheading">
                    {block.text}
                  </p>
                )
              }

              return (
                <p key={block.text ?? `paragraph-${index}`} className="team-story__paragraph">
                  {block.segments ? renderSegments(block.segments) : block.text}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
