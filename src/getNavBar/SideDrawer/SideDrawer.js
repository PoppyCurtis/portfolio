import React from 'react';
import DrawerToggleButton from '../DrawerToggleButton';
import './SideDrawer.css';

const sidesections = [{ id: "Home", className: "smoothscroll", href: "#home" }, { id: "About Me", className: "smoothscroll", href: "#about-me" },
{ id: "Skills", className: "smoothscroll", href: "#skills" }, { id: "Projects", className: "smoothscroll", href: "#projects" },
{ id: "Contact", className: "smoothscroll", href: "#contact" }];
const sideLinks = sidesections.map(section => {
    return (<li><a href={section.href} className={section.id} >
        {section.id}</a></li>);
})

const sideDrawer = props => (
    <nav className="side-drawer">
       
        <ul> <div>
            </div>
            {sideLinks}
         
        </ul>
    </nav>
);

export default sideDrawer;