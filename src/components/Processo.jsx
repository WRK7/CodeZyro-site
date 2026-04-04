import { Fragment } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Entendimento',
    timing: 'até 1 dia útil',
    description:
      'Ouvimos o seu problema e mapeamos a melhor solução digital para o seu negócio. Reunião rápida, sem compromisso.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Desenvolvimento',
    timing: '7 a 21 dias úteis, conforme o projeto',
    description:
      'Construímos a solução de forma ágil, com atualizações constantes. Você acompanha cada etapa em tempo real.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Entrega & Suporte',
    timing: 'contínuo',
    description:
      'Entregamos o projeto, apresentamos tudo em detalhe e garantimos suporte dedicado para que tudo funcione sem você precisar entender de tecnologia.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

export default function Processo() {
  const tagRef      = useScrollReveal(0)
  const titleRef    = useScrollReveal(100)
  const subtitleRef = useScrollReveal(150)

  const step0Ref = useScrollReveal(0)
  const step1Ref = useScrollReveal(150)
  const step2Ref = useScrollReveal(300)

  const stepRefs = [step0Ref, step1Ref, step2Ref]

  return (
    <section className="processo" id="processo">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" ref={tagRef}>// Como Trabalhamos</span>
          <h2 className="section-title" ref={titleRef}>
            Processo <span className="highlight">simples</span>, entrega <span className="highlight">rápida</span>
          </h2>
          <p className="section-subtitle" ref={subtitleRef}>
            Do problema à solução em 3 passos — sem jargão, sem enrolação.
          </p>
        </div>

        <div className="processo-timeline">
          {steps.map((step, i) => (
            <Fragment key={step.number}>
              <div className="processo-step" ref={stepRefs[i]}>
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p className="step-timing">({step.timing})</p>
                  <p>{step.description}</p>
                </div>
                <div className="step-icon">{step.icon}</div>
              </div>
              {i < steps.length - 1 && <div className="processo-connector" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
