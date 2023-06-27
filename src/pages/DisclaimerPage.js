import React from 'react';
import TextBox from "../components/common/TextBox";

const DisclaimerPage = () => {

    const content = {
        title: "Disclaimer",
        subjects: [
            {
                subTitle: "1.",
                subTextShort: "Our responsibility",
                subTextLong: "The information published on this website was carefully compiled and prepared. Nethertheless, SueyWiky does not take any responsibility for its accuracy or completeness."
            },
            {
                subTitle: "2.",
                subTextShort: "Third party services",
                subTextLong: "SueyWiky does not check any third-party database or website that are connected in any form to this website, e.g. links or images, and takes no responsibility for any texts, media services, advertisements or other content published on such sites. The same also applies in reverse."
            },
            {
                subTitle: "3.",
                subTextShort: "Contact us!",
                subTextLong: "If you were to discover any errors or false information on this wiki, feel free to inform us by e-mail to invalid@mail.com\n" +
                    "This website - and all content* coming along with it - generally are opensource; meaning free of any copyright.\n" +
                    "*videos excluded"
            }
        ]
    }

    return (
        <div>
            <TextBox content={content}/>
        </div>
    );
};

export default DisclaimerPage;
