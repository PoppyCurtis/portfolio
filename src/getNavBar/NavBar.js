import React from 'react';
import './NavBar.css';


        const sections = [{ name: "Home", className: "smoothscroll", href: "#home" }, { name: "About Me", className: "smoothscroll", href: "#about-me" },
        { name: "Skills", className: "smoothscroll", href: "#skills" }, { name: "Projects", className: "smoothscroll", href: "#projects" },
        { name: "Contact", className: "smoothscroll", href: "#contact" }];
        const navLinks = sections.map(section => {
            return (<li><a href={section.href} className={section.name} >
                {section.name}</a></li>);
        })

        const NavBar = () => (
            <nav className="topnav">
                <div className="iconholder">
                    <h7 className="navheading">Penelope Curtis Web Design</h7>
                </div>
                <ul>
                    {navLinks}
                </ul>
            </nav>
        );

       


export default NavBar;