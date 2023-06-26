import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('')
  return (
    <nav>
      <a href="portfolio" onClick={() => setActiveNav('portfolio')} className={activeNav === 'portfolio' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="videotutorials" onClick={() => setActiveNav('videotutorials')} className={activeNav === 'videotutorials' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="softwaretools" onClick={() => setActiveNav('softwaretools')} className={activeNav === 'softwaretools' ? 'active' : ''}><RiServiceLine/></a>
      <a href="formatting" onClick={() => setActiveNav('formatting')} className={activeNav === 'formatting' ? 'active' : ''}><BiMessageSquareDetail/></a>
        <a href="copyright" onClick={() => setActiveNav('copyright')} className={activeNav === 'copyright' ? 'active' : ''}><BiBook/></a>

    </nav>
  )
}

export default Nav