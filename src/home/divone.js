import biom from "../assets/imgs/BiO-Mudimba.jpg";

export function ServicesSection() {
  const bm = new URL(biom, import.meta.url);

  return (
    <section id="service" class="relative services-area py-6 mb-32">
      <div class="container">
        <div class="flex">
          <div class="w-full mx-4 lg:w-1/2">
            <div class="pb-10 section-title">
              <h4 class="title">Services</h4>
              <p class="text">“Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.” - Plato</p>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="w-full lg:w-2/3">
            <div class="row">
              <div class="w-full md:w-1/2">
                <div class="block mx-4 services-content sm:flex">
                  <div class="services-icon">
                    <i class="lni-mic"></i>
                  </div>
                  <div class="mb-8 ml-0 services-content media-body sm:ml-3">
                    <h4 class="services-title">Recording Studio</h4>
                    <p class="text">Bring your music life to the forefront with cutting edge production techniques</p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="block mx-4 services-content sm:flex">
                  <div class="services-icon">
                    <i class="lni-customer"></i>
                  </div>
                <div class="mb-8 ml-0 services-content media-body sm:ml-3">
                  <h4 class="services-title">Learn Music</h4>
                  <p class="text">Come and test your guitar skills if they match the current industry trends.</p>
                </div>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="block mx-4 services-content sm:flex">
                  <div class="services-icon">
                    <i class="lni-microphone"></i>
                  </div>
                  <div class="mb-8 ml-0 services-content media-body sm:ml-3">
                    <h4 class="services-title">Voice and Sound</h4>
                    <p class="text">I will help you to blend your voice with the instruments of your choice.</p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="block mx-4 services-content sm:flex">
                  <div class="services-icon">
                    <i class="lni-music"></i>
                  </div>
                  <div class="mb-8 ml-0 services-content media-body sm:ml-3">
                    <h4 class="services-title">The Kaani Stars Band</h4>
                    <p class="text">This orchestra plays for the love of music and to fill the void in the human soul.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services-image">
        <div class="image">
          <img src={bm} alt="Services" />
        </div>
      </div>
    </section>
  );
}