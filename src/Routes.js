import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    HomePage,
    FormattingPage,
    VideoTutorialsPage,
    SoftwareToolsPage,
    AboutUsPage,
    CopyrightPage,
    DisclaimerPage,
} from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/videotutorials" element={<VideoTutorialsPage />} />
            <Route path="/copyright" element={<CopyrightPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/softwaretools" element={<SoftwareToolsPage />} />
            <Route path="/formatting" element={<FormattingPage />} />
        </Routes>
    );
};

export default AppRoutes;
