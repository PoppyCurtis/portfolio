import React, { Component } from 'react';
import lakedistrict from './Images/lakedistrict.JPG';
import dales from './Images/dales.JPG';
import london from './Images/london.PNG';
import chilterns from './Images/chilterns.JPG';
import southwest from './Images/south west.JPG';
import IOW from './Images/IOW.JPG';
import west from './Images/west.JPG';
import norfolk from './Images/norfolk.JPG';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <img src={lakedistrict} alt="lakedistrict" />
        <img src={dales} alt="dales" />
        <img src={london} alt="London"/>
        <img src={chilterns} alt="chilterns"/>
        <img src= {southwest} alt="southwest"/>
        <img src= {IOW} alt="IOW"/>
        <img src= {west} alt="west"/>
        <img src={norfolk} alt="norfolk"/>
      </div>
    );
  }
}

export default App;
