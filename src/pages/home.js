import React from "react";
import {Herosection} from "../website_components/hero_section";
import {CTAsection, ZigZag, LeftCTA} from "../website_components/cta_ziagzag_section";
import ImageWithContent from '../website_components/image-content';
import PostSection from '../website_components/post_section';
import LogoSlider from "../website_components/logoslider";
import MainSlider from "../website_components/MainSlider";
const Home = () =>{
    return(
        <>
            <main>
                <Herosection/>
                <CTAsection alignment="center" heading="1 for all" paragraph= "We’re one of North America’s oldest environmental and infrastructure companies, serving customers and communities for over 70 years. From large-scale excavation work, to environmental cleanups, to waste collection and more, York1 gets the job done right."/>
                <ZigZag imageUrl="/assets/images/zigzag_1.jpg" headingText="70 YEARS STRONG"/>
                <ZigZag imageUrl="/assets/images/zigzag_2.jpg" headingText="3,850,000+ TONS DIVERTED FROM LANDFILLS" classname="reverse-zigzag"/>
                <ZigZag imageUrl="/assets/images/zigzag_3.jpg" headingText="10,000+ PROJECTS"/>
                <LeftCTA/>
                <LogoSlider/>
                <MainSlider/>
                <ImageWithContent/>
                <PostSection sectionheading="Explore More"/>
            </main>
        </>
    );
}

export default Home;