import React from "react";
import {Innerhero} from '../website_components/hero_section'
import ComingSoon from "../website_components/comingSoon";

const TransferStation = () =>{
    let page_Name= "Transfer Station";
    let page_description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    let hero_bgImage = "/assets/images/zigzag_2.jpg";
    let hero_button_text = "Contact Us";
    let hero_button_URL ="/contact-us";

    return(
        <>
            <main>
                <Innerhero page_img={hero_bgImage}  page_title={page_Name} page_content={page_description} page_btnText={hero_button_text} page_btnURL= {hero_button_URL} />
                <ComingSoon/>
            </main>
        </>
    )
}

export default TransferStation;