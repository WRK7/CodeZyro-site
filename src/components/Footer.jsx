export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-bracket">&lt;</span>
              Code<span className="logo-highlight">Zync</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-tagline">Tecnologia que impulsiona o seu negócio.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navegação</h4>
              <ul>
                {[
                  { href: '#servicos', label: 'Serviços' },
                  { href: '#catalogos', label: 'Catálogos' },
                  { href: '#portfolio', label: 'Portfólio' },
                  { href: '#sobre', label: 'Sobre' },
                  { href: '#contacto', label: 'Contato' },
                ].map(({ href, label }) => (
                  <li key={href}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Social</h4>
              <ul>
                {[
                  { href: 'https://linkedin.com/company/CodeZync', label: 'LinkedIn' },
                  { href: 'https://github.com/CodeZync', label: 'GitHub' },
                  { href: 'https://instagram.com/CodeZync', label: 'Instagram' },
                ].map(({ href, label }) => (
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
