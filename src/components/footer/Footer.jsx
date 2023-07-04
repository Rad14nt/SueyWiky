import React, {useState} from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Footer = () => {
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
        <footer>
            <Link to="/" className="footer__logo">
                TBZ M152
            </Link>

            <ul className="permalinks">
                <li>
                    <Link to="/" onClick={() => scrollToTop('/')} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/team" onClick={() => scrollToTop('team')} >
                        Team
                    </Link>
                </li>
                <li>
                    <Link to="/copyright" onClick={() => scrollToTop('copyright')} >
                        Legal Notice
                    </Link>
                </li>
                <li>
                    <Link to="/disclaimer" onClick={() => scrollToTop('disclaimer')} >
                        Disclaimer
                    </Link>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com">
                    <FaFacebookF />
                </a>
                <a href="https://instagram.com">
                    <FiInstagram />
                </a>
                <a href="https://twitter.com">
                    <IoLogoTwitter />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; TBZ. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
