import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/FormattinPage';
import VideoTutorials from './pages/VideoTutorials';
import Softwaretools from './pages/softwaretools';
import PortofolioPage from './pages/PortofolioPage';
import FormattingPage from "./pages/FormattinPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortofolioPage />} />
            <Route path="/softwaretools" element={<Softwaretools />} />
            <Route path="/copyright" element={<AboutPage />} />
            <Route path="/videotutorials" element={<VideoTutorials />} />
            <Route path="/formatting" element={<FormattingPage />} />
        </Routes>
    );
};

export default AppRoutes;
