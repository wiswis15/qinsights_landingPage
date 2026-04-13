function LinkedInIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4Z" fill="#0288D1" />
      <path d="M14 19h4v15h-4Zm1.988-2h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13 17.228 13 17.977 13.864 18 14.999 18 16.11 17.228 17 15.988 17ZM35 24.5C35 21.462 32.538 19 29.5 19c-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8a3 3 0 0 1 6 0v8h4s0-9.079 0-9.5Z" fill="#fff" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M43.2 33.9C42.8 36 41.1 37.6 39 37.9 35.7 38.4 30.2 39 24 39c-6.1 0-11.6-.6-15-1.1-2.1-.3-3.8-1.9-4.2-4-.4-2.3-.8-5.7-.8-9.9s.4-7.6.8-9.9c.4-2.1 2.1-3.7 4.2-4C12.3 9.6 17.8 9 24 9c6.2 0 11.6.6 15 1.1 2.1.3 3.8 1.9 4.2 4 .4 2.3.9 5.7.9 9.9 0 4.2-.5 7.6-.9 9.9Z" fill="#FF3D00" />
      <path d="M20 31V17l12 7-12 7Z" fill="#fff" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 18 14" aria-hidden="true">
      <path d="M1.615 14C1.155 14 .771 13.846.463 13.537A1.54 1.54 0 0 1 0 12.385V1.615C0 1.155.154.771.463.463.771.154 1.155 0 1.615 0h14.77c.46 0 .844.154 1.152.463.309.308.463.692.463 1.152v10.77c0 .46-.154.844-.463 1.152-.308.309-.692.463-1.152.463H1.615ZM9 7.115l-8-5.231v10.5c0 .18.058.327.173.443.115.115.263.173.442.173h14.77c.179 0 .327-.058.442-.173.115-.116.173-.263.173-.443v-10.5L9 7.115ZM9 6l7.692-5H1.308L9 6Z" fill="currentColor" />
    </svg>
  )
}

function SocialIcon({ icon }) {
  if (icon === 'linkedin') {
    return <LinkedInIcon />
  }

  return <YouTubeIcon />
}

export function Footer({ content }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <a className="site-footer__brand-link" href="/" aria-label="QInsights home">
            <img
              className="site-footer__logo"
              src={content.brand.logo.src}
              alt={content.brand.logo.alt}
            />
          </a>
          <p className="site-footer__tagline">{content.brand.tagline}</p>
        </div>

        <nav className="site-footer__column site-footer__column--pages" aria-label="Footer pages">
          <h2 className="site-footer__heading">{content.pagesHeading}</h2>
          <ul className="site-footer__links">
            {content.pages.map((page) => (
              <li key={`${page.label}-${page.href}`}>
                <a className="site-footer__link" href={page.href}>
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__column site-footer__column--contact">
          <h2 className="site-footer__heading">{content.contactHeading}</h2>
          <div className="site-footer__socials" aria-label="Social links">
            {content.socialLinks.map((social) => (
              <a
                key={social.label}
                className="site-footer__social-link"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
          <ul className="site-footer__contacts">
            {content.contacts.map((contact) => (
              <li key={contact.label}>
                <a className="site-footer__contact-link" href={contact.href}>
                  <span className="site-footer__contact-icon">
                    <MailIcon />
                  </span>
                  <span>{contact.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p className="site-footer__meta-label">{content.metaLabel}</p>
        <ul className="site-footer__meta-links">
          {content.metaLinks.map((link) => (
            <li key={`${link.label}-${link.href}`}>
              <a className="site-footer__meta-link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
