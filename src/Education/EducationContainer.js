import React from "react";
import Education from "./Education.js";

const EducationContainer = ({ educationContent, navContent }) => {
  return (
    <section
      className="section"
      id={`section-${navContent[0].listItem[2].replace(/\s/g, "")}`}
    >
      <h2 className="title">
      <div className="container">
        <span className="title__section">
          {navContent[0].listItem[2]}
        </span>
        </div>
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
    </section>
  );
};

export default EducationContainer;
