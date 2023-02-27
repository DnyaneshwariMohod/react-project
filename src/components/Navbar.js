import React from "react";
import { Link } from "react-router-dom";




const Navbar = ()=>{
    return(
        <header>
            <nav>
                <div className="nav-logo-wrapper">
                    <h1 className="nav-logo">TakeShape</h1>
                </div>

                <div className="nav-elements">
                    <Link className="nav-links" to="#">Home</Link>
                    <Link className="nav-links" to="#">About</Link>
                    <Link className="nav-links" to="#">Projects</Link>
                    <Link className="nav-links" to="#">Contact</Link>
                </div>

                <div className="menu-wrapper">
                    <img className="nav-menu-icon" src="/images/menu.png" alt="menu"></img>
                </div>

            </nav>
        </header>
    )
};


export default Navbar;