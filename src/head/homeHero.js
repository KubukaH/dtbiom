import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export function HeadHero() {
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
          <div id="home1" className="relative z-10 header-hero bg-[url('../src/assets/imgs/bio-mud-bg.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className="w-full h-[100vh] bg-slate-600 px-4 py-32 lg:flex lg:items-center"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Understand User Flow.
      
              <span className="sm:block"> Increase Conversion. </span>
            </h1>
      
            <p className="mx-auto mt-4 max-w-xl text-white sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>
      
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>
      
              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="home2" className="relative z-10 header-hero bg-[url('../src/assets/imgs/bio-mud-bg.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className="w-full h-[100vh] bg-slate-600 px-4 py-32 lg:flex lg:items-center"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Understand User Flow.
      
              <span className="sm:block"> Increase Conversion. </span>
            </h1>
      
            <p className="mx-auto mt-4 text-white max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>
      
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>
      
              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="home3" className="relative z-10 header-hero bg-[url('../src/assets/imgs/BiO-Mudimba.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="home4" className="relative z-10 header-hero bg-[url('../src/assets/imgs/BiO-Mudimba-footer.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="home5" className="relative z-10 header-hero bg-[url('../src/assets/imgs/bio-nama-award.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="home6" className="relative z-10 header-hero bg-[url('../src/assets/imgs/bio-starfm-best-sungura-2022.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="home7" className="relative z-10 header-hero bg-[url('../src/assets/imgs/bio-mud-mobile-bg.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
            <div className="w-full h-[100vh]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className="w-full h-[100vh] bg-slate-600 px-4 py-32 lg:flex lg:items-center"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Understand User Flow.
      
              <span className="sm:block"> Increase Conversion. </span>
            </h1>
      
            <p className="mx-auto mt-4 text-white max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>
      
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>
      
              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
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
