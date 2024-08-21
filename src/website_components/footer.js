import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () =>{
    
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <div className="footer-main-wrapper">
            <div className="container content-wrapper">
                <div className="col footer-logo">
                    <NavLink className="logo-wrapper" to="/">
                        <img src="/assets/images/footer_icon.svg" alt="Footer Logo"/>
                    </NavLink>
                </div>
                <div className="col content">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/environmental">Environmental</NavLink></li>
                        <li><NavLink to="/infrastructure">Infrastructure</NavLink></li>
                        <li><NavLink to="/bin-rental">Bin Rental</NavLink></li>
                        <li><NavLink to="/about-us">About Us</NavLink></li>
                        <li><NavLink to="/careers">Careers</NavLink></li>
                        <li><NavLink to="/locations">Locations</NavLink></li>
                        <li><NavLink to="/contact-us">Contact</NavLink></li>
                        <li><NavLink to="/terms">Terms of Use</NavLink></li>
                        <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="copyright-section">
                <div className="container">
                    <span className="current-year">{currentYear}</span> York1. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
