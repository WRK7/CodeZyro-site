import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    category: 'Desenvolvimento Web',
    title: 'Barbearia Premium',
    description: 'Site institucional com sistema de agendamento online integrado.',
  },
  {
    category: 'Automação',
    title: 'Bot de Atendimento',
    description: 'Chatbot inteligente para WhatsApp com integração ao sistema interno.',
  },
  {
    category: 'Landing Page',
    title: 'Escritório Jurídico',
    description: 'Landing page institucional para captação de clientes com formulário integrado.',
  },
  {
    category: 'Aplicação Web',
    title: 'Dashboard Financeiro',
    description: 'SaaS de gestão financeira com gráficos interativos e relatórios automáticos.',
  },
]

const PlaceholderIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

function PortfolioItem({ project, delay }) {
  const ref = useScrollReveal(delay)

  return (
    <article className="portfolio-item" ref={ref}>
      <div className="portfolio-image">
        <div className="portfolio-placeholder">
          <PlaceholderIcon />
        </div>
      </div>
      <div className="portfolio-overlay">
        <div className="portfolio-info">
          <span className="portfolio-category">{project.category}</span>
          <h3 className="portfolio-title">{project.title}</h3>
          <p className="portfolio-description">{project.description}</p>
        </div>
      </div>
    </article>
  )
}

export default function Portfolio() {
  const tagRef      = useScrollReveal(0)
  const titleRef    = useScrollReveal(100)
  const subtitleRef = useScrollReveal(150)

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" ref={tagRef}>// Portfólio</span>
          <h2 className="section-title" ref={titleRef}>
            Projetos <span className="highlight">recentes</span>
          </h2>
          <p className="section-subtitle" ref={subtitleRef}>
            Alguns dos trabalhos que realizamos.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <PortfolioItem key={p.title} project={p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
