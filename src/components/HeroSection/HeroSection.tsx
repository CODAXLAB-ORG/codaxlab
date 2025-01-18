import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSocials from "./HeroSocials";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Scroll event listener to handle fade-out
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < 100); // Adjust 100 to control when it fades out
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center h-full justify-between pt-[1.5rem] md:pt-[4rem] lg:pt-[2rem] xl:pt-[2.7rem] gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="h-auto w-full lg:max-w-[50rem] flex flex-col items-center lg:items-start gap-2 py-2">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider flex flex-col text-center lg:text-start lg:min-w-[38rem]">
          <span className="text-[1.5rem] md:text-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white">
            HERE AND NOW
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white monoton-regular pt-1 lg:pt-2">
            CODAX FUTURE
          </span>
        </h1>
        {/* Subheading */}
        <p className="text-lg md:text-3xl lg:text-2xl max-w-xl bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white text-center lg:text-start">
          A community for tech enthusiasts to connect, share knowledge, and grow together.
        </p>
        {/* Join Community Button */}
        <div className="max-w-[18rem] p-1 py-3 border-2 border-gray-500 rounded-lg shadow-lg transition-all duration-[5s] hover:shadow-2xl hover:border-gray-700">
          <Link
            to="mailto:enquiries@codaxlab.com"
            className="text-xl md:text-3xl w-full lg:text-2xl px-5 font-semibold py-2 md:py-3 xl:py-2 bg-gradient-to-r from-gray-500 to-white hover:from-white hover:to-gray-500 text-black rounded-lg shadow-lg transition-all duration-700 ease-in-out"
          >
            Join Community
          </Link>
        </div>
      </div>
      {/* Social Links */}
      <HeroSocials />
    </motion.div>
  );
};

export default HeroSection;
