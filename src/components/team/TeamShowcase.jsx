import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {StringToMultiline} from "../../functions";

const TeamShowcase = (props) => {

    const {members} = props

    console.log(members)

    return (
        <>
            {members.map((member, index) => (
                <section key={index} id='about'>
                    <h5>{member.desc}</h5>
                    <h2>{member.name}</h2>

                    <div className="container about__container">
                        <div className="about__me">
                            <div className="about__me-image">
                                <img src={ME} alt="About Image"/>
                            </div>
                        </div>

                        <div className="about__content">
                            <div className="about__cards">
                                {member.subjects.map((subject, index) => (
                                    <article key={index} className='about__card'>
                                        <FaAward className='about__icon'/>
                                        <h5>{subject.subTitle}</h5>
                                        <small>{subject.subText}</small>
                                    </article>
                                ))}
                            </div>

                            <StringToMultiline text={member.text} />

                            // TODO: Change this to some sort of video thingy.
                            // Maybe include this slide thingy from a deleted
                            // commit, which was used in, I think, testimonials.
                            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}

export default TeamShowcase
