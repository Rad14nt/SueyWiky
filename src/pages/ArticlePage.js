import {
    useState
} from 'react'
import {
    useLocation
} from "react-router-dom";
import {
    ArticleTexts
} from "../components";

const ArticlePage = () => {

    const location = useLocation()

    const [article, setArticle] = useState(location.state.article)

    return <ArticleTexts content={article}/>;
};

export default ArticlePage;
