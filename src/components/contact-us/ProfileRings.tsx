import React from "react";
import ballImage from "../../assets/Ball1.png";
import { div } from "three/tsl";

const ProfileRings: React.FC = () => {
  const profiles = [
    {
      image: ballImage,
      name: "Profile 1",
      position: {
        base: "top-0 right-4 sm:right-6 md:right-8 lg:right-10",
        size: "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
      },
    },
    {
      image: ballImage,
      name: "Profile 2",
      position: {
        base: "top-8 sm:top-10 md:top-12 lg:top-14 right-0",
        size: "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
      },
    },
    {
      image: ballImage,
      name: "Profile 3",
      position: {
        base: "top-8 sm:top-10 md:top-12 lg:top-14 right-8 sm:right-12 md:right-16 lg:right-20",
        size: "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
      },
    },
    {
      image: ballImage,
      name: "Profile 4",
      position: {
        base: "top-16 sm:top-20 md:top-24 lg:top-28 right-4 sm:right-6 md:right-8 lg:right-10",
        size: "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24",
      },
    },
  ];

  return (
    // className="relative h-36 w-full sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56"
    <div className="w-full flex items-center justify-center">
      <div className="relative h-36 w-full sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56">
        {profiles.map((profile, index) => (
          <div key={index} className={`absolute ${profile.position.base}`}>
            <div className={`border-4 border-white ${profile.position.size}`}>
              <img src={profile.image} alt={profile.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileRings;
