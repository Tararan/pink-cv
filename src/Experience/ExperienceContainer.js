import React from "react";
import Experience from "./Experience.js";
import { Element } from 'react-scroll';

const ExperienceContainer = ({ experienceContent, navContent }) => {
  return (
    <Element
      className="section"
      name={`section-${navContent[0].listItem[1].replace(/\s/g, "")}`}
    >
      <h2 className="title">
        <span className="title__section">
          {navContent[0].listItem[1]}
        </span>
        <span className="title__background">
          {navContent[0].listItem[1]}
      </span>
      </h2>
      <div className="container">
      {experienceContent.map((user, i) => {
        return (
          <Experience key={`ExperienceContainer ${i}`}
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

export default ExperienceContainer;
