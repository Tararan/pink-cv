import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Nav from './Nav/NavContainer';
import { navContent } from './Nav/navContent';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav navContent={navContent} />
       <Particles params = {{
         particles: {
           line_linked: {
             shadow: {
               enable: true,
             }
           },
           shape: {
            type: "star",
          }
         }
       }}
       />
      </div>

    );
  }
}

export default App;
