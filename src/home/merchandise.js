import biom from "../assets/imgs/bio-starfm-best-sungura-2022.jpg";

export const Merchandise = () => {
  const biop = new URL(biom, import.meta.url);

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          <p className="max-w-md mx-auto mt-4 text-gray-500">
            Kindly support the D.T BiO Mudimba Music by purchasing from our merchandise shop. Without you, D.T BiO Mudimba Music would not be the same. Thank you.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" className="relative block group">
              <img
                src={biop}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-6"
              >
                <h3 className="text-xl font-medium text-white">Casual Trainers</h3>

                <span
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="relative block group">
              <img
                src={biop}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-6"
              >
                <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

                <span
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </span>
              </div>
            </a>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <a href="#" className="relative block group">
              <img
                src={biop}
                alt=""
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-6"
              >
                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                <span
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
