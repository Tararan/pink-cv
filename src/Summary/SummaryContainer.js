import React, { Component } from "react";
import Summary from "./Summary.js";

import { summaryContent } from "./summaryContent";
import { navContent } from "../Nav/navContent";

import { Element } from 'react-scroll';
 
export default class SummaryContainer extends Component {
  
  render() {
    return (
      <Element
        className={`section section-${navContent[0].listItem[0].replace(/\s/g, "")}`}
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
