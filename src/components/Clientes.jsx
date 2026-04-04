import { useScrollReveal } from '../hooks/useScrollReveal'

const clientes = [
  'Barbearia Premium',
  'Clínica Bem Viver',
  'Escritório Tavares & Associados',
  'PMEs de serviços',
  'Comércio local',
  'Profissionais liberais',
]

export default function Clientes() {
  const headerRef = useScrollReveal(0)
  const stripRef = useScrollReveal(120)

  return (
    <section className="clientes" id="clientes">
      <div className="container">
        <div className="clientes-header" ref={headerRef}>
          <span className="section-tag">// Empresas que confiam na CodeZync</span>
          <p className="clientes-subtitle">
            Mais de 50 negócios já digitalizaram suas operações com a gente.
          </p>
        </div>
        <div className="clientes-strip" ref={stripRef} aria-label="Marcas e segmentos atendidos">
          {clientes.map(nome => (
            <span key={nome} className="clientes-pill">{nome}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
