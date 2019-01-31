import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/:photo-gallery" component={PhotoGallery} />
        </div>
      </Router>
    );
  }
}
function PhotoGallery() {
  return (
    <div>
      <h1>Information</h1>
    </div>
  );
}
export default App;
