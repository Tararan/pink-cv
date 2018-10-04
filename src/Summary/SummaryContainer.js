import React, { Component } from "react";
import Summary from "./Summary.js";
import { Element } from 'react-scroll';
// import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

import { summaryContent } from "../Summary/summaryContent";
import { navContent } from "../Nav/navContent";

// var Scroll = require('react-scroll');
// var Element = Scroll.Element;

// const SummaryContainer = ({ summaryContent, navContent }) => {
  export default class SummaryContainer extends Component {

  render() {
    return (
    <Element
      className="section"
      name={`section-${navContent[0].listItem[0].replace(/\s/g, "")}`}
      // id={`section-${navContent[0].listItem[0].replace(/\s/g, "")}`}
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
    </Element>
  );
};
}
// };

// export default SummaryContainer;
