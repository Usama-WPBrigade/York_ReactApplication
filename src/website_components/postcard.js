import React from "react";
import { NavLink } from "react-router-dom";

const PostCard = ({cardheading, cardlink, imgpath}) =>{
    return(
        <>
            <NavLink className="postcard-container" to={cardlink ? cardlink : '#'}>
                <div className="post-image">
                    <img src={imgpath || "/assets/images/zigzag_1.jpg"}  alt="card-image"/>
                </div>
                <div className="content-wrapper">
                    <h5 className="card_title">{cardheading || "heading ... !"}</h5>
                </div>
            </NavLink>
        </>
    )
}
export default PostCard;