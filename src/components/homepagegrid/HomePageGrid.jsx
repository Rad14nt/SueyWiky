import {
    React,
    useState
} from 'react';
import {BiHomeAlt} from "react-icons/bi";
import {Link} from "react-router-dom";
import {articles} from "../../models";

const HomePageGrid = () => {

    return (
        <section id='portfolio'>
            <h5>A wiki for media-creators</h5>
            <h1>SueyWiky</h1>

            <div className="container portfolio__container">
                {
                    articles.map(({id, image, title}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <Link to="/article" state={{id:id}} className="btn btn-primary">
                                        To the article!
                                    </Link>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default HomePageGrid;
