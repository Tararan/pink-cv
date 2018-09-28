import React from "react";
import Summary from "./Summary.js";

const SummaryContainer = ({ summaryContent, navContent }) => {
  return (
    <section
      className="section"
      id={`section-${navContent[0].listItem[0].replace(/\s/g, "")}`}
    >
      <h2 className="title">
      <div className="container">
        <span className="title__section">
          {navContent[0].listItem[0]}
        </span>
        </div>
        <span className="title__background">
          {navContent[0].listItem[0]}
      </span>
      </h2>
      <div className="container">
      {summaryContent.map((user, i) => {
        return (
          <Summary key={`SummaryContainer ${i}`}
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

export default SummaryContainer;
