import {articles} from "../models";
import {useLocation} from "react-router-dom";
import {TextBox} from "../components";

const ArticlePage = () => {

    const location = useLocation()

    const { article } = articles.find(({ id }) => id === location.state.id);

    return <TextBox content={article}/>;
};

export default ArticlePage;
