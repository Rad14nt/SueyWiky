import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArticleTexts } from '../components';

const ArticlePage = () => {
    const location = useLocation();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        if (location.state && location.state.article) {
            setArticle(location.state.article);
        }
    }, [location.state]);

    return article ? <ArticleTexts content={article} /> : null;
};

export default ArticlePage;
