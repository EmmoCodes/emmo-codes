import Sidebar from '../sidebar/Sidebar.jsx'
import './navbar.scss'
import linkedIn from '/public/linkedIn.svg'
import gitHub from '/public/gitHub.svg'
import mail from '/public/mail.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <span></span>
        <div className="social">
          <a onClick={() => (window.location = 'mailto:Gianluca1996@gmx.de')} href="#">
            <img src={mail} alt="" />
          </a>
          <a href="https://github.com/EmmoCodes">
            <img src={gitHub} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/marco-orlandi-46010727a/">
            <img src={linkedIn} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
