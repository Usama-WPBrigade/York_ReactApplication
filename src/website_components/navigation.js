import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () =>{
    
    // this funcation is used for removing the 'active-mobile-menu' 
    // form the body on mobile and close the menu

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', ()=>{
            setTimeout(() => {
                document.body.classList.remove('active-mobile-menu');
            }, 300);
        });
    });

    return(
        <>
            <ul className="main-menu">
                <li className="menu-item home"><NavLink className="nav-link home" to="/">Home</NavLink></li>
                <li className="menu-item"><NavLink className="nav-link about-us" to="/about-us">About Us</NavLink></li>
                <li className="menu-item"><NavLink className="nav-link environmental" to="/environmental">Environmental</NavLink></li>
                <li className="menu-item"><NavLink className="nav-link infrastructure" to="/infrastructure">Infrastructure</NavLink></li>
                <li className="menu-item"><NavLink className="nav-link infrastructure" to="/bin-rental">Bin Rental</NavLink></li>
                <li className="menu-item"><NavLink className="nav-link infrastructure" to="/transfer-stations">Transfer Stations</NavLink></li>
                <li className="menu-item"><NavLink className="nav-link contact-us" to="/contact-us">Contact Us</NavLink></li>
            </ul>
        </>
    )
}
export default Menu;