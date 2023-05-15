import { HeartIcon } from "@heroicons/react/20/solid";
import profile from "../assets/imgs/profile.png";
import { PaginationSection } from "./pagination";

export function TestimonialsSection() {
  const prf = new URL(profile, import.meta.url);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="flex mb-8 text-2xl lg:text-5xl text-purple-500 flex-row" >
          Our Fan Messages
          <span><HeartIcon className="h-5 w-5 fill-pink-600" /></span>
        </h2>
        <div
          className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
        >
          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                minima dicta amet, molestiae aliquam incidunt suscipit recusandae
                labore ratione doloremque, architecto et illo minus quo tenetur
                ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
                corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
                ad inventore laudantium est illum voluptatem quis.
              </p>
            </blockquote>

            <div className="mt-4 flex items-center gap-4">
              <img
                alt="Woman"
                src={prf}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-medium">Gladis Lennon</p>
                <p className="mt-1">Head of SEO</p>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
                quo deserunt quos expedita minima incidunt sed tempora, a architecto
                consectetur reprehenderit, in repellat voluptatum.
              </p>
            </blockquote>

            <div className="mt-4 flex items-center gap-4">
              <img
                alt="Woman"
                src={prf}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-medium">Gladis Lennon</p>
                <p className="mt-1">Head of SEO</p>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                beatae incidunt perferendis soluta facilis voluptas dicta
                repudiandae quasi asperiores libero, exercitationem molestiae autem
                sapiente dolore nulla non consequatur. Eaque, dolores.
              </p>
            </blockquote>

            <div className="mt-4 flex items-center gap-4">
              <img
                alt="Woman"
                src={prf}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-medium">Gladis Lennon</p>
                <p className="mt-1">Head of SEO</p>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                doloribus eius aut unde, dolores accusantium!
              </p>
            </blockquote>

            <div className="mt-4 flex items-center gap-4">
              <img
                alt="Woman"
                src={prf}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-medium">Gladis Lennon</p>
                <p className="mt-1">Head of SEO</p>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a
                voluptatum quidem nulla quisquam natus velit provident earum esse,
                odio numquam labore recusandae similique sunt.
              </p>
            </blockquote>

            <div className="mt-4 flex items-center gap-4">
              <img
                alt="Woman"
                src={prf}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-medium">Gladis Lennon</p>
                <p className="mt-1">Head of SEO</p>
              </div>
            </div>
          </div>

          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
                necessitatibus, repudiandae qui dolor minima.
              </p>
            </blockquote>

            <div className="mt-4 flex items-center gap-4">
              <img
                alt="Woman"
                src={prf}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="text-sm">
                <p className="font-medium">Gladis Lennon</p>
                <p className="mt-1">Head of SEO</p>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination Section */}
        <PaginationSection />
      </div>
    </section>
  );
}