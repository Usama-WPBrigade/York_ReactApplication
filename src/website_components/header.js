import React, { useState, useEffect } from "react";
import Menu from './navigation';
import { NavLink } from 'react-router-dom';

const Header =  () => {
    const [isActive, SetActive] = useState(false);

    const handleToggle = () => {
        SetActive(!isActive);
    };
    useEffect(()=>{
        if(isActive){
            document.body.classList.add('active-mobile-menu')
        }else{
            document.body.classList.remove('active-mobile-menu')
        }
        return()=>{
            document.body.classList.remove('active-mobile-menu')
        }
    }, [isActive])

    return(
        <header className="header_wrapper">
            <div className="container">
                <div className="logo_col">
                    <NavLink to="/" className="logo-wrapper">
                        <img src="/assets/images/site-logo.png" alt="Beef Logo"/>
                    </NavLink>
                    <button className="menu_icon" onClick={handleToggle}>
                        <span className="menu_bar menu_bar1"></span>
                        <span className="menu_bar menu_bar2"></span>
                        <span className="menu_bar menu_bar3"></span>
                    </button>
                </div>
                <div className="manu-col">
                    <Menu/>
                </div>
            </div>
        </header>
    );
}

export default Header;
