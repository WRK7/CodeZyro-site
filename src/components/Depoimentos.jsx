import { useScrollReveal } from '../hooks/useScrollReveal'

const depoimentos = [
  {
    quote:
      'A CodeZync entregou nosso site em 10 dias e ainda nos ensinou a atualizar o conteúdo sozinhos. Profissionalismo do início ao fim.',
    author: 'Carlos M.',
    role: 'Proprietário — Barbearia Premium',
  },
  {
    quote:
      'O bot de atendimento transformou nossa operação. Hoje respondemos 3x mais clientes sem contratar ninguém novo.',
    author: 'Ana L.',
    role: 'Gestora Comercial — Clínica Bem Viver',
  },
  {
    quote:
      'Tinha medo de investir em tecnologia sem retorno. Em menos de 30 dias já tinha recuperado o valor investido.',
    author: 'Rafael T.',
    role: 'Advogado — Escritório Tavares & Associados',
  },
]

function DepoimentoCard({ item, delay }) {
  const ref = useScrollReveal(delay)
  return (
    <blockquote className="depoimento-card" ref={ref}>
      <p className="depoimento-quote">&ldquo;{item.quote}&rdquo;</p>
      <footer className="depoimento-footer">
        <strong className="depoimento-author">{item.author}</strong>
        <span className="depoimento-role">{item.role}</span>
      </footer>
    </blockquote>
  )
}

export default function Depoimentos() {
  const tagRef = useScrollReveal(0)
  const titleRef = useScrollReveal(80)
  const subtitleRef = useScrollReveal(120)

  return (
    <section className="depoimentos" id="depoimentos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" ref={tagRef}>// O que nossos clientes dizem</span>
          <h2 className="section-title" ref={titleRef}>
            Resultados que <span className="highlight">falam por si</span>
          </h2>
          <p className="section-subtitle" ref={subtitleRef}>
            Não acredite só na nossa palavra.
          </p>
        </div>
        <div className="depoimentos-grid">
          {depoimentos.map((d, i) => (
            <DepoimentoCard key={d.author} item={d} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
