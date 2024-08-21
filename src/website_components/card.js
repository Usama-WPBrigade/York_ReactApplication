import React from "react";
import {NavLink} from 'react-router-dom'

const CardComponent = ({cardimg, cardheading, buttontext, buttonurl, cardtext}) =>{
    return(
        <>
            <div className="card-conatiner">
                <div className="card-img-wrapper">
                    <img src={cardimg || "/assets/images/zigzag_1.jpg"}  alt="card-image"/>
                </div>
                <div className="content-wrapper">
                    <h3 className="card_title">{cardheading || "Add Heading"}</h3>
                    <div className="description">
                        <p>{cardtext || "Add paragraph..."}</p>
                    </div>
                    <div className="card_button">
                        <NavLink className="btn" to={buttonurl || "#"}>{buttontext || "Leran More"}</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

const SimpleCTASection = ({cta_heading, cta_paragraph, btnText, btnURL })=>{
    return(
        <>
            <div className="container">
                <h2 className="title">{cta_heading || "Add heading"}</h2>
                <div className="content">
                    <p>{cta_paragraph || "Add Paragraph Text...."}</p>
                </div>
                {
                btnText ? 
                    <NavLink className="btn" to={btnURL ? btnURL : '#' }>{btnText}</NavLink>
                : ''}
            </div>
        </>
    )
}

export {CardComponent, SimpleCTASection}