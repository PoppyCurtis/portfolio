import React, { Component } from 'react';
import kodflix from '../Images/kodflix.JPG';
import proj2 from '../Images/8daysaweek.JPG';
import './WorkSamples.css';

const mystyles = {
    backgroundImage: `url(${kodflix})`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
};
const mystyles2 = {
    backgroundImage: `url(${proj2})`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
};
class WorkSamples extends Component {
    render() {
        return (
            <div className="worksamples" id="projects">
                <h1>Work Samples of Code Projects</h1>
                <div>
                <div className="project1" style={mystyles}>
                    <div className="overlay">
                        <a href="https://kodflix-poppy.herokuapp.com/" target="_blank" rel="noopener noreferrer">Kodflix</a>
                    </div>
                </div>
                <div className="project2" style={mystyles2}>
                    <div className="overlay">
                        <a href="https://kodiri.github.io/8-days-a-week/#/" target="_blank" rel="noopener noreferrer">8 days a week</a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default WorkSamples;