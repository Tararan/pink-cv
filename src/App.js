import React, { Component } from "react";
import Particles from "react-particles-js";
import { params } from "./particles/particlesParams";
// import { paramsMobile } from "./particles/particlesParams-mobile";

import Nav from "./Nav/NavContainer";
import { navContent } from "./Nav/navContent";

import Experience from "./Experience/ExperienceContainer";
import { experienceContent } from "./Experience/experienceContent";

import Education from "./Education/EducationContainer";
import { educationContent } from "./Education/educationContent";

import Summary from "./Summary/SummaryContainer";
import { summaryContent } from "./Summary/summaryContent";

import Social from "./Social/SocialContainer";
import { socialContent } from "./Social/socialContent";

window.addEventListener('scroll', (e) => {
  const windowScroll = window.scrollY;
  const windowScrollOffset = window.scrollY + 70;
  console.log(windowScrollOffset);
  const SummaryY = document.getElementsByName(`section-${navContent[0].listItem[0].replace(/\s/g, "")}`);
  const ExperienceY = document.getElementsByName(`section-${navContent[0].listItem[1].replace(/\s/g, "")}`);
  const EducationY = document.getElementsByName(`section-${navContent[0].listItem[2].replace(/\s/g, "")}`);

  const addClass = function (elementName, elementClass) {
    if(elementName === windowScrollOffset) {
      elementName.classList.add(elementClass);
    }
  };
  addClass(SummaryY, 'test');

  // console.log(SummaryY);
  // console.log(SummaryY[0].getBoundingClientRect().top);
   console.log(SummaryY[0].className + ' => ' + SummaryY[0].getBoundingClientRect().top + '=>' + Math.round(SummaryY[0].getBoundingClientRect().top + windowScroll));
  console.log(ExperienceY[0].className + ' => ' + ExperienceY[0].getBoundingClientRect().top + '=>' + Math.round(ExperienceY[0].getBoundingClientRect().top + windowScroll));
  console.log(EducationY[0].className + ' => ' + EducationY[0].getBoundingClientRect().top + '=>' + Math.round(EducationY[0].getBoundingClientRect().top + windowScroll));
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav navContent={navContent} />
        <main className="main">
            <Summary summaryContent={summaryContent} navContent={navContent} />
            <Experience experienceContent={experienceContent} navContent={navContent} />
            <Education educationContent={educationContent} navContent={navContent} />
            <Social socialContent={socialContent} />
        </main>
        <Particles height="100vh" className="particles" params={params} />
        {/* <Particles height="100vh" className="particles particles--mobile" params={paramsMobile} /> */}
      </div>
    );
  }
}

export default App;
