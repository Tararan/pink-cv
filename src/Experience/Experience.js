import React from "react";
import Fade from 'react-reveal';


const Experience = ({ title, description, descriptionList, image }) => {
    return (
      <Fade opposite>
          <section className="Card">
            <h3 className="Card__title">{title}</h3>
            <div className="Card__content">
              <div className="Card__content-description">
                {description.map((item, i) => (
                  <p key={`Experience-${item}${i}1`}>{item}</p>
                ))}
                <ul>
                  {descriptionList.map((item, i) => (
                    <li key={`Experience-${item}${i}1`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="Card__content-image-container">
            <img
              className="Card__content-image"
              src={`${image.replace(/\s/g, "")}w=400&q=50`}
              alt="logo"
            />
            <img
              className="Card__content-image-blurred"
              src={`${image.replace(/\s/g, "")}w=50&q=10`}
              alt="logo"
            />
          </div>
            </div>
          </section>
         </Fade>
      );
}

export default Experience;