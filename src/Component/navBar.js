import React from "react";
import './navBar.css';

const NavBar=()=>{
    return (
        <div className="nav-bar">
            <div id="logo">
                <center/>
                <h1>KARAN</h1>
            </div>
            <div id="nav-links">
                <p>
                    Projects
                </p>
                <p>
                    Skills
                </p>
                <p>
                    Contact
                </p>
            </div>
            <button id="get-in-touch-button">
                Get  In Touch
            </button>
        </div>
    )
}

export default NavBar;