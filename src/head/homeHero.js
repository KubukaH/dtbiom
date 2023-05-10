import MyModal from "../_components/modal";
import headershape from "../assets/imgs/header-shape.svg";
import { PlayIcon } from "@heroicons/react/20/solid";

export function HeadHero() {
  const img2 = new URL(headershape, import.meta.url);

  return (
    <div id="home" className="relative z-10 header-hero bg-[url('../src/assets/imgs/bio-mud-bg.jpg')] bg-cover bg-center bg-no-repeat top-0">
      <div className="px-5 mx-auto justify-center">
        <div className="row-auto">
          <div className="w-full lg:w-5/6 xl:w-2/3">
            <div className="pt-60 pb-64 xs:pt-24 text-left">
              <h3 className="px-5 mb-5 text-3xl font-semibold leading-tight text-white md:text-5xl">D.T. BiO Mudimba Music.</h3>
              <p className="px-5 mb-10 text-xl text-white">Musician, guitarist, music studio producer, vocals coach, sound engineer and leader of the Kaani Stars Band.</p>
              <ul className="flex flex-wrap justify-start px-5 sm:px-2">
                <li><a className="mx-3 main-btn gradient-btn" href="#">GET IN TOUCH</a></li>
                <MyModal />
              </ul>
            </div> 
          </div>
        </div> 
      </div> 
      <div className="absolute bottom-0 z-20 w-full h-auto -mb-1">
        <img src={img2} alt="shape"/>
      </div>
    </div>
  );
}
