import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/FormattinPage';
import VideoTutorials from './pages/VideoTutorials';
import PortofolioPage from './pages/PortofolioPage';
import Softwaretools from './pages/softwaretools';
import Footer from './components/footer/Footer';
import FormattingPage from "./pages/FormattinPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/copyright" element={<AboutPage />} />
                <Route path="/videotutorials" element={<VideoTutorials />} />
                <Route path="/portfolio" element={<PortofolioPage />} />
                <Route path="/softwaretools" element={<Softwaretools />} />
                <Route path="/formatting" element={<FormattingPage />} />

            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
