import React  from "react";
import PostCard from './postcard'

const PostSection = ({sectionheading}) =>{
    return(
        <>
            <div className="post-main-wrapper">
                <div className="container">
                    <h2 className="title">{sectionheading || "EXPLORE MORE"}</h2>
                    <div className="post-cards-wrapper">
                        <PostCard cardheading="Environmental Services" cardlink="/environmental" imgpath="/assets/images/zigzag_1.jpg"/>
                        <PostCard cardheading="Infrastructure Services" cardlink="/infrastructure" imgpath="/assets/images/zigzag_2.jpg"/>
                        <PostCard cardheading="About York1" cardlink="/about" imgpath="/assets/images/zigzag_3.jpg"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostSection