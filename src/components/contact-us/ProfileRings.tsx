import React from "react";
import ballImage from "../../assets/Ball1.png";

const ProfileRings: React.FC = () => {
  const profiles = [
    {
      image: ballImage,
      name: "Profile 1",
      position: "top-0 right-8 sm:right-12 md:right-16 lg:right-20",
      size: "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40",
    },
    {
      image: ballImage,
      name: "Profile 2",
      position: "top-16 sm:top-20 md:top-24 lg:top-28 right-0",
      size: "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40",
    },
    {
      image: ballImage,
      name: "Profile 3",
      position: "top-16 sm:top-20 md:top-24 lg:top-28 right-16 sm:right-24 md:right-32 lg:right-40",
      size: "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40",
    },
    {
      image: ballImage,
      name: "Profile 4",
      position: "top-32 sm:top-40 md:top-48 lg:top-56 right-8 sm:right-12 md:right-16 lg:right-20",
      size: "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className={`absolute ${profile.position} ${profile.size} flex items-center justify-center transition-transform duration-300 transform hover:scale-110`}
          title={profile.name}
        >
          <img
            className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
            src={profile.image}
            alt={profile.name}
          />
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-xs md:text-sm lg:text-base rounded-b-full px-2 py-1">
            {profile.name}
          </div>
        </div>
      ))}

      {/* Central Ring */}
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-dashed border-gray-300 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-300 text-sm md:text-lg">Central Profile</p>
      </div>
    </div>
  );
};

export default ProfileRings;
