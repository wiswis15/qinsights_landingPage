import { NavLink } from 'react-router-dom'

export function DocsSidebar({ nav, isOpen, onClose }) {
  return (
    <>
      <div
        className={`docs-sidebar__overlay${isOpen ? ' docs-sidebar__overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className={`docs-sidebar${isOpen ? ' docs-sidebar--open' : ''}`}
        aria-label="Documentation navigation"
        id="docs-sidebar"
      >
        {nav.map((section) => (
          <div className="docs-sidebar__group" key={section.group}>
            <p className="docs-sidebar__heading">{section.group}</p>
            <ul className="docs-sidebar__list">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <NavLink
                    to={`/docs/${item.slug}`}
                    className={({ isActive }) =>
                      `docs-sidebar__link${isActive ? ' docs-sidebar__link--active' : ''}`
                    }
                    onClick={onClose}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </>
  )
}
