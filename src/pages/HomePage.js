import {
    ImageBoxWithText
} from "../components";
import {
    articles
} from "../models";

const HomePage = () => {

    const content = {
        "subtitle": "A wiki for media-creators",
        "title": "SueyWiky",
        "buttonText": "To the article!",
    }

    return <ImageBoxWithText content={content} articles={articles} />;
};

export default HomePage;
