import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import {
    ArticlePage,
    CopyrightPage,
    DisclaimerPage,
    HomePage,
    TeamPage,
    VideoTutorialsPage,
} from './pages';
import {
    Footer,
    Nav
} from './components';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/videotutorials" element={<VideoTutorialsPage />} />


                <Route path="/" element={<HomePage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/article" element={<ArticlePage />} />

                <Route path="/copyright" element={<CopyrightPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />
            </Routes>
            <Nav/>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
