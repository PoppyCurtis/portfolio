import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import WorkSamples from './WorkSamples/WorkSamples.js';
import getNavBar from './getNavBar/getNavBar.js';
import Home from './Home';
import AboutMe from './AboutMe/AboutMe.js';

import './App.css';



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            {getNavBar}
          </div>
          <div>
            {Home()}
          </div>
          <div>
          {AboutMe()}
          </div>
          <div>
            {WorkSamples()}
          </div>
        </div>


      </HashRouter>
    );
  }
}

export default App;
