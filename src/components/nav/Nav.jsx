import {
    useState
} from 'react'
import './nav.css'
import {
    BiCopyright,
    BiHomeAlt,
    BiInfoCircle,
    BiUserCircle
} from 'react-icons/bi'
import {Link} from "react-router-dom";

const Nav = () => {

    const [activeNav, setActiveNav] = useState('')

    return (
        <nav>
            <Link to="/" onClick={() => setActiveNav('/')}
               className={activeNav === '/' ? 'active' : ''}>
                <BiHomeAlt/>
            </Link>

            <Link to="about" onClick={() => setActiveNav('about')}
               className={activeNav === 'about' ? 'active' : ''}>
                <BiUserCircle/>
            </Link>

            <Link to="copyright" onClick={() => setActiveNav('copyright')}
               className={activeNav === 'copyright' ? 'active' : ''}>
                <BiCopyright/>
            </Link>

            <Link to="disclaimer" onClick={() => setActiveNav('disclaimer')}
               className={activeNav === 'disclaimer' ? 'active' : ''}>
                <BiInfoCircle/>
            </Link>
        </nav>
    )
}

export default Nav
