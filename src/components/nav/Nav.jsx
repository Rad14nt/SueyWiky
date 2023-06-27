import {
    React,
    useState
} from 'react'
import './nav.css'
import {
    BiCopyright,
    BiHomeAlt,
    BiInfoCircle,
    BiUserCircle
} from 'react-icons/bi'

const Nav = () => {

    const [activeNav, setActiveNav] = useState('')

    return (
        <nav>
            <a href="/" onClick={() => setActiveNav('/')}
               className={activeNav === '/' ? 'active' : ''}>
                <BiHomeAlt/>
            </a>

            <a href="aboutus" onClick={() => setActiveNav('aboutus')}
               className={activeNav === 'aboutus' ? 'active' : ''}>
                <BiUserCircle/>
            </a>

            <a href="copyright" onClick={() => setActiveNav('copyright')}
               className={activeNav === 'copyright' ? 'active' : ''}>
                <BiCopyright/>
            </a>

            <a href="disclaimer" onClick={() => setActiveNav('disclaimer')}
               className={activeNav === 'disclaimer' ? 'active' : ''}>
                <BiInfoCircle/>
            </a>
        </nav>
    )
}

export default Nav
