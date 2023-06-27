import React from 'react';
import HomePageGrid from "../components/homepagegrid/HomePageGrid";
import Homepagetitle from "../components/homepagetitle/HomePageTitle";
import IMG1 from "../assets/portfolio1.jpg";

const HomePage = () => {

    const tiles = [
        {
            id: 1,
            image: IMG1,
            title: 'Crypto Currency Dashboard & Financial Visualization',
            github: 'https://github.com',
            demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
        }
    ]

    return (
        <div>
            <Homepagetitle />
            <HomePageGrid props={tiles} />
        </div>
    );
};

export default HomePage;
