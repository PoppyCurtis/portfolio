import React from 'react';
import { Link } from 'react-router-dom';
import './personalprogress.css';


export default function ProfessionalDevelopment() {
  return (
    <div className="maindiv">
     
      <h1 className="profdevtitle">Professional Development</h1>
      <div className="imgcontainer">
       <div>
         Training
       </div>
       <div>
         Books
       </div>
       <div>
         Online Tutorials
       </div>
      </div>
      <br />

      <Link to="/" className="text">Home</Link>
    </div>
  );
}
