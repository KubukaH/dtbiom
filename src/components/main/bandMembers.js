import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// Import Swiper styles
import 'swiper/swiper.min.css'; // core Swiper
// import 'swiper/navigation/navigation.min.css'; // Navigation module
// import 'swiper/free-mode/free-mode.min.css'; // Pagination module
import 'swiper/modules/thumbs/thumbs.min.css'; // Pagination module

import { Pagination, EffectCoverflow, Parallax } from "swiper";

const Members = () => {
  return (
    <Swiper
      effect={"coverflow"}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      rewind={true}
      speed={600}
      parallax={true}
      modules={[Parallax, EffectCoverflow, Pagination]}
      className="mySwiper h-screen my-8"
      data-swiper-parallax="-23%"
    >
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}

export function BandMembers() {
  return (
    <section className="bg-white">
      <div className="px-4 pt-8 pb-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 sm:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Band Members
          </h2>
        </div>
        <div className="h-screen">
          <Members />
        </div>
      </div>
    </section>
  );
}