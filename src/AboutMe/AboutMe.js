import React, { Component } from 'react';
import Poppy from "../Images/me2.JPG";
import './AboutMe.css';

class AboutMe extends Component {

    render() {
        return (
           
                <div className="about-me"  id="about-me">
                  
                    <h1>About Me</h1>
                    <div className="col-left">
                        <img src={Poppy} alt="Poppy Pic" />
                    </div>
                    <div className="col-right">
                     <h2>Penelope Curtis</h2>
                        <h3>My Coding Journey</h3>
                        <p>Before learning how to code, I was working as a Secondary School Teacher in London. As the years
                            passed, I came to realise that I was vocationally oriented to creating new possibilities for others, which inevitably
                            led to my change in career.
                            <br />
                            <br />
                            For the past 6 months I have been learning how to code in JavaScript, ReactJS, CSS, C# and HTML.
                            I have been learning independently and am taking part on a coding Bootcamp run by Kodiri.com. For me coding provides exciting
                            opportunities including creativity and problem-solving.
                            <br />
                            <br />
                            In my spare time I like to travel, go walking and bake.
                            </p>

                       
                        <a className="button" href="https://mindpopping.wordpress.com/"  target="_blank" rel="noopener noreferrer">{this.props.button}</a>
                    </div>
                </div>
     
        );
    }
}
export default AboutMe;

