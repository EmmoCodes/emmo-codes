import { useEffect, useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Slideshow } from '../slideshow/Slideshow.jsx'

const items = [
  {
    id: 1,
    url: 'https://vonc-team.de',
    title: 'VONC Beratung',
    img: ['./vonc2.png', './vonc3.png', './vonc4.png'],
    desc: 'A modern, responsive website for wealth consulting – perfectly optimized for all devices. Visitors receive personalized financial advice, can interact directly with an integrated chatbot, and are guided through the content with subtle animations. The site combines professional design with an intuitive and pleasant user experience.',
  },
  {
    id: 2,
    repo: 'https://github.com/EmmoCodes/.mov',
    url: 'https://mov7.netlify.app',
    title: 'Movie Website',
    img: ['./movieAppFirst.png', './movieAppSecond.png', './movieAppThird.png', '/movieAppFourth.png'],
    desc: '.mov is a responsive film platform that delivers an outstanding experience across all devices. Visitors can stream high-quality trailers, mark their favorite movies, and organize them in a personal watchlist. The website blends modern design with intuitive navigation – perfect for everyone who loves movies.',
  },
  // {
  //   id: 3,
  //   repo: 'https://github.com/EmmoCodes/rock_paper_scissors',
  //   url: 'https://emmocodes.github.io/rock_paper_scissors/',
  //   title: 'Schere, Stein, Papier',
  //   img: ['./rockPaperScissor1.png', './rockPaperScissor2.png', './rockPaperScissor3.png'],
  //
  //   desc:
  //     'Das Schere-Stein-Papier-JavaScript-Projekt ist eine unterhaltsame Umsetzung des klassischen Spiels, das\n' +
  //     '            Benutzern ermöglicht, gegen den Computer anzutreten und ihre Fähigkeiten zu testen.',
  // },
  // {
  //   id: 4,
  //   url: 'https://emmocodes.github.io/new_interior/',
  //   repo: 'https://github.com/EmmoCodes/new_interior',
  //   title: 'New Interior',
  //   img: ['./newInterior1.png', './newInterior2.png', './newInterior3.png'],
  //   desc: 'New Interior ist eine voll Responsive Dienstleistungs-Website mit Services, Blog, Customer-Reviews und Kontakt-Formular. Die richtige Mischung aus Modern und Minimalistisch.',
  // },
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
                Website
              </a>

              {item?.repo ? (
                <a className={'btn'} href={item.repo}>
                  Code
                </a>
              ) : null}
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
