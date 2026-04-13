import { useState } from 'react'

const logoSrc = 'https://framerusercontent.com/images/Q9rz4yZMCZVjxacKp2KQIWkUmU.png?width=688&height=105'

export function Navbar({ links, actions }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary">
        <a className="navbar__brand" href="/" aria-label="Q Insights home">
          <img className="navbar__logo" src={logoSrc} alt="Q Insights" />
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div className={`navbar__menu${isOpen ? ' navbar__menu--open' : ''}`} id="navbar-menu">
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <a
                  className={`navbar__link${link.active ? ' navbar__link--active' : ''}`}
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a
              className="button button--ghost"
              href={actions.demo.href}
              target="_blank"
              rel="noreferrer"
            >
              {actions.demo.label}
            </a>
            <a
              className="button button--primary"
              href={actions.login.href}
              target="_blank"
              rel="noreferrer"
            >
              {actions.login.label}
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
