import React, { Component } from "react";
import { Element } from "react-scroll";

import { summaryContent } from "../Summary/summaryContent";
import { navContent } from "../Nav/navContent";

import Summary from "./Summary.js";

export default class SummaryContainer extends Component {
  render() {
    return (
      <Element
        className="section"
        name={`section-${navContent[0].listItem[0].replace(/\s/g, "")}`}
      >
        <h2 className="title">
            <span className="title__section">{navContent[0].listItem[0]}</span>
          <span className="title__background">{navContent[0].listItem[0]}</span>
        </h2>
        <div className="container">
          {summaryContent.map((user, i) => {
            return (
              <Summary
                key={`SummaryContainer ${i}`}
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
  }
}
