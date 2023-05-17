import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import gallery_images from "./gallery_consts.jsx";

function GalleryComponent() {
    return (
        <div className="container">
            <h1 className="heading">HOT LOOK TEAM GALLERY</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {gallery_images.map(image =>
                <SwiperSlide>
                    <h1>{image.name}</h1>
                    <p>
                        {image.job}
                    </p>
                    <img src={image.image} alt="slide_image" />
                </SwiperSlide>
                )}
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default GalleryComponent;