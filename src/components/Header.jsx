import { useState, useEffect, useCallback } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => {
      document.body.style.overflow = prev ? '' : 'hidden'
      return !prev
    })
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [])

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault()
      closeMenu()
      const target = document.querySelector(href)
      if (!target) return
      const headerHeight = document.getElementById('header').offsetHeight
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - headerHeight,
        behavior: 'smooth',
      })
    },
    [closeMenu]
  )

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="container header-content">
        <a href="#" className="logo" onClick={e => handleNavClick(e, 'body')}>
          <span className="logo-bracket">&lt;</span>
          Code<span className="logo-highlight">Zync</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <nav className={`nav${menuOpen ? ' active' : ''}`} id="nav">
          <ul className="nav-list">
            {[
              { href: '#servicos', label: 'Serviços' },
              { href: '#catalogos', label: 'Catálogos' },
              { href: '#portfolio', label: 'Portfólio' },
              { href: '#sobre', label: 'Sobre' },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="nav-link"
                  onClick={e => handleNavClick(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="nav-link nav-cta"
                onClick={e => handleNavClick(e, '#contacto')}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={`menu-toggle${menuOpen ? ' active' : ''}`}
          id="menu-toggle"
          aria-label="Abrir menu"
          onClick={toggleMenu}
        >
          <span className="hamburger" />
        </button>
      </div>
    </header>
  )
}
