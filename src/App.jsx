import './app.scss'
import Contact from './components/contact/Contact.jsx'
import Hero from './components/hero/Hero.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Parallax from './components/parallax/Parallax.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Skills from './components/skills/Skills.jsx'

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
}

export default App
