import { HeartIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export const MessageCard = ({ profp }) => {

  return (
    <div className="prose prose-zinc prose-sm mb-8 sm:break-inside-avoid select-none">
      <blockquote className="rounded-xl font-['Cormorant_Garamond'] bg-gray-50 p-6 shadow">
        <p className="leading-relaxed text-gray-700 text-base whitespace-pre-line text-justify hyphens-auto">
        </p>
      </blockquote>

      <div className="not-prose mt-1 flex items-center gap-4">
        <img
          alt="Woman"
          src={profp}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="text-sm">
          <p className="font-medium"></p>
          <p className="mt-1">
          </p>
        </div>

        <HeartIcon 
          className="transition ease-in-out delay-100 duration-300 h-4 w-4 text-pink-600 hover:translate-x-0 hover:scale-[1.9] cursor-pointer"
        />
      </div>
    </div>
  );
}
