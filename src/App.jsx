import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/FormattinPage';
import VideoTutorialsPage from './pages/VideoTutorialsPage';
import AboutUsPage from './pages/AboutUsPage';
import SoftwareToolsPage from './pages/SoftwareToolsPage';
import Footer from './components/footer/Footer';
import FormattingPage from "./pages/FormattinPage";
import CopyrightPage from "./pages/Copyright";
import Nav from "./components/nav/Nav";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/videotutorials" element={<VideoTutorialsPage />} />
                <Route path="/copyright" element={<CopyrightPage />} />
                <Route path="/softwaretools" element={<SoftwareToolsPage />} />
                <Route path="/formatting" element={<FormattingPage />} />
            </Routes>
            <Nav/>
            <Footer />
        </Router>
    );
};

export default App;
