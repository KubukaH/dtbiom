import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function SliderApp() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div id="home" className="relative z-10 header-hero bg-[url('../src/assets/imgs/bio-mud-bg.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="home" className="relative z-10 header-hero bg-[url('../src/assets/imgs/bio-mud-bg.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="home" className="relative z-10 header-hero bg-[url('../src/assets/imgs/BiO-Mudimba.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="home" className="relative z-10 header-hero bg-[url('../src/assets/imgs/BiO-Mudimba-footer.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="home" className="relative z-10 header-hero bg-[url('../src/assets/imgs/bio-nama-award.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="home" className="relative z-10 header-hero bg-[url('../src/assets/imgs/bio-starfm-best-sungura-2022.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="home" className="relative z-10 header-hero bg-[url('../src/assets/imgs/bio-mud-mobile-bg.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
