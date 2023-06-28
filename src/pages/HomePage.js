import {
    ImageCards
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

    return <ImageCards content={content} articles={articles} />;
};

export default HomePage;
