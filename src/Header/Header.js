import React, { Component } from 'react';
import cover from '../Images/background.JPG';
import './Header.css';

const mystyles = {
    backgroundImage: `url(${cover})`,
    height: "75vh",
    backgroundSize: "cover",
};
class Header extends Component {

    render() {
        return (
            <header style={mystyles}>
                <div className="container">
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.subtitle}</h3>
                    <a className="button1" href="https://github.com/PoppyCurtis" target="_blank">
                    {this.props.button}</a>
                </div>
            </header>
        );
    }
}
export default Header