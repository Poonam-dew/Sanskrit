// CoverflowCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

import img1 from '../assets/Current.jpg';
import img2 from '../assets/Concluded.jpg';
import img3 from '../assets/ConvoChanting.jpeg';
import img4 from '../assets/Current.jpg';
import img5 from '../assets/Concluded.jpg';

import '../Styles/Carousel.css';

const Carousel = () => {
  return (
    <div className="coverflow-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="coverflow-swiper"
      >
        {[img1, img2, img3, img4, img5].map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} className="coverflow-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
