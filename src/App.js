import React, { Component } from "react";
import Particles from "react-particles-js";
import { params } from "./particlesParams";

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
        <Particles className="particles" params={params} />
      </div>
    );
  }
}

export default App;
