import React from "react";
import { NavLink } from "react-router-dom";

const LogoComponet = ({imgPath, logoURL}) =>{
    return(
        <>
            <NavLink className="logo-wrapper" to={logoURL ? logoURL : '/'} target={logoURL ? "_blank" : ''}>
                <div className="logo-container">
                    <img src={imgPath || ""} alt="Company Name"/>
                </div>
            </NavLink>
        </>
    )
}

const MainSldierComponent = ({slideimgPath, slideheading, slidetext}) =>{
    return(
        <>
            <div className="slider-inner">
                <img src={slideimgPath || ""} alt="Company Name"/>
                <h4>{slideheading || 'Add Heading'}</h4>
                <div><p>{slidetext || "Paragraph"}</p></div>
            </div>
        </>
    )
}
export {LogoComponet, MainSldierComponent}
