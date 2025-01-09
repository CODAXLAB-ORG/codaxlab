import React from "react";
import ballImage from "../../assets/Ball1.png";

const ProfileRings: React.FC = () => {
  // const profiles = [
  //   {
  //     image: ballImage,
  //     name: "Profile 1",
  //     position: {
  //       base: "top-0 right-8 sm:right-12 md:right-16 lg:right-20",
  //       // "top-0 right-4 sm:right-6 md:right-8 lg:right-10",
  //       size: "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40",
  //       // "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
  //     },
  //   },
  //   {
  //     image: ballImage,
  //     name: "Profile 2",
  //     position: {
  //       base: "top-16 sm:top-20 md:top-24 lg:top-28 right-0",
  //       // "top-8 sm:top-10 md:top-12 lg:top-14 right-0",
  //       size: "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40",
  //     },
  //   },
  //   {
  //     image: ballImage,
  //     name: "Profile 3",
  //     position: {
  //       base: "top-16 sm:top-20 md:top-24 lg:top-28 right-16 sm:right-24 md:right-32 lg:right-40",
  //       // "top-8 sm:top-10 md:top-12 lg:top-14 right-8 sm:right-12 md:right-16 lg:right-20",
  //       size: "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40",
  //     },
  //   },
  //   {
  //     image: ballImage,
  //     name: "Profile 4",
  //     position: {
  //       base: "top-32 sm:top-40 md:top-48 lg:top-56 right-8 sm:right-12 md:right-16 lg:right-20",
  //       // "top-16 sm:top-20 md:top-24 lg:top-28 right-4 sm:right-6 md:right-8 lg:right-10",
  //       size: "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40",
  //     },
  //   },
  // ];

  return (
    <>
      <div className="flex -space-x-4 rtl:space-x-reverse">
        <img
          className="w-24 h-24 border-2 border-white rounded-full dark:border-gray-800"
          src={ballImage}
          alt=""
        />
        <img
          className="w-24 h-24 border-2 border-white rounded-full dark:border-gray-800"
          src={ballImage}
          alt=""
        />
        <img
          className="w-24 h-24 border-2 border-white rounded-full dark:border-gray-800"
          src={ballImage}
          alt=""
        />
        <img
          className="w-24 h-24 border-2 border-white rounded-full dark:border-gray-800"
          src={ballImage}
          alt=""
        />
      </div>
    </>
  );
};

export default ProfileRings;
