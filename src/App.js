import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import PhotoGalleryIOW from './PhotoGalleryIOW.js';
import PhotoGalleryWest from './PhotoGalleryWest';
import information from './Info';
import Home from './Home';

import './App.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/photo-gallery/iow" component={PhotoGalleryIOW} />
          <Route exact path="/photo-gallery/west" component={PhotoGalleryWest} />
          <Route exact path="/photo-gallery" component={information} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
