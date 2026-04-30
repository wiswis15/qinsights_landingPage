import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const logoSrc = 'https://framerusercontent.com/images/Q9rz4yZMCZVjxacKp2KQIWkUmU.png?width=688&height=105'

function isInternalLink(href) {
  return href.startsWith('/')
}

function NavLinkContent({ link }) {
  return (
    <span className="navbar__link-content">
      <span>{link.label}</span>
      {link.badge ? <span className="navbar__badge">{link.badge}</span> : null}
    </span>
  )
}

export function Navbar({ links, actions }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary">
        <Link className="navbar__brand" to="/" aria-label="Q Insights home">
          <img className="navbar__logo" src={logoSrc} alt="Q Insights" />
        </Link>

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
                {isInternalLink(link.href) ? (
                  <NavLink
                    className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
                    end={link.href === '/'}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <NavLinkContent link={link} />
                  </NavLink>
                ) : (
                  <a className="navbar__link" href={link.href} onClick={() => setIsOpen(false)}>
                    <NavLinkContent link={link} />
                  </a>
                )}
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
