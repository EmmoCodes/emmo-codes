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
    x: '-250%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
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
                'Hi there!',
                1000,
                "I'm a Junior Fullstack Developer.",
                1500,
                'I build things for the web.',
                1500,
              ]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
            />
          </motion.div>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" className={`scrollImg`} />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Emmo Codes
      </motion.div>
      <div className="imageContainer"></div>
    </div>
  )
}

export default Hero
