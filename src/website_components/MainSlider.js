import React , { useState } from "react";
import {SimpleCTASection} from "./card.js"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
import {MainSldierComponent} from './sliders'

const MainSlider = () =>{
    let content = "Our portfolio of projects includes some of the most iconic architectural structures and massive cleanups across the country."
    const [BgImag, SetBgImag] = useState("/assets/images/zigzag_1.jpg");

    const handleSlideChange = (swiper) => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const BgImag = activeSlide.querySelector('img').src;
        SetBgImag(BgImag);
    };

    return(
        <>
            <div className={`cta-section-wrapper simple-cta-wrapper`}>
                <SimpleCTASection cta_heading="OUR WORK" cta_paragraph={content}  btnText="About Us" btnURL="/about-us" />
            </div>

            {/* Main slider */}
            <div className="main-slider-wrapper">
                <div className="slider-bg">
                    <img src={BgImag} alt="Slider"/>
                </div>

                <div className="container">
                    <div className="slider-wrapper">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            cssMode={true}
                            autoplay={{
                                delay: 5000,
                            }}
                            loop={true}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
                            className="mainslider"
                            onSlideChange={handleSlideChange} 
                        >
                            <SwiperSlide><MainSldierComponent slideimgPath="/assets/images/zigzag_1.jpg" slideheading="METRO TORONTO CONVENTION CENTRE " slidetext="York1 provided infrastructure services for Canada’s largest convention facility."/></SwiperSlide>
                            <SwiperSlide><MainSldierComponent slideimgPath="/assets/images/zigzag_3.jpg" slideheading="METRO TORONTO CONVENTION CENTRE 2" slidetext="York1 provided infrastructure services for Canada’s largest convention facility."/></SwiperSlide>
                            <SwiperSlide><MainSldierComponent slideimgPath="/assets/images/zigzag_1.jpg" slideheading="METRO TORONTO CONVENTION CENTRE 3" slidetext="York1 provided infrastructure services for Canada’s largest convention facility."/></SwiperSlide>
                            <SwiperSlide><MainSldierComponent slideimgPath="/assets/images/zigzag_2.jpg" slideheading="METRO TORONTO CONVENTION CENTRE 4" slidetext="York1 provided infrastructure services for Canada’s largest convention facility."/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainSlider