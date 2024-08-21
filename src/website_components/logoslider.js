import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
import { LogoComponet } from './sliders';

const LogoSlider = () =>{
    return(
        <>
            <div className="logo-section-wrapper">
                <div className='container'>
                    <div className='section-header'>
                        <h2>Proudly Serving</h2>
                    </div>
                    <div className='slider-wrapper'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            cssMode={true}
                            autoplay={{
                                delay: 1000,
                            }}
                            loop={true}
                            breakpoints={{
                                768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                                },
                                1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                },
                            }}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
                            className="logoslider"
                        >
                            <SwiperSlide><LogoComponet imgPath="/assets/images/LS_1.png" logoURL="https://en.wikipedia.org/wiki/Toronto"/></SwiperSlide>
                            <SwiperSlide><LogoComponet imgPath="/assets/images/LS_2.png" logoURL="https://en.wikipedia.org/wiki/Toronto_(disambiguation)"/></SwiperSlide>
                            <SwiperSlide><LogoComponet imgPath="/assets/images/LS_3.png" logoURL="https://en.wikipedia.org/wiki/Toronto"/></SwiperSlide>
                            <SwiperSlide><LogoComponet imgPath="/assets/images/LS_2.png" logoURL="https://en.wikipedia.org/wiki/Metropolitan_Toronto"/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LogoSlider