import React from "react";
import { NavLink } from "react-router-dom";

const ImageWithContent = () =>{
    return(
        <>
            <div className="image-with-content">
                <div className="container">
                    <div className="col image-col">
                        <div className="image-wrapper">
                            <img src="/assets/images/col_img.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="content col">
                        <h2 className="title">BE PART OF THE TEAM</h2>
                        <div className="description">
                            <p>More than 70 years since we served our first client, York1 continues to build and grow. We’re looking for great people who want to be part of the world’s next great environmental and infrastructure services company.</p>
                        </div>
                        <NavLink className="btn white-btn" to="/about-us">Discover Careers</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageWithContent