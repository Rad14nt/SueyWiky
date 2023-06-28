import './textbox.css'
import {VscFolderLibrary} from 'react-icons/vsc'
import {Link} from "react-router-dom";

const TextBox = (props) => {

    const { content } = props

    return (
        <section id='about'>
            <h6>Article by: {content.author ?? 'anonymous'}</h6>
            <h5>Everything about...</h5>
            <h2>{content.title}</h2>

            <div className="container text__container">
                <div className="text__content">
                    <div className="text__cards">
                        {content.subjects.map((subject, index) => (
                            <Link
                                key={index}
                                to={"#" + subject.subTitle.replace(' ', '-').toLowerCase()}
                                state={{content: content}}
                            >
                                <article  className='text__card'>
                                    <VscFolderLibrary className='text__icon'/>
                                    <h5>{subject.subTitle}</h5>
                                    <small>{subject.subTextShort}</small>
                                </article>
                            </Link>
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

export default TextBox
