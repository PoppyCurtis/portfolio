import React from 'react';
import lakedistrict from './Images/lakedistrict.JPG';
import chilterns from './Images/chilterns.JPG';
import southwest from './Images/south west.JPG';
import IOW from './Images/IOW.JPG';
import west from './Images/west.JPG';
import norfolk from './Images/norfolk.JPG';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
           
            <h1 className="title"> The World At Your Footsteps </h1>
            <h2 className="title">About This Page</h2>
            <p className="text"> I am a London based technology enthusiast who is
              passionate about walking, travelling and learning.
              This website has been designed to showcase some of the
              places that I have visited across the UK.
    </p>
            <h2 className="title">Photo Gallery</h2>
            <h3 className="title"> Photos, Tips and Walks from all over the UK.
    </h3>
            <div className="container">
                <Link to="/photo-gallery">
                    <img classname="picture" name="Isle of Wight" src={IOW} alt="IOW" />
                    <h1 className="imgetitle">Isle of Wight</h1>
                </Link>

                <Link to="/photo-gallery">
                    <img classname="picture" name="West Country" src={west} alt="west" />
                    <h1 className="imgetitle">West Country</h1>
                </Link>
                <Link to="/photo-gallery">
                    <img classname="picture" name="Chilterns" src={chilterns} alt="chiltern" />
                    <h1 className="imgetitle">Chilterns</h1>
                </Link>
            </div>
            <div className="container">
                <Link to="/photo-gallery">
                    <img classname="picture" name="South West" src={southwest} alt="south-west" />
                    <h1 className="imgetitle">South West</h1>
                </Link>
                <Link to="/photo-gallery">
                    <img classname="picture" name="Lake District" src={lakedistrict} alt="lake-district" />
                    <h1 className="imgetitle">Lake District</h1>
                </Link>
                <Link to="/photo-gallery">
                    <img classname="picture" name="Norfolk" src={norfolk} alt="norfolk" />
                    <h1 className="imgetitle">East Anglia</h1>
                </Link>
            </div>
        </div>
    );
}
