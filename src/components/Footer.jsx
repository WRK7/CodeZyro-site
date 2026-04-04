import { WHATSAPP_E164, CONTACT_EMAIL, SOCIAL_LINKS } from '../siteConfig'

const navLinks = [
  { href: '#servicos',  label: 'Serviços' },
  { href: '#catalogos', label: 'Catálogos' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#processo',  label: 'Como Trabalhamos' },
  { href: '#faq',       label: 'FAQ' },
  { href: '#sobre',     label: 'Sobre' },
  { href: '#contato',   label: 'Contato' },
]

export default function Footer() {
  const handleLogoClick = e => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo" onClick={handleLogoClick}>
              <span className="logo-bracket">&lt;</span>
              Code<span className="logo-highlight">Zync</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-tagline">Tecnologia que digitaliza e impulsiona o seu negócio.</p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>Navegação</h4>
              <ul>
                {navLinks.map(({ href, label }) => (
                  <li key={href}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contato</h4>
              <ul>
                <li>
                  <a href={`https://wa.me/${WHATSAPP_E164}`} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Redes Sociais</h4>
              <ul>
                {SOCIAL_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CodeZync. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
