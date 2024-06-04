import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Links from './links/Links.jsx'
import './sidebar.scss'
import ToggleButton from './toggleButton/ToggleButton.jsx'
import Chatbot from '../chatbot/Chatbot.jsx'

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      opacity: 0,
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    window.sessionStorage.setItem('open', JSON.stringify(open))
  }, [open])
  return (
    <>
      <div className={`${open ? 'show' : 'hide'}`}>
        <Chatbot />
      </div>
      <motion.div className={`sidebar`} animate={open ? 'open' : 'closed'}>
        <motion.div className={`${open ? 'show' : 'hide'} bg`} variants={variants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  )
}

export default Sidebar
