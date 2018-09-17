import React from "react";
import Fade from 'react-reveal';

const Card = ({ title, description, image }) => {
    return (
        <Fade>
        <section className="Card">
            <h3 className="Card__title">
                { title }
            </h3>
            <div className="Card__description">
                { description.map((item, i) => (
                    <p key={`${item}${i}1`}>
                    {item}
                    </p>
                ))}
            </div>
            <div className="Card__image-container">
                <img
                className="Card__image" src={image} alt="logo"
                />
            </div>
        </section>
        </Fade>
    );
}

export default Card;