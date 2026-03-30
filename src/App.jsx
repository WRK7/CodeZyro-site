import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Processo from './components/Processo'
import Portfolio from './components/Portfolio'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsappFloat from './components/WhatsappFloat'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Processo />
        <Portfolio />
        <Contacto />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
