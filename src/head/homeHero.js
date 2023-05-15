import MessageModal from "../_components/contact";
import MyModal from "../_components/modal";

export function HeadHero() {

  return (
    <div id="home" className="relative z-10 header-hero bg-[url('../src/assets/imgs/bio-mud-bg.jpg')] bg-cover bg-center bg-no-repeat top-0 bottom-0">
      <div className="px-5 mx-auto justify-center">
        <div className="row-auto">
          <div className="w-full lg:w-5/6 xl:w-2/3 z-20">
            <div className="pt-24 pb-[106px] lg:pb-48 lg:pt-48 lg:-mb-[8px] text-left">
              <h3 className="px-5 mb-5 text-3xl font-semibold leading-tight text-white md:text-5xl">D.T. BiO Mudimba Music.</h3>
              <p className="px-5 mb-10 text-xl text-white">Musician, guitarist, music studio producer, vocals coach, sound engineer and leader of the Kaani Stars Band.</p>
              <ul className="flex flex-wrap gap-10 justify-start px-5 sm:px-2">
                <MessageModal />
                <MyModal />
              </ul>
            </div> 
          </div>
        </div> 
      </div> 
      <div className="w-full h-full z-10">
        <svg enableBackground="new 0 0 1504 131.3" viewBox="0 0 1504 131.3" xmlns="http://www.w3.org/2000/svg"><path d="m877.8 85c139.5 24.4 348 33.5 632.2-48.2-.2 32.5-.3 65-.5 97.4-505.9 0-1011.6 0-1517.5 0 0-33.3 0-66.7 0-100.1 54.2-11.4 129.5-23.9 220-28.2 91-4.3 173.6 1 307.4 18.6 183.2 24.2 295.2 49.4 358.4 60.5z" fill="#fff"/></svg>
      </div>
    </div>
  );
}
