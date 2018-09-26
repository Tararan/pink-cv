import React, { Component } from "react";
import Particles from "react-particles-js";

import Nav from "./Nav/NavContainer";
import { navContent } from "./Nav/navContent";

/* import Card from "./Card/CardContainer";
import { cardContent } from "./Card/cardContent"; */

import Experience from "./Experience/ExperienceContainer";
import { experienceContent } from "./Experience/experienceContent";


import Education from "./Education/EducationContainer";
import { educationContent } from "./Education/educationContent";

import Summary from "./Summary/SummaryContainer";
import { summaryContent } from "./Summary/summaryContent";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav navContent={navContent} />
        <main className="main">
          <div className="container">
            {/* <Card cardContent={cardContent} /> */}
            <Summary summaryContent={summaryContent} />
            <Experience experienceContent={experienceContent} />
            <Education educationContent={educationContent} />
          </div>
        </main>
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  value_area: 1200
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "star",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                }
              },
              opacity: {
                value: 0.35,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.2604192355117139,
                width: 1
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: true,
                out_mode: "out",
                bounce: true,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 350,
                  size: 2.5,
                  duration: 10,
                  opacity: 1,
                  speed: 6
                },
                repulse: {
                  distance: 200,
                  duration: 2.5
                },
                push: {
                  particles_nb: 8
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
        />
      </div>
    );
  }
}

export default App;
