import React from "react";
import Summary from "./Summary.js";

const SummaryContainer = ({ summaryContent }) => {
  return summaryContent.map((user, i) => {
    return (
      <Summary
        title={user.title}
        description={user.description}
        descriptionList={user.descriptionList}
        image={user.image}
      />
    );
  });
};

export default SummaryContainer;
