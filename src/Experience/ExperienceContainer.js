import React from "react";
import Experience from "./Experience.js";

const ExperienceContainer = ({ experienceContent }) => {
  return experienceContent.map((user, i) => {
    return (
      <Experience
        title={user.title}
        description={user.description}
        descriptionList={user.descriptionList}
        image={user.image}
      />
    );
  });
};

export default ExperienceContainer;
