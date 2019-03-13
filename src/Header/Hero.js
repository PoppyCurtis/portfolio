import React from 'react';
import cover from '../Images/background.JPG';
import NavBar from '../getNavBar/NavBar';
import DrawerToggleButton from '../getNavBar/DrawerToggleButton';
import './Hero.css';
import '../getNavBar/NavBar.css';


const mystyles = {
    backgroundImage: `url(${cover})`,
    height: "100vh",
    backgroundSize: "cover",
};
const Header = props =>  (
            <header style={mystyles}>
                <div >
                    <NavBar/>
                    <DrawerToggleButton className="closed"click={props.drawerClickHandler} />
                </div>
                <div className="container" id="home">
                    <h1>Hi, I'm Penelope Curtis</h1>
                    <h3>London based Full Stack Developer</h3>
                    <a className="button1" href="https://github.com/PoppyCurtis" target="_blank" rel="noopener noreferrer">
                        View Work</a>
                </div>
            </header>
        );
  
export default Header;