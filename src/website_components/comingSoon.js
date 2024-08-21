import React from "react";
import { NavLink } from "react-router-dom";

const ComingSoon  = () =>{
    return(
        <>
            <div className="comingsoon-wrapper">
                <div className="container">
                    <h2>Coming Soon...!</h2>
                    <h6>The content you are looking for might have a new home or no longer exist</h6>
                    <div><p><NavLink to="/">Click here</NavLink> to go back to the homepage and start again.</p></div>
                </div>
            </div>
        </>
    )
}
export default ComingSoon