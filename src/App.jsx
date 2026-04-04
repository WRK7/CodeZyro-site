import Header from './components/Header'
import Hero from './components/Hero'
import Clientes from './components/Clientes'
import Servicos from './components/Servicos'
import Catalogos from './components/Catalogos'
import Portfolio from './components/Portfolio'
import Depoimentos from './components/Depoimentos'
import Processo from './components/Processo'
import FAQ from './components/FAQ'
import Sobre from './components/Sobre'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsappFloat from './components/WhatsappFloat'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clientes />
        <Servicos />
        <Catalogos />
        <Portfolio />
        <Depoimentos />
        <Processo />
        <FAQ />
        <Sobre />
        <Contacto />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
