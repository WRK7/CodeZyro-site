import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const categories = [
  {
    id: 'bots',
    label: 'Nossos Bots',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" strokeLinecap="round" strokeWidth="3" />
        <line x1="12" y1="16" x2="12" y2="16" strokeLinecap="round" strokeWidth="3" />
        <line x1="16" y1="16" x2="16" y2="16" strokeLinecap="round" strokeWidth="3" />
      </svg>
    ),
    items: [
      {
        title: 'Bot de Atendimento',
        description: 'Atendimento automático 24/7 via WhatsApp. Responde dúvidas, coleta dados e encaminha para o time.',
        status: 'popular',
        price: 'A partir de R$ 497',
        demo: '#',
      },
      {
        title: 'Bot de Agendamento',
        description: 'Permite que clientes agendem horários diretamente pelo WhatsApp, com confirmação e lembretes automáticos.',
        status: 'disponível',
        price: 'A partir de R$ 697',
        demo: '#',
      },
      {
        title: 'Bot de Cobrança',
        description: 'Envio automático de cobranças, boletos e lembretes de pagamento com régua de comunicação inteligente.',
        status: 'disponível',
        price: 'A partir de R$ 897',
        demo: '#',
      },
      {
        title: 'Bot de Captação',
        description: 'Qualifica leads automaticamente via WhatsApp ou Instagram, segmenta e repassa ao comercial.',
        status: 'em breve',
        price: 'Em breve',
        demo: null,
      },
    ],
  },
  {
    id: 'landing',
    label: 'Landing Pages',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    items: [
      {
        title: 'LP para Barbearias',
        description: 'Landing page moderna com portfólio de cortes, avaliações de clientes e botão de agendamento integrado.',
        status: 'popular',
        price: 'A partir de R$ 897',
        demo: '#',
      },
      {
        title: 'LP para Clínicas',
        description: 'Página institucional para clínicas e consultórios com formulário de captação e integração com WhatsApp.',
        status: 'disponível',
        price: 'A partir de R$ 997',
        demo: '#',
      },
      {
        title: 'LP Jurídica',
        description: 'Landing page para advogados e escritórios jurídicos com foco em credibilidade e captação de casos.',
        status: 'disponível',
        price: 'A partir de R$ 897',
        demo: '#',
      },
      {
        title: 'LP para Restaurantes',
        description: 'Cardápio digital, galeria de fotos, mapa de localização e integração com iFood ou delivery próprio.',
        status: 'em breve',
        price: 'Em breve',
        demo: null,
      },
    ],
  },
  {
    id: 'saas',
    label: 'SaaS & Micro-SaaS',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    items: [
      {
        title: 'Dashboard Financeiro',
        description: 'Controle de receitas, despesas, fluxo de caixa e relatórios automáticos em uma plataforma simples.',
        status: 'popular',
        price: 'A partir de R$ 2.997',
        demo: '#',
      },
      {
        title: 'CRM Simplificado',
        description: 'Gerencie clientes, oportunidades e follow-ups sem complicação. Feito para times pequenos.',
        status: 'disponível',
        price: 'A partir de R$ 2.497',
        demo: '#',
      },
      {
        title: 'Gestor de Agendamentos',
        description: 'Sistema completo de agendamento com painel para profissionais e portal para clientes.',
        status: 'disponível',
        price: 'A partir de R$ 1.997',
        demo: '#',
      },
      {
        title: 'Plataforma de Relatórios',
        description: 'Conecta às suas fontes de dados e gera relatórios automáticos com envio por e-mail ou WhatsApp.',
        status: 'em breve',
        price: 'Em breve',
        demo: null,
      },
    ],
  },
  {
    id: 'sites',
    label: 'Sites Institucionais',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    items: [
      {
        title: 'Site para PMEs',
        description: 'Site institucional completo com múltiplas páginas, blog, SEO técnico e painel de gestão de conteúdo.',
        status: 'popular',
        price: 'A partir de R$ 1.497',
        demo: '#',
      },
      {
        title: 'Site para Profissionais',
        description: 'Portfólio e site pessoal para freelancers, consultores e profissionais liberais que querem se destacar.',
        status: 'disponível',
        price: 'A partir de R$ 797',
        demo: '#',
      },
      {
        title: 'E-commerce',
        description: 'Loja virtual com carrinho, pagamento integrado, gestão de estoque e painel administrativo completo.',
        status: 'disponível',
        price: 'A partir de R$ 3.497',
        demo: '#',
      },
      {
        title: 'Site para ONGs',
        description: 'Site institucional para organizações sem fins lucrativos com área de doações e transparência financeira.',
        status: 'em breve',
        price: 'Em breve',
        demo: null,
      },
    ],
  },
]

const statusConfig = {
  popular:    { label: 'Popular',    className: 'badge-popular' },
  disponível: { label: 'Disponível', className: 'badge-disponivel' },
  'em breve': { label: 'Em Breve',   className: 'badge-embreve' },
}

function CatalogCard({ item, delay }) {
  const ref = useScrollReveal(delay)
  const status = statusConfig[item.status]
  const isComingSoon = item.status === 'em breve'

  return (
    <div className="catalog-card" ref={ref}>
      <div className="catalog-card-header">
        <span className={`catalog-badge ${status.className}`}>{status.label}</span>
      </div>
      <h4 className="catalog-card-title">{item.title}</h4>
      <p className="catalog-card-description">{item.description}</p>
      <span className="catalog-price">{item.price}</span>
      <div className="catalog-card-footer">
        <a
          href={item.demo ?? '#'}
          className={`catalog-btn-demo${!item.demo ? ' catalog-btn-disabled' : ''}`}
          target={item.demo && item.demo !== '#' ? '_blank' : undefined}
          rel="noopener noreferrer"
          onClick={!item.demo ? e => e.preventDefault() : undefined}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Ver exemplo
        </a>
        <a
          href="#contacto"
          className={`catalog-btn-cta${isComingSoon ? ' catalog-btn-disabled' : ''}`}
          onClick={isComingSoon ? e => e.preventDefault() : undefined}
        >
          {isComingSoon ? 'Em Breve' : 'Solicitar'}
          {!isComingSoon && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          )}
        </a>
      </div>
    </div>
  )
}

export default function Catalogos() {
  const [active, setActive] = useState('bots')

  const tagRef      = useScrollReveal(0)
  const titleRef    = useScrollReveal(100)
  const subtitleRef = useScrollReveal(150)

  const current = categories.find(c => c.id === active)

  return (
    <section className="catalogos" id="catalogos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" ref={tagRef}>// Catálogos</span>
          <h2 className="section-title" ref={titleRef}>
            Produtos <span className="highlight">prontos</span> para o seu negócio
          </h2>
          <p className="section-subtitle" ref={subtitleRef}>
            Soluções já desenvolvidas e adaptáveis. Entrega mais rápida, custo menor.
          </p>
        </div>

        <div className="catalog-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`catalog-tab${active === cat.id ? ' active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="catalog-grid">
          {current.items.map((item, i) => (
            <CatalogCard key={item.title} item={item} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
