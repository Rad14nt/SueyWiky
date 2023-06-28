import {
    useState
} from 'react'
import {
    useLocation
} from "react-router-dom";
import {
    TextBox
} from "../components";

const ArticlePage = () => {

    const location = useLocation()

    const [article, setArticle] = useState(location.state.article)

    return <TextBox content={article}/>;
};

export default ArticlePage;
