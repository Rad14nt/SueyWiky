import React from 'react';
import Footer from "../components/footer/Footer";
import HomePageGrid from "../components/homepagegrid/homepagegrid";
import Homepagetitle from "../components/homepagetitle/homepagetitle";
import Nav from "../components/nav/Nav";

const HomePage = () => {
    return (
        <div>
            <Homepagetitle />
            <HomePageGrid />
            <Nav/>
            <Footer />
        </div>
    );
};

export default HomePage;