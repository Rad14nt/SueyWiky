import {articles, copyrightContent} from "../models";
import {useLocation} from "react-router-dom";
import {TextBox} from "../components";

const ArticlePage = () => {

    const location = useLocation()

    // TODO: Fix this mess.
    // Maybe implement article component?
    // Maybe just use a different router way
    // No idea abt how react works.
    return <TextBox content={articles[location.state.id - 1]}/>;
};

export default ArticlePage;
