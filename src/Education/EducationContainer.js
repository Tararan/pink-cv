import React from "react";
import Education from "./Education.js";

const EducationContainer = ({ educationContent }) => {
  return educationContent.map((user, i) => {
    return (
      <Education
        title={user.title}
        description={user.description}
        descriptionList={user.descriptionList}
        image={user.image}
      />
    );
  });
};

export default EducationContainer;
