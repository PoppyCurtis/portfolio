import React from 'react';
import { Link } from 'react-router-dom';
import './personalprogress.css';
import getNavBar from './getNavBar';
 
export default function PhotoGalleryIOW() {
  return (
    <div className="professionaldevmaindiv">
    <div>{
       getNavBar()
    }</div>
      <h1 className>Professional Development</h1>
      <p className="text">WIP
      </p>
      <br />
    
      <Link to="/" className="text">Home</Link>
    </div>
  );
}