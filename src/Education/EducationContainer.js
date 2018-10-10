import React, { Component } from "react";
import Education from "./Education.js";

import {educationContent} from "./educationContent";
import {navContent} from "../Nav/navContent";

import { Element } from 'react-scroll';

export default class EducationContainer extends Component {

  render() {
    return (
    <Element
    className={`section section-${navContent[0].listItem[2].replace(/\s/g, "")}`}
      name={`section-${navContent[0].listItem[2].replace(/\s/g, "")}`}
      // onScroll={this.scrollDetect}
    >
      <h2 className="title">
        <span className="title__section">
          {navContent[0].listItem[2]}
        </span>
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
      <footer className="footer">
        <span>Developed by </span><a className="link" href="https://ivojurisic.com">Ivo Jurišić</a>
      </footer>
    </Element>
  );
};
}
