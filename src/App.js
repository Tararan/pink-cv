import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav/NavContainer';
import { navContent } from './Nav/navContent';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav navContent={navContent} />
      </div>
    );
  }
}

export default App;
