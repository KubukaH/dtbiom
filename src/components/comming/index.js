const smiley = new URL('../../assets/smiling-face-with-smiling-eyes.png', import.meta.url);
export function CommingSoon() {
  return (
    <section className="bg-gray-50">
    <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
  <div className="max-w-xl mx-auto text-center">
    <aside
      class="overflow-hidden bg-[url(assets/dtbm.jpeg)] bg-center bg-no-repeat bg-cover"
    >
      <div class="p-8 md:p-12 lg:px-16 lg:py-24 bg-green-900/25">
        <div class="max-w-lg text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Under Construction. <br />
            <strong className="font-extrabold text-red-700 sm:block">
              Comming Soon...
            </strong>
          </h2>

          <p
            class="hidden max-w-md text-white md:mt-6 md:text-lg md:leading-relaxed md:block"
          >
            This website is still under construction. We are asking for your patience in this matter and we thank you for your continued support! <img src={smiley} alt="Smiley Face" width={32} height={32} />
          </p>
          <h5 className="text-2xl font-bold text-indigo-700 sm:text-xl">
            Meanwhile here are our YouTube Videos Links
          </h5>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a className="relative inline-flex text-sm font-medium text-white group focus:outline-none focus:ring" href="https://www.youtube.com/watch?v=afg-mg1O6uY" target="__blank">
              <span className="absolute inset-0 border rounded-full border-red-600 group-active:border-red-500"></span>
              <span className="block inline-flex transition-transform items-center w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded-full shadow sm:w-auto sm:py-2 sm:px-4 active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring focus:ring-yellow-400 group-hover:-translate-x-1 group-hover:-translate-y-1">
                Aluse... Mushe Mushe
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
            <a className="relative inline-flex text-sm font-medium sm:my-2 text-white group focus:outline-none focus:ring" href="https://www.youtube.com/watch?v=Ooqqq7_nmeg" target="__blank">
              <span className="absolute inset-0 border rounded-full border-red-600 group-active:border-red-500"></span>
              <span className="block inline-flex transition-transform items-center w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded-full shadow sm:w-auto sm:py-2 sm:px-4 active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring focus:ring-yellow-400 group-hover:translate-x-1 group-hover:-translate-y-1">
                Baama aTaata
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
            <a className="relative inline-flex text-sm font-medium text-white group focus:outline-none focus:ring" href="https://www.youtube.com/watch?v=eUKjnhZJFl0" target="__blank">
              <span className="absolute inset-0 border rounded-full border-red-600 group-active:border-red-500"></span>
              <span className="block inline-flex transition-transform items-center w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded-full shadow sm:w-auto sm:py-2 sm:px-4 active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring focus:ring-yellow-400 group-hover:-translate-x-1 group-hover:translate-y-1">
                Kujata jata
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </aside>
    </div>
    </div>
    </section>
  );
}
