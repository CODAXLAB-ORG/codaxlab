// import React from 'react';

import { Link } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import { topRowData } from "./topRowData";
import { bottomRowData } from "./bottomRowData";

interface EventData {
  image: string;
  label: string;
}

export default function HomeGallerySection(): JSX.Element {
  return (
    <div className="no-scrollbar flex flex-col w-full items-center justify-center py-6 h-auto lg:glass-effect md:border-2 md:border-gray-800">
      <h1 className="text-[1.5rem] md:text-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white font-bold uppercase">
        Our Recent Events
      </h1>
      <p className="text-md md:text-xl lg:text-lg max-w-xl bg-clip-text text-gray-400 text-center">
        Explore the highlights of our recent events, featuring innovation,
        teamwork, and networking opportunities.
      </p>
      <div className="no-scrollbar flex flex-col gap-2 items-center justify-center w-full py-2 h-auto">
        {/* Top Row */}
        <div className="no-scrollbar flex items-center gap-2 justify-start w-full overflow-x-auto scroll-smooth snap-x md:max-w-[80rem] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {topRowData.map((item: EventData, index: number) => (
            <div
              key={index}
              className="relative h-[12rem] min-w-[18rem] md:min-w-[25rem] overflow-hidden rounded-xl shadow-xl snap-start transition-all duration-700 ease-in-out md:hover:scale-95"
            >
              <img
                src={item.image}
                alt="event"
                className="w-full h-full object-cover bg-center"
              />
              <div className="absolute top-0 left-0 bg-black bg-opacity-20 w-full h-full flex items-end justify-end z-10 p-2">
                <h1 className="text-gray-800 min-w-[5rem] py-1 bg-white bg-opacity-70 px-4 text-right rounded-full">
                  {item.label}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="no-scrollbar w-full flex items-center justify-center">
          <div className="no-scrollbar flex items-center gap-2 justify-start w-full overflow-x-auto scroll-smooth snap-x md:max-w-[60rem] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {bottomRowData.map((item: EventData, index: number) => (
              <div
                key={index}
                className="relative h-[9rem] min-w-[14rem] max-w-[16rem] overflow-hidden rounded-xl shadow-xl snap-start transition-all duration-700 ease-in-out md:hover:scale-95"
              >
                <img
                  src={item.image}
                  alt="event"
                  className="w-full h-full object-cover bg-center"
                />
                <div className="absolute top-0 left-0 bg-black bg-opacity-20 w-full h-full flex items-end justify-end z-10 p-2">
                  <h1 className="text-gray-800 min-w-[5rem] py-1 bg-white bg-opacity-70 px-4 text-right rounded-full">
                    {item.label}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-5">
        <Link
          to="gallery"
          className="flex items-center justify-between gap-4 px-3 py-2 bg-gradient-to-r from-gray-500 to-white hover:from-white hover:to-gray-500 text-black rounded-full shadow-lg"
        >
          <span className="pl-3 px-2 text-xl">See More</span>
          <div className="px-2 py-2 bg-black text-white rounded-full text-xl flex items-center justify-center">
            <CiLocationArrow1 />
          </div>
        </Link>
      </div>
    </div>
  );
}
