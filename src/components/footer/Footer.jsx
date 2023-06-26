import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Link to="/" className='footer__logo'>TBZ M152</Link>

            <ul className='permalinks'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF /></a>
                <a href="https://instagram.com"><FiInstagram /></a>
                <a href="https://twitter.com"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; TBZ. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
