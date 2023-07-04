import { useState } from 'react';
import './nav.css';
import { BiCopyright, BiHomeAlt, BiInfoCircle, BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Nav = () => {
    const scrollToTop = (activeNav) => {
        setActiveNav(activeNav)
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 2000, // 2 seconds
        });
    };

    const [activeNav, setActiveNav] = useState('');

    return (
        <nav>
            <Link to="/" onClick={() => scrollToTop('/')} className={activeNav === '/' ? 'active' : ''}>
                <BiHomeAlt />
            </Link>

            <Link to="team" onClick={() => scrollToTop('team')} className={activeNav === 'team' ? 'active' : ''}>
                <BiUserCircle />
            </Link>

            <Link
                to="copyright"
                onClick={() => scrollToTop('copyright')}
                className={activeNav === 'copyright' ? 'active' : ''}
            >
                <BiCopyright />
            </Link>

            <Link
                to="disclaimer"
                onClick={() => scrollToTop('disclaimer')}
                className={activeNav === 'disclaimer' ? 'active' : ''}
            >
                <BiInfoCircle />
            </Link>
        </nav>
    );
};

export default Nav;
