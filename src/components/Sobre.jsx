import { useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

function CodeWindow() {
  const codeRef = useRef(null)

  useEffect(() => {
    const el = codeRef.current
    if (!el || window.innerWidth < 768) return

    const lines = [
      { html: '<span class="kw">const</span> <span class="var">CodeZync</span> = {', delay: 0 },
      { html: '  <span class="prop">missão</span>: <span class="str">"Digitalizar o seu negócio"</span>,', delay: 400 },
      { html: '  <span class="prop">foco</span>: <span class="str">"Resultados reais"</span>,', delay: 800 },
      { html: '  <span class="prop">método</span>: <span class="str">"Ágil e transparente"</span>,', delay: 1200 },
      { html: '  <span class="prop">garantia</span>: <span class="str">"Satisfação ou reembolso"</span>,', delay: 1600 },
      { html: '', delay: 1900 },
      { html: '  <span class="fn">transformar</span>(<span class="prm">problema</span>) {', delay: 2100 },
      { html: '    <span class="kw">return</span> <span class="var">solução</span>.<span class="fn">digital</span>();', delay: 2500 },
      { html: '  }', delay: 2900 },
      { html: '};', delay: 3100 },
    ]

    el.style.opacity = '0'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.style.opacity = '1'
        el.innerHTML = ''

        lines.forEach(({ html, delay }) => {
          setTimeout(() => {
            el.innerHTML += (el.innerHTML ? '\n' : '') + html
          }, delay)
        })

        observer.unobserve(el)
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="code-window">
      <div className="window-header">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="window-title">CodeZync.js</span>
      </div>
      <div className="window-body">
        <pre>
          <code ref={codeRef}>
            <span className="kw">const</span> <span className="var">CodeZync</span> = {'{'}
            {'\n'}  <span className="prop">missão</span>: <span className="str">"Digitalizar o seu negócio"</span>,
            {'\n'}  <span className="prop">foco</span>: <span className="str">"Resultados reais"</span>,
            {'\n'}  <span className="prop">método</span>: <span className="str">"Ágil e transparente"</span>,
            {'\n'}  <span className="prop">garantia</span>: <span className="str">"Satisfação ou reembolso"</span>,
            {'\n'}
            {'\n'}  <span className="fn">transformar</span>(<span className="prm">problema</span>) {'{'}
            {'\n'}    <span className="kw">return</span> <span className="var">solução</span>.<span className="fn">digital</span>();
            {'\n'}  {'}'}
            {'\n'}{'}'};
          </code>
        </pre>
      </div>
    </div>
  )
}

export default function Sobre() {
  const tagRef    = useScrollReveal(0)
  const titleRef  = useScrollReveal(100)
  const desc1Ref  = useScrollReveal(150)
  const desc2Ref  = useScrollReveal(200)
  const hlRef     = useScrollReveal(250)
  const windowRef = useScrollReveal(100)

  return (
    <section className="sobre" id="sobre">
      <div className="container">
        <div className="sobre-content">
          <div className="sobre-text">
            <span className="section-tag" ref={tagRef}>// Sobre Nós</span>
            <h2 className="section-title" ref={titleRef}>
              Somos a parceira tech que <span className="highlight">digitaliza</span> o seu negócio.
            </h2>
            <p className="sobre-description" ref={desc1Ref}>
              A CodeZync é a parceira tecnológica que transforma processos manuais e sistemas improvisados em
              soluções digitais confiáveis, rápidas e lucrativas. Cuidamos de toda a parte técnica para que você
              possa focar no que realmente importa: crescer.
            </p>
            <p className="sobre-description" ref={desc2Ref}>
              Não somos uma corporação lenta. Somos ágeis, diretos e obcecados por resultado. Digitalizamos o
              analógico, organizamos o caos e entregamos tecnologia que o seu time sabe usar — sem precisar de
              treinamento interminável.
            </p>
            <div className="sobre-highlights" ref={hlRef}>
              {['Entregas no Prazo', 'Suporte Dedicado', 'Preços Justos', 'Satisfação Garantida'].map(label => (
                <div className="highlight-item" key={label}>
                  <CheckIcon />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sobre-visual" ref={windowRef}>
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  )
}
