import React from 'react';
import About from '../components/about/About'
import Footer from "../components/footer/Footer";
import Portfolio from "../components/portfolio/Portfolio";
import Nav from "../components/nav/Nav";

const PortofolioPage = () => {
    return (
        <div>
            <About />
            <Portfolio />
            <Nav/>
            <Footer />
        </div>
    );
};

export default PortofolioPage;