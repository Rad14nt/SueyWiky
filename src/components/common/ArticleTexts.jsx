import './textbox.css';
import { VscFolderLibrary } from 'react-icons/vsc';
import { Link, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { StringToMultiline } from '../../functions';

const ArticleTexts = (props) => {
    const { content } = props;
    const location = useLocation();
    const sectionRef = useRef();

    useEffect(() => {
        const hash = location.hash;
        const sectionElement = sectionRef.current;
        if (hash && sectionElement) {
            const sectionId = hash.substring(1);
            const targetElement = sectionElement.querySelector(`[id="${sectionId}"]`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash]);

    return (
        <section id="about">
            <h6>Article by: {content.author ?? 'anonymous'}</h6>
            <h5>Everything about...</h5>
            <h2>{content.title}</h2>

            <div className="container text__container">
                <div className="text__content">
                    <div className="text__cards">
                        {content.subjects.map((subject, index) => (
                            <Link
                                key={index}
                                to={{ pathname: location.pathname, hash: `#${subject.subTitle.replace(/\s+/g, '-').toLowerCase()}` }}
                            >
                                <article className="text__card">
                                    <VscFolderLibrary className="text__icon" />
                                    <h5>{subject.subTitle}</h5>
                                    <small>{subject.subTextShort}</small>
                                </article>
                            </Link>
                        ))}
                    </div>

                    <div className="text__text-area" ref={sectionRef}>
                        {content.subjects.map((subject, index) => (
                            <div key={index} id={subject.subTitle.replace(/\s+/g, '-').toLowerCase()}>
                                <h3>{subject.subTitle}</h3>
                                <StringToMultiline text={subject.subTextLong} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticleTexts;
