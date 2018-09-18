import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Nav from './Nav/NavContainer';
import { navContent } from './Nav/navContent';

import Card from './Card/CardContainer';
import { cardContent } from './Card/cardContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav navContent={navContent} />
        <Card cardContent={cardContent} />
        <Particles className="particles" params={
          {
            "particles": {
              "number": {
                "value": 20,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "star",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 4,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.2604192355117139,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 0.5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "bubble"
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 350,
                  "size": 6,
                  "duration": 10,
                  "opacity": 0.4,
                  "speed": 6
                },
                "repulse": {
                  "distance": 200,
                  "duration": 2.5
                },
                "push": {
                  "particles_nb": 8
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true }} />
      </div>

    );
  }
}

export default App;
