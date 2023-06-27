import React from 'react';
import {
    BrowserRouter as Router,
    Routes, Route
} from 'react-router-dom';
import {
    AboutUsPage,
    CopyrightPage,
    DisclaimerPage,
    FormattingPage,
    HomePage,
    SoftwareToolsPage,
    VideoTutorialsPage,
} from './pages';
import {
    Footer,
    Nav
} from './components';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/videotutorials" element={<VideoTutorialsPage />} />
                <Route path="/copyright" element={<CopyrightPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />
                <Route path="/softwaretools" element={<SoftwareToolsPage />} />
                <Route path="/formatting" element={<FormattingPage />} />
            </Routes>
            <Nav/>
            <Footer />
        </Router>
    );
};

export default App;
