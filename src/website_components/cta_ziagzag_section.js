import React from "react";
import {CardComponent, SimpleCTASection} from "./card.js"

const CTAsection = ({alignment, heading, paragraph}) =>{
    return(
        <>
            <div className={`cta-section-wrapper ${alignment ? alignment : ''}`}>
                <div className="container">
                    <h1 className="title">{heading || "Add heading"}</h1>
                    <div className="content">
                        <p>{paragraph || "Add Paragraph Text...."}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const ZigZag = ({ imageUrl, headingText, classname }) =>{
    return(
        <>
            <div className={`zigzag-wrapper ${classname ? classname : ''}`}>
                <div className="image-wrapper">
                    <img src={imageUrl || "/assets/images/zigzag_1.jpg"} alt="Zigzag"/>
                </div>
                <div className="container">
                    <div className="content-wrapper">
                        <h2>{headingText || "Add Heading..."}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
const LeftCTA = ()=>{
    return(
        <>
            <div className={`cta-section-wrapper simple-cta-wrapper`}>
                <SimpleCTASection cta_heading="WE’RE UP TO THE TASK" cta_paragraph="Working with York1 means knowing your job will get done right - smoothly, safely, sustainably and delivered in the same dependable way time and time again. That’s Peace of Mind performance, our promise to you. Discover our services and let us know how we can be of service."/>
                
                {/* Card section component */}
                <div className="container card-section">
                    <div className="cards-wrapper">
                        <CardComponent cardimg="/assets/images/zigzag_2.jpg" cardheading="Environmental" buttontext="Find Out More" buttonurl="/environmental" cardtext="Municipalities and businesses look to us for waste management solutions that take care of the planet and are cost-effective."/>
                        <CardComponent cardimg="/assets/images/zigzag_3.jpg" cardheading="Infrastructure" buttontext="Learn More" buttonurl="/infrastructure" cardtext="From the first dig to the final haulage of construction waste, our teams provide end-to-end service for your building projects."/>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export {CTAsection, ZigZag, LeftCTA};

