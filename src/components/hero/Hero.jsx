import './hero.scss'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-252%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 30,
    },
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Marco Orlandi</motion.h2>
          <motion.div variants={textVariants} className={`typeAnimation`}>
            <TypeAnimation
              sequence={[
                'Hey du!',
                1000,
                'Ich bin Junior Fullstack Dev.',
                1500,
                "Ich baue Dinge für's Internet.",
                1500,
              ]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
            />
          </motion.div>
          <motion.div variants={textVariants} className="buttons">
            <motion.a href="#Portfolio" variants={textVariants}>
              Meine Projekte
            </motion.a>
            <motion.a href="#Kontakt" variants={textVariants}>
              Kontakt
            </motion.a>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" className={`scrollImg`} />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Orlandi Dev Orlandi Dev
      </motion.div>
    </div>
  )
}

export default Hero
