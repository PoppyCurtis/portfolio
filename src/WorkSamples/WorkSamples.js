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
                <h3>Projects</h3>
                <h2>Work Samples of Code Projects</h2>
                <div className="project1" style={mystyles}>
                    <div className="overlay">
                        <a href="https://kodflix-poppy.herokuapp.com/" target="_blank">Kodflix</a>
                    </div>
                </div>
                <div className="project2" style={mystyles2}>
                    <div className="overlay">
                        <a href="https://kodiri.github.io/8-days-a-week/#/" target="_blank">8 days a week</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkSamples;