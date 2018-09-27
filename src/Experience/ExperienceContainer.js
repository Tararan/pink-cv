import React from "react";
import Experience from "./Experience.js";

const ExperienceContainer = ({ experienceContent, navContent }) => {
  return (
    <section
      className="section"
      id={`section-${navContent[0].listItem[1].replace(/\s/g, "")}`}
    >
      <h2 className="title">
      <div className="container">
        <span className="title__section">
          {navContent[0].listItem[1]}
        </span>
        </div>
        <span className="title__background">
          {navContent[0].listItem[1]}
      </span>
      </h2>
      <div className="container">
      {experienceContent.map((user, i) => {
        return (
          <Experience
            title={user.title}
            description={user.description}
            descriptionList={user.descriptionList}
            image={user.image}
          />
        );
      })}
      </div>
    </section>
  );
};

export default ExperienceContainer;
