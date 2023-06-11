import { HeartIcon } from "@heroicons/react/20/solid";

import profile from "../assets/imgs/profile.png";

export function TestimonialsSection() {
  const prf = new URL(profile, import.meta.url);

  return (
    <section className="h-full">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-4 sm:px-6 lg:px-8">
        <h2 className="flex mb-8 text-2xl lg:text-5xl text-purple-500 flex-row" >
          The Fan Z
          <span><HeartIcon className="inline-flex h-5 w-5 lg:h-8 lg:w-8 fill-pink-600" /></span>
          ne
        </h2>
        <div
          className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
        >
          <div className="mb-8 sm:break-inside-avoid">
            <blockquote className="inline-flex rounded-xl bg-gray-50 p-6 shadow">
              <p className="leading-relaxed text-gray-700">
                Data coming soon ...
              </p>
              <div className="inline-flex items-center justify-center ml-2 space-x-2 animate-pulse">
                <div className="w-8 h-8 bg-blue-400 rounded-full delay-75 duration-500"></div>
                <div className="w-8 h-8 bg-green-400 rounded-full delay-300 duration-200"></div>
                <div className="w-8 h-8 bg-pink-400 rounded-full delay-1000 duration-75"></div>
              </div>
            </blockquote>
          </div>
          {/*
            listTransaction.slice(0,5).map((msg) => (
              <MessageCard msgData={msg} profp={prf} key={msg.id} />
            ))
          }
          {listTransaction.length < 1 && (
            <div className="mb-8 sm:break-inside-avoid">
              <blockquote className="inline-flex rounded-xl bg-gray-50 p-6 shadow">
                <p className="leading-relaxed text-gray-700">
                  No data from DB
                </p>
              </blockquote>
            </div>
          )}
          {
            listTransaction.length > 5 && 
              <div className="ml-8 mt-16 mb-8 lg:mt-32 lg:mb-20">
                <Link to="/fanzone" className="gradient-btn">See more messages</Link>
              </div>
          */}
        </div>
      </div>
    </section>
  );
}
