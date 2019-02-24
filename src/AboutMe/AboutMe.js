import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Poppy from "../Images/me2.JPG";
import './AboutMe.css';

class AboutMe extends Component {

    render() {
        return (
            <HashRouter>
                <div className="about-me">
                    <Route exact path="#/about-me" component={AboutMe} />
                    <h1>About Me</h1>
                    <div className="col-left">
                        <img src={Poppy} alt="Poppy Pic" />
                    </div>
                    <div className="col-right">
                     <h2>Penelope Curtis</h2>
                        <h3>My Coding Journey</h3>
                        <p>Before learning how to code, I was working as a Secondary School Teacher in London. Whilst working as a Special Educational Needs teacher, I began
                            to witness the power of technology on a firsthand basis. In particular, I was captivated by how tools such as applications,
                            iPads and websites could enhance a person's ability to communicate. As the years
                            passed I came to realise that I was vocationally oriented to creating new possibilities for others, which inevitably
                            led to my change in career.
                            <br />
                            <br />
                            For the past 6 months I have been learning how to code in JavaScript, ReactJS, CSS, C# and HTML.
                            I have been learning independently and am taking part on a coding Bootcamp run by Kodiri.com. For me coding provides exciting
                            opportunities including creativity and problem-solving.
                            </p>
                        <h3>Professional Development</h3>
                        <p>Over the past 6 months I have been commited to learning how to code. The first phase of my coding journey was self-taught. I started by
                           completing numerous online tutorials by providers such as Udemy, PluralSight and Microsoft Virtual Academy. Since January 2019 I have been learning on
                           at a coding Bootcamp in Bermondsey with a focus on JavaScript.
                        </p>
                        <a className="button" href="https://mindpopping.wordpress.com/"  target="_blank">{this.props.button}</a>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
export default AboutMe;

