import React from "react";
import { NavLink } from "react-router-dom";

const Herosection = ()=>{
    return(
        <>
            <div className="hero_section">
                <div className="bg-image">
                    <img src="/assets/images/hero_img.svg" alt="Site Logo"/>
                </div>
                <div className="container">
                    <div className="image-wrapper">
                        <img src="/assets/images/hero_logo.png" alt="Site Logo"/>
                    </div>
                </div>

            </div>
        </>
    )
}
const Innerhero = ({page_img, page_title, page_content, page_btnText, page_btnURL})=>{
    return(
        <>
            <div className="inner-hero-wrapper">
                <div className="bg-image-wrapper">
                    <img src={page_img || "/assets/images/zigzag_1.jpg"} alt={page_title}/>
                </div>
                <div className="container">
                    <div className="content-wrapper">
                        <h1>{page_title || "Page Title"}</h1>
                        <div className="paragraph"><p>{page_content || "Paragraph Text ... !"}</p></div>
                        {
                            page_btnURL ? <NavLink to={page_btnURL || "/"} className="btn white-btn">{page_btnText || "Learn More"}</NavLink> : ''
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export {Herosection, Innerhero};