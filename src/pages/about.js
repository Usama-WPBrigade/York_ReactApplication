import React from "react";
import {Innerhero} from '../website_components/hero_section'
import ImageWithContent from '../website_components/image-content';
import {LeftCTA} from "../website_components/cta_ziagzag_section";
 

const About = () =>{
    let page_Name= "About us";
    let page_description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    let hero_bgImage = "/assets/images/zigzag_2.jpg";
    let hero_button_text = "Contact Us";
    let hero_button_URL ="/contact-us";
    
    return(
        <>
            <main>
                <Innerhero page_img={hero_bgImage}  page_title={page_Name} page_content={page_description} page_btnText={hero_button_text} page_btnURL= {hero_button_URL} />
                <ImageWithContent/>
                <LeftCTA/>
            </main>
        </>
       
    );
}

export default About;