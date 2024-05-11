import Sidebar from '../sidebar/Sidebar.jsx'
import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span></span>
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
