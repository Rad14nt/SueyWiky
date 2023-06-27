import {
  React,
  useState
} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {
  BiMessageSquareDetail,
  BiBook,
  BiCopyright,
  BiInfoCircle
} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('')
  return (
    <nav>
      <a href="home" onClick={() => setActiveNav('home')} className={activeNav === 'home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="aboutus" onClick={() => setActiveNav('aboutus')} className={activeNav === 'aboutus' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="videotutorials" onClick={() => setActiveNav('videotutorials')} className={activeNav === 'videotutorials' ? 'active' : ''}><BiBook/></a>
        <a href="softwaretools" onClick={() => setActiveNav('softwaretools')} className={activeNav === 'softwaretools' ? 'active' : ''}><RiServiceLine/></a>
        <a href="formatting" onClick={() => setActiveNav('formatting')} className={activeNav === 'formatting' ? 'active' : ''}><BiMessageSquareDetail/></a>

        <a href="copyright" onClick={() => setActiveNav('copyright')} className={activeNav === 'copyright' ? 'active' : ''}><BiCopyright/></a>
        <a href="disclaimer" onClick={() => setActiveNav('disclaimer')} className={activeNav === 'disclaimer' ? 'active' : ''}><BiInfoCircle/></a>
    </nav>
  )
}

export default Nav
