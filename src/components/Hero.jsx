import { useEffect, useRef } from 'react'
import { useCounterAnimation } from '../hooks/useCounterAnimation'

function StatCounter({ target, suffix }) {
  const { ref, count } = useCounterAnimation(target)
  return (
    <div className="stat" ref={ref}>
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">
        {target === 50 && 'Projetos Entregues'}
        {target === 98 && 'Clientes Satisfeitos'}
        {target === 24 && 'Tempo de Resposta'}
      </span>
    </div>
  )
}

export default function Hero() {
  const particlesRef = useRef(null)
  const heroRef = useRef(null)
  const glowsRef = useRef([])

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return
    const count = window.innerWidth < 768 ? 15 : 30
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      p.style.left = Math.random() * 100 + '%'
      p.style.animationDelay = Math.random() * 8 + 's'
      p.style.animationDuration = (Math.random() * 4 + 6) + 's'
      const size = Math.random() * 4 + 2
      p.style.width = size + 'px'
      p.style.height = size + 'px'
      container.appendChild(p)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth < 1024) return
    const hero = heroRef.current
    const glows = glowsRef.current
    if (!hero || !glows.length) return

    const onMouseMove = ({ clientX, clientY }) => {
      const xP = (clientX / window.innerWidth - 0.5) * 2
      const yP = (clientY / window.innerHeight - 0.5) * 2
      glows.forEach((g, i) => {
        const s = (i + 1) * 15
        g.style.transform = `translate(${xP * s}px, ${yP * s}px)`
      })
    }

    hero.addEventListener('mousemove', onMouseMove)
    return () => hero.removeEventListener('mousemove', onMouseMove)
  }, [])

  const setGlowRef = (el, i) => { glowsRef.current[i] = el }

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="grid-pattern" />
        <div className="grid-lines">
          <div className="grid-line grid-line-h" />
          <div className="grid-line grid-line-h" />
          <div className="grid-line grid-line-v" />
          <div className="grid-line grid-line-v" />
        </div>

        <div className="glow glow-1" ref={el => setGlowRef(el, 0)} />
        <div className="glow glow-2" ref={el => setGlowRef(el, 1)} />
        <div className="glow glow-3" ref={el => setGlowRef(el, 2)} />

        <div className="floating-code">
          {['<div>', 'const x = ', '{ }', '( ) =>', 'npm run', 'async', '.then()', '</>'].map(
            (text, i) => (
              <span key={i} className={`code-fragment code-${i + 1}`}>{text}</span>
            )
          )}
        </div>

        <div className="particles" ref={particlesRef} />
      </div>

      <div className="container hero-content hero-content-wide">
        <div className="hero-badge">
          <span className="pulse" />
          Vagas limitadas — aceitando novos projetos em abril
        </div>

        <h1 className="hero-title hero-title-seo">
          <span className="line line-1 hero-h1-block">
            <span className="hero-h1-line">
              Desenvolvimento Web, Automação e Bots para{' '}
              <span className="highlight-word">Pequenas e Médias Empresas</span>
            </span>
            <span className="cursor">_</span>
          </span>
        </h1>

        <p className="hero-subtitle">
          <span className="subtitle-text">
            Tecnologia que impulsiona o seu negócio. Traduzimos processos manuais em soluções digitais ágeis,
            acessíveis e prontas para crescer.
          </span>
        </p>

        <div className="hero-cta">
          <a href="#contato" className="btn btn-primary btn-glow">
            <span>Quero meu orçamento gratuito</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#servicos" className="btn btn-secondary">
            <span>Ver Soluções</span>
          </a>
        </div>

        <div className="hero-stats">
          <StatCounter target={50} suffix="+" />
          <div className="stat-divider" />
          <StatCounter target={98} suffix="%" />
          <div className="stat-divider" />
          <StatCounter target={24} suffix="h" />
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  )
}
