import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Desenvolvimento Web',
    description:
      'Sites institucionais, landing pages e e-commerce com design moderno, carregamento rápido e estrutura otimizada para o Google.',
    features: ['Sites Responsivos', 'Landing Pages', 'E-commerce', 'SEO Técnico'],
    featured: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Automação',
    description:
      'Bots para WhatsApp, scripts Python e integração de sistemas. Eliminamos tarefas repetitivas para você ganhar tempo e reduzir erros.',
    features: ['Bots para WhatsApp', 'Integração de APIs', 'Automação de Processos', 'Relatórios Automáticos'],
    featured: true,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" ry="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" ry="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" ry="1" />
        <path d="M14 21h7v-9l-3 2-3-4-4 6-2-3-2 2" />
      </svg>
    ),
    title: 'Sistemas Web & Dashboards',
    description:
      'Painéis administrativos, CRMs e sistemas internos sob medida. Saia das planilhas e tenha controle total da sua operação.',
    features: ['Dashboards Interativos', 'Gestão de Clientes (CRM)', 'Painéis Administrativos', 'Digitalização de Processos'],
    featured: false,
  },
]

function ServicoCard({ service, delay }) {
  const ref = useScrollReveal(delay)

  return (
    <article className={`servico-card${service.featured ? ' featured' : ''}`} ref={ref}>
      {service.featured && <div className="servico-badge">Mais Pedido</div>}
      <div className="servico-icon">{service.icon}</div>
      <h3 className="servico-title">{service.title}</h3>
      <p className="servico-description">{service.description}</p>
      <ul className="servico-features">
        {service.features.map(f => <li key={f}>{f}</li>)}
      </ul>
      <a href="#contato" className="servico-link">
        Saber mais
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </article>
  )
}

export default function Servicos() {
  const tagRef      = useScrollReveal(0)
  const titleRef    = useScrollReveal(100)
  const subtitleRef = useScrollReveal(150)

  return (
    <section className="servicos" id="servicos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" ref={tagRef}>// Serviços</span>
          <h2 className="section-title" ref={titleRef}>
            O que <span className="highlight">fazemos</span>
          </h2>
          <p className="section-subtitle" ref={subtitleRef}>
            Soluções digitais completas para impulsionar o seu negócio.
          </p>
        </div>
        <div className="servicos-grid">
          {services.map((s, i) => (
            <ServicoCard key={s.title} service={s} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
