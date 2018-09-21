import React from "react";
// import Fade from 'react-reveal';

const Card = ({ title, description, descriptionList, image }) => {
    return (
        <main className="main">
            <div class="container">
            {/* <Fade> */}
            <section className="Card">
                <h3 className="Card__title">
                    { title }
                </h3>
                <div className="Card__content">
                    <div className="Card__content-description">
                        { description.map((item, i) => (
                            <p key={`${item}${i}1`}>
                            {item}
                            </p>
                        ))}
                    <ul>
                    { descriptionList.map((item, i) => (
                            <li key={`${item}${i}1`}>
                            {item}
                            </li>
                        ))}    
                    </ul>
                    </div>
                    <div className="Card__content-image-container">
                    {/* src={`${imgDomain}${image.replace(/\s/g, '')}`} */}
                        <img className="Card__content-image" src={`${image.replace(/\s/g, '')}w=400&q=50`} alt="logo" />
                        <img className="Card__content-image-blurred" src={`${image.replace(/\s/g, '')}w=50&q=10`} alt="logo" />
                    </div>
                </div>
            </section>
            {/* </Fade> */}
            </div>
        </main>
    );
}

export default Card;