import { useEffect, useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Slideshow } from '../slideshow/Slideshow.jsx'

const items = [
  {
    id: 1,
    repo: 'https://github.com/EmmoCodes/instagram_mockup_frontend',
    url: 'https://fakestagram.onrender.com/register',
    title: 'Soziales Netzwerk',
    img: ['./toktok4.png', './toktok2.png', './toktok3.png', './toktok1.png'],
    desc: 'Eine Webseite im Mobiledesign (iPhone12 Pro), um Fotos zu posten, zu kommentieren, zu "liken" und Lieblingsfotos von Freunden zu speichern.',
  },
  {
    id: 2,
    repo: 'https://github.com/EmmoCodes/movie_app',
    url: 'https://njetflix.netlify.app/',
    title: 'Film Webseite',
    img: ['./movieApp1.png', './movieApp2.png', './movieApp3.png', './movieApp4.png'],
    desc:
      'Eine Webseite in MacBook13" und iPhone XR resolution, zu Film und Seriensuche für Interessenten. Favoriten\n' +
      '            können gespeichert, verwaltet und Trailer angesehen werden.',
  },
  {
    id: 3,
    repo: 'https://github.com/EmmoCodes/rock_paper_scissors',
    url: 'https://emmocodes.github.io/rock_paper_scissors/',
    title: 'Schere, Stein, Papier',
    img: ['./rockPaperScissor1.png', './rockPaperScissor2.png', './rockPaperScissor3.png'],

    desc:
      'Das Schere-Stein-Papier-JavaScript-Projekt ist eine unterhaltsame Umsetzung des klassischen Spiels, das\n' +
      '            Benutzern ermöglicht, gegen den Computer anzutreten und ihre Fähigkeiten zu testen.',
  },
  {
    id: 4,
    url: 'https://emmocodes.github.io/new_interior/',
    repo: 'https://github.com/EmmoCodes/new_interior',
    title: 'New Interior',
    img: ['./newInterior1.png', './newInterior2.png', './newInterior3.png'],
    desc:
      'Eine Mode-Webseite in MacBook 13", iPad Air und iPhone XR Auflösung. Meine erste Responsive Website in der\n' +
      '            ich Flexbox angewendet habe.',
  },
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  useEffect(() => {}, [item.title])

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className={`imageContainer ${item.title.toLocaleLowerCase()}`} ref={ref}>
            {/*<img src={item.img} alt="" />*/}
            <Slideshow item={item} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className={`btnContainer`}>
              <a className={'btn'} href={item.url}>
                Webseite
              </a>
              <a className={'btn'} href={item.repo}>
                Code
              </a>
            </div>
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
        <h1>Portfolio</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
