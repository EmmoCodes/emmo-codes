import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
  {
    id: 1,
    repo: 'https://github.com/EmmoCodes/instagram_mockup_frontend',
    url: 'https://fakestagram.onrender.com/register',
    title: 'Social Media App',
    img: './toktok.png',
    desc: 'Eine Website im Mobiledesign (iPhone12 Pro), um Fotos zu posten, zu kommentieren, zu "liken" und Lieblingsfotos von Freunden zu speichern.',
  },
  {
    id: 2,
    repo: 'https://github.com/EmmoCodes/movie_app',
    url: 'https://github.com/EmmoCodes/movie_app',
    title: 'Movie App',
    img: './movieApp.png',
    desc:
      'Eine Website in MacBook13" und iPhone XR resolution, zu Film und Seriensuche für Interessenten. Favoriten\n' +
      '            können gespeichert, verwaltet und Trailer angesehen werden.',
  },
  {
    id: 3,
    repo: 'https://github.com/EmmoCodes/rock_paper_scissors',
    url: 'https://emmocodes.github.io/rock_paper_scissors/',
    title: 'Rock, Paper, Scissor',
    img: './rockPaperScissor.png',
    desc:
      'Das Schere-Stein-Papier-JavaScript-Projekt ist eine unterhaltsame Umsetzung des klassischen Spiels, das\n' +
      '            Benutzern ermöglicht, gegen den Computer anzutreten und ihre Fähigkeiten zu testen.',
  },
  {
    id: 4,
    url: 'https://emmocodes.github.io/new_interior/',
    repo: 'https://github.com/EmmoCodes/new_interior',
    title: 'New Interior',
    img: './newInterior.png',
    desc:
      'Eine Mode-Website in MacBook 13", iPad Air und iPhone XR resolution. Meine erste Responsive Website in der\n' +
      '            ich Flexbox angewendet habe.',
  },
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a className={'list'} href={item.url}>
              Website
            </a>
            <a className={'list'} href={item.repo}>
              Repository
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
