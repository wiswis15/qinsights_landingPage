export function TeamProfilesSection({ content }) {
  return (
    <section className="team-profiles" aria-label="QInsights leadership">
      <div className="team-profiles__grid">
        {content.profiles.map((profile) => (
          <article className="team-profiles__item" key={profile.name}>
            <div className="team-profiles__media">
              <img className="team-profiles__image" src={profile.image.src} alt={profile.image.alt} />
            </div>

            <div className="team-profiles__content">
              <div className="team-profiles__heading">
                <h2 className="team-profiles__name">{profile.name}</h2>
                <p className="team-profiles__role">{profile.role}</p>
              </div>

              <div className="team-profiles__body">
                {profile.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
