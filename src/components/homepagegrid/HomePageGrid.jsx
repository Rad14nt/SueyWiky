import React from 'react';

const HomePageGrid = (props) => {

    const { content } = props

    return (
        <div className="grid-container">
            <button className="grid-button">
                <img src="image-url" alt="Description" />
                <span>Button Text</span>
            </button>

            {/*{content.map((tile, index) =>*/}
            {/*    <button key={index} className="grid-button">*/}
            {/*        <img src="image-url" alt="Description" />*/}
            {/*        <span>Button Text</span>*/}
            {/*    </button>*/}
            {/*)}*/}

        </div>
    );
};

export default HomePageGrid;
