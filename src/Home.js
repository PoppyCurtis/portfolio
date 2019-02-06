import React from 'react';
import portrait from './Images/poppy.JPG';
import ux from './Images/ux.png';
import chilterns from './Images/backend.png';
import southwest from './Images/database.png';
import IOW from './Images/presentation.png';
import west from './Images/responsive.png';
import cover from './Images/cover.jpg';
import code from './Images/code.png';
import getNavBar from './getNavBar';

export default function Home() {
    return (
        <div>
            <div>{
                getNavBar()
            }</div>
            <div className="container">
                <h1 className="title"> Penelope Curtis </h1>
                <footer className="text"> London based technology enthusiast who is
              passionate about digital transformation,coding and learning.
                <br />
                This website has been designed to exhibit my developments in code.
            </footer>
            </div>
           
            
        </div>
    );


}
