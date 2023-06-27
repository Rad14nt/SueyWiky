import React from 'react';
import './homepagetitle.css';
import OvalImage from '../../assets/oval-image.jpg';

const homePageTitle = () => {
    return (
        <div className="oval-container">
            <div className="oval-content">
                <img className="oval-image" src={OvalImage} alt="Oval" />
                <h1 className="oval-text">Modul M152</h1>
            </div>
        </div>
    );
};

export default homePageTitle;
