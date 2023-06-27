import React from 'react'
import './textbox.css'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = (props) => {

    const { content } = props

    return (
        <section id='about'>
            <h5>Everything about...</h5>
            <h2>{content.title}</h2>

            <div className="container text__container">
                <div className="text__content">
                    <div className="text__cards">
                        {content.subjects.map((subject, index) => (
                            <a key={index} href={"#" + subject.subTitle.replace(' ', '-').toLowerCase()}>
                                <article  className='text__card'>
                                    <VscFolderLibrary className='text__icon'/>
                                    <h5>{subject.subTitle}</h5>
                                    <small>{subject.subTextShort}</small>
                                </article>
                            </a>
                        ))}
                    </div>

                    <div className="text__text-area">
                        {content.subjects.map((subject, index) => (
                            <div key={index} className="" id={subject.subTitle.replace(' ', '-').toLowerCase()}>
                                <h3>{subject.subTitle}</h3>
                                {subject.subTextLong.split('\n').map((line, index) =>
                                    <p key={index}>{line}</p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
