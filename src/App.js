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
  const SummaryY = document.getElementsByName(`section-${navContent[0].listItem[0].replace(/\s/g, "")}`)[0];
  const ExperienceY = document.getElementsByName(`section-${navContent[0].listItem[1].replace(/\s/g, "")}`)[0];
  const EducationY = document.getElementsByName(`section-${navContent[0].listItem[2].replace(/\s/g, "")}`)[0];
 
  const SummaryYHeight = SummaryY.clientHeight;
  const ExperienceYHeight = ExperienceY.clientHeight;
  const EducationYHeight = EducationY.clientHeight;
  
  const SummaryYTop = Math.round(SummaryY.getBoundingClientRect().top + windowScroll);
  const ExperienceYTop = Math.round(ExperienceY.getBoundingClientRect().top + windowScroll);
  const EducationYTop = Math.round(EducationY.getBoundingClientRect().top + windowScroll);

  const SummaryYBottom = SummaryYTop + SummaryYHeight;
  const ExperienceYBottom = ExperienceYTop + ExperienceYHeight;
  const EducationYBottom = EducationYTop + EducationYHeight;

  const checkPos = function (elementPos, element) {
    if(windowScrollOffset ===  elementPos) {
      console.log('==> Scrolled to the top of ' + element);
      // SummaryY.classList.add('test');
    };
  };

   checkPos(SummaryYTop, SummaryY);

  // console.log(SummaryY);
  // console.log(SummaryY[0].getBoundingClientRect().top);
  console.log(SummaryY.className + ' ==> ' + SummaryYTop + ' Height: ' + SummaryYHeight + ' || Bottom point:' + SummaryYBottom);
  console.log(ExperienceY.className + ' ==> ' + ExperienceYTop + ' Height: ' + ExperienceYHeight + ' || Bottom point:' + ExperienceYBottom);
  console.log(EducationY.className + ' ==> ' + EducationYTop + ' Height: ' + EducationYHeight + ' || Bottom point:' + EducationYBottom);
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
