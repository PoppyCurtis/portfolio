import React from 'react';
import './getNavBar.css';
import { Link } from 'react-router-dom';


export default function getNavBar() {
    return (
        <div className="nav">
            <ul>
                <li><Link to="/photo-gallery/iow">
                    <div className="navheading">
                        Professional Development
                </div></Link></li>
                <li><a href="news.asp"><div className="navheading">
                    Work Samples
                </div></a></li>
                <li><a href="contact.asp"><div className="navheading">
                    Skills
                </div></a></li>
                <li><a href="about.asp"><div className="navheading">
                    Contact
                </div></a></li>
            </ul>
        </div>
    );
}