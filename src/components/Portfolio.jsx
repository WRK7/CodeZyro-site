import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    category: 'Desenvolvimento Web',
    title: 'Barbearia Premium',
    description:
      'Site institucional com sistema de agendamento online integrado ao WhatsApp — aumento de 40% nas marcações no primeiro mês.',
  },
  {
    category: 'Automação',
    title: 'Bot de Atendimento',
    description:
      'Chatbot para WhatsApp com integração ao sistema interno — reduziu em 70% o volume de mensagens manuais da equipe.',
  },
  {
    category: 'Landing Page',
    title: 'Escritório Jurídico',
    description:
      'Landing page com formulário de captação integrado — gerou 3x mais contatos qualificados em relação ao site anterior.',
  },
  {
    category: 'Aplicação Web',
    title: 'Dashboard Financeiro',
    description:
      'SaaS de gestão financeira com gráficos interativos e relatórios automáticos — implantado em 18 dias.',
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
  const ctaRef      = useScrollReveal(200)

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" ref={tagRef}>// Portfólio</span>
          <h2 className="section-title" ref={titleRef}>
            Projetos <span className="highlight">recentes</span>
          </h2>
          <p className="section-subtitle" ref={subtitleRef}>
            Veja o que já entregamos para negócios como o seu.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <PortfolioItem key={p.title} project={p} delay={i * 100} />
          ))}
        </div>

        <div className="portfolio-cta-wrap" ref={ctaRef}>
          <a href="#contato" className="btn btn-secondary portfolio-cta-btn">
            Ver todos os projetos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
