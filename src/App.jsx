import './app.scss'
import Contact from './components/contact/Contact.jsx'
import Hero from './components/hero/Hero.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Parallax from './components/parallax/Parallax.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Skills from './components/skills/Skills.jsx'
import Chatbot from './components/chatbot/Chatbot.jsx'
import { useEffect, useState } from 'react'

const App = () => {
  const [open, setOpen] = useState(window.sessionStorage.getItem('open'))

  useEffect(() => {
    console.log(open)
  }, [open])

  return (
    <>
      <div>
        <section id="Website">
          <Navbar />
          <Hero />
        </section>
        <section id="Fähigkeiten">
          <Parallax type="skills" />
        </section>
        <section>
          <Skills />
        </section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <Portfolio />
        <section id="Kontakt">
          <Contact />
        </section>
      </div>
    </>
  )
}

export default App
