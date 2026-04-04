import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'Qual é o prazo médio de entrega?',
    a: 'Depende do projeto. Uma landing page sai em 5 a 10 dias úteis. Um sistema web ou SaaS pode levar de 3 a 6 semanas. Damos um prazo estimado já na primeira conversa.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Trabalhamos com entrada + saldo na entrega. Para projetos maiores, parcelamos em etapas. Aceitamos PIX, transferência e cartão.',
  },
  {
    q: 'Preciso entender de tecnologia para trabalhar com vocês?',
    a: 'Não. Nossa missão é exatamente essa: traduzir a tecnologia em algo simples para você. Cuidamos de tudo técnico, você só precisa nos contar o que precisa.',
  },
  {
    q: 'E se eu não gostar do resultado?',
    a: 'Trabalhamos com revisões ilimitadas dentro do escopo acordado. Se após as revisões você ainda não estiver satisfeito, devolvemos o valor. Simples assim.',
  },
  {
    q: 'Vocês oferecem suporte após a entrega?',
    a: 'Sim. Todo projeto inclui 30 dias de suporte gratuito. Após esse período, oferecemos planos de manutenção mensal com valores a partir de R$ 97/mês.',
  },
  {
    q: 'Consigo usar os produtos do catálogo no meu negócio mesmo que eu seja de outro segmento?',
    a: 'Sim. Todos os produtos do catálogo são adaptáveis. Na prática, personalizamos cor, texto, logotipo e integrações de acordo com o seu negócio.',
  },
  {
    q: 'Vocês atendem fora do Brasil?',
    a: 'Sim, atendemos clientes em qualquer país de língua portuguesa. O trabalho é 100% remoto.',
  },
  {
    q: 'Como faço para começar?',
    a: 'Basta clicar em "Falar com especialista" e nos mandar uma mensagem pelo WhatsApp. Respondemos em até 24 horas — geralmente muito menos.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const tagRef = useScrollReveal(0)
  const titleRef = useScrollReveal(80)
  const subtitleRef = useScrollReveal(120)
  const listRef = useScrollReveal(160)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag" ref={tagRef}>// Perguntas Frequentes</span>
          <h2 className="section-title" ref={titleRef}>
            Tem <span className="highlight">dúvidas?</span> A gente responde.
          </h2>
          <p className="section-subtitle" ref={subtitleRef}>
            As perguntas que mais recebemos — respondidas de forma direta.
          </p>
        </div>
        <div className="faq-list" ref={listRef}>
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className={`faq-item${isOpen ? ' faq-item-open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-chevron" aria-hidden />
                </button>
                <div className="faq-answer" hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
