import React from 'react';
import TextBox from "../components/common/TextBox";

const CopyrightPage = () => {

    const content = {
        title: "Legal Notice",
        subjects: [
            {
                subTitle: "Contact",
                subTextShort: "SueyWiky - GitHub Alley 420",
                subTextLong: "SueyWiky GitHub-Alley 420 GH-6969 Internet invalid@mail.com"
            },
            {
                subTitle: "Our purpose",
                subTextShort: "Improve general knowledge",
                subTextLong: "SueyWiky aims to improve the public's general knowledge about different forms of digital media, their details, when and where to use them and especially: How to create them.\n" +
                    "Our primary objective is to explore the - now more than ever - ginourmous world of media file- types, addressing (almost) everything from texts and images to audio and vidoes. By documenting all kinds of relevant and/or interesting information one could possibly find on the internet on their own, we faciliate all of that endless searching.\n" +
                    "Our Wiky serves as a hub for students, professors, normal people, strange people & more, who are passionate to learn more about the world of media, its diversity in different file types and how to integrate and create them in their own projects!\n" +
                    "Join us - SueyWiky - on this exciting journey!"
            },
            {
                subTitle: "Privacy policy",
                subTextShort: "No data collection!",
                subTextLong: "SueyWiky does not collect and/or send any user data."
            }
        ]
    }

    return (
        <div>
            <TextBox content={content}/>
        </div>
    );
};

export default CopyrightPage;
