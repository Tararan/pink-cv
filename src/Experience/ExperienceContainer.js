import React, { Component } from "react";
import Experience from "./Experience.js";

import { experienceContent } from "./experienceContent";
import { navContent } from "../Nav/navContent";

import { Element } from 'react-scroll';

export default class ExperienceContainer extends Component {
  render() {
    return (
    <Element
    className={`section section-${navContent[0].listItem[1].replace(/\s/g, "")}`}
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
}