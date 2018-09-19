import React from "react";
import Fade from 'react-reveal';

const Card = ({ title, description, image }) => {
    return (
        <main className="main">
            <div class="container">
            <Fade>
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
                    </div>
                    <div className="Card__content-image-container">
                        <img className="Card__content-image" src={image} alt="logo" />
                        <img className="Card__content-image-blurred" src={image} alt="logo" />
                    </div>
                </div>
            </section>
            </Fade>
            </div>
        </main>
    );
}

export default Card;