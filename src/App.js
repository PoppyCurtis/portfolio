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
      <div>
        <h1 className="title"> The World At Your Footsteps </h1>
        <p> I am a London based technology enthusiast who is 
          passionate about walking, travelling and learning.
          This website has been designed to showcase some of the
          places that I have visited across the UK.
        </p>
        <h2>Gallery</h2>
        <div className="container">
           <img classname="picture" src={IOW} alt="IOW" />
          <img classname="picture" src={dales} alt="dales" />
         <img classname="picture" src={west} alt="west" /> 
          <img classname="picture" src={chilterns} alt="chiltern" />
        </div>

        <div className="container">
        <img classname="picture" src={southwest} alt="south-west" />
          <img classname="picture" src={lakedistrict} alt="lake-district" />
          <img classname="picture" src={london} alt="London" />
          <img classname="picture" src={norfolk} alt="norfolk" />
        </div>
      </div>
    );
  }
}

export default App;
