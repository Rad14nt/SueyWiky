import React from 'react'
import './textbox.css'
import {Link} from "react-router-dom";

const ImageBoxWithText = (props) => {

    const { articles, content } = props

    return (
        <section id='portfolio'>
            <h5>{content.subtitle}</h5>
            <h1>{content.title}</h1>

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
                                    <Link to="/article" state={{article:articles[--id]}} className="btn btn-primary">
                                        {content.buttonText}
                                    </Link>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ImageBoxWithText
