import React from "react";
import Education from "./Education.js";
import { Element } from 'react-scroll';

const EducationContainer = ({ educationContent, navContent }) => {
  return (
    <Element
      className="section"
      name={`section-${navContent[0].listItem[2].replace(/\s/g, "")}`}
    >
      <h2 className="title">
        <span className="title__section">
          {navContent[0].listItem[2]}
        </span>
        <span className="title__background">
          {navContent[0].listItem[2]}
      </span>
      </h2>
      <div className="container">
      {educationContent.map((user, i) => {
        return (
          <Education key={`Education ${i}`}
            title={user.title}
            description={user.description}
            descriptionList={user.descriptionList}
            image={user.image}
          />
        );
      })}
      </div>
    </Element>
  );
};

export default EducationContainer;
