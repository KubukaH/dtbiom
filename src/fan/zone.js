import { HeartIcon } from "@heroicons/react/20/solid";

export function FanZone() {

  return (
    <>
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="flex mb-8 text-2xl lg:text-5xl text-purple-500 flex-row" >
          The Fan Z
          <span><HeartIcon className="inline-flex h-4 w-4 lg:h-8 lg:w-8 fill-pink-600" /></span>
          ne
        </h2>
        <div
          className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
        >
          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="inline-flex rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                No data from DB ... coming soon ...
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
