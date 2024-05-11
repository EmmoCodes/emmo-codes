import Sidebar from '../sidebar/Sidebar.jsx'
import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          Emmo Codes
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/public/mail.svg" alt="" />
          </a>
          <a href="#">
            <img src="/public/gitHub.svg" alt="" />
          </a>
          <a href="#">
            <img src="/public/linkedIn.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
