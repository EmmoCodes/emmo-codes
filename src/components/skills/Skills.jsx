import { useRef } from 'react'
import './skills.scss'
import { motion, useInView } from 'framer-motion'
import people from '/public/people.webp'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const frontend = ['HTML', 'CSS', 'JavaScript', 'React.js', 'SASS', 'Tailwind']
const backend = ['Express.js', 'Node.js', 'MongoDB']
const tools = ['EsLint', 'Figma', 'Git', 'GitHub', 'MaterialUI', 'FramerMotion', 'Postman', 'Trello', 'Webstorm']

const Skills = () => {
  const ref = useRef()

  const isInView = useInView(ref, { margin: '-100px' })

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={'animate'}>
      <motion.div className="textContainer" variants={variants}>
        <p>Skills & Tools</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={people} alt="" />
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h2>Frontend</h2>
          <div className={`list`}>
            {frontend.map(item => (
              <p>{item}</p>
            ))}
          </div>
        </motion.div>
        <motion.div className="box">
          <h2>Backend</h2>
          <div className={`list`}>
            {backend.map(item => (
              <p>{item}</p>
            ))}
          </div>
        </motion.div>
        <motion.div className="box">
          <h2>Tools</h2>
          <div className={`list`}>
            {tools.map(item => (
              <p>{item}</p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills
