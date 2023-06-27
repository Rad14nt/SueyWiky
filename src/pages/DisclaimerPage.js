import React from 'react';
import TextBox from "../components/common/TextBox";

const DisclaimerPage = () => {

    //TODO: Export
    const content = {
        title: "Disclaimer",
        subjects: [
            {
                subTitle: "Our responsibility",
                subTextShort: "",
                subTextLong: "The information published on this website was carefully compiled and prepared. Nethertheless, SueyWiky does not take any responsibility for its accuracy or completeness."
            },
            {
                subTitle: "Third party services",
                subTextShort: "",
                subTextLong: "SueyWiky does not check any third-party database or website that are connected in any form to this website, e.g. links or images, and takes no responsibility for any texts, media services, advertisements or other content published on such sites. The same also applies in reverse."
            },
            {
                subTitle: "Contact us!",
                subTextShort: "",
                subTextLong: "If you were to discover any errors or false information on this wiki, feel free to inform us by e-mail to invalid@mail.com\n" +
                    "This website - and all content, except our videos, coming along with it - generally are opensource; meaning free of any copyright."
            }
        ]
    }

    return <TextBox content={content}/>;
};

export default DisclaimerPage;
