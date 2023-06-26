import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/FormattinPage';
import VideoTutorialsPage from './pages/VideoTutorialsPage';
import SoftwareToolsPage from './pages/SoftwareToolsPage';
import AboutUsPage from './pages/AboutUsPage';
import FormattingPage from "./pages/FormattinPage";
import CopyrightPage from "./pages/Copyright";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/videotutorials" element={<VideoTutorialsPage />} />
            <Route path="/copyright" element={<CopyrightPage />} />
            <Route path="/softwaretools" element={<SoftwareToolsPage />} />
            <Route path="/formatting" element={<FormattingPage />} />
        </Routes>
    );
};

export default AppRoutes;
