import React from "react";
import { Link } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import { topRowData } from "./topRowData";
import { bottomRowData } from "./bottomRowData";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface EventData {
  image: string;
  label: string;
}

export default function HomeGallerySection(): JSX.Element {
  const controls = useAnimation();
  const sectionRef = useRef<null | HTMLDivElement>(null);

  // Intersection Observer for triggering animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.2 } // Trigger animation when at least 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const hoverEffect = {
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" },
  };

  return (
    <div ref={sectionRef} className="no-scrollbar flex flex-col w-full items-center justify-center py-6 h-auto lg:glass-effect md:border-2 md:border-gray-400">
      <motion.h1
        className="text-[1.5rem] md:text-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white font-bold uppercase"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        Our Recent Events
      </motion.h1>
      <motion.p
        className="text-md md:text-xl lg:text-lg max-w-2xl bg-clip-text text-gray-400 text-center pb-2"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        Explore the highlights of our recent events, featuring innovation,
        teamwork, and networking opportunities.
      </motion.p>

      {/* Top Row */}
      <motion.div
        className="no-scrollbar flex flex-col gap-2 items-center justify-center w-full py-2 h-auto"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <div className="no-scrollbar flex items-center gap-2 justify-start w-full overflow-x-auto scroll-smooth snap-x md:max-w-[80rem] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {topRowData.map((item: EventData, index: number) => (
            <motion.div
              key={index}
              className="relative h-[12rem] min-w-[18rem] md:min-w-[25rem] overflow-hidden rounded-xl shadow-xl snap-start transition-all duration-700 ease-in-out"
              whileHover="hover"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { delay: index * 0.1, duration: 0.6 } },
              }}
            >
              <img
                src={item.image}
                alt="event"
                className="w-full h-full object-cover bg-center"
              />
              <div className="absolute top-0 left-0 bg-black bg-opacity-20 w-full h-full flex items-end justify-end z-10 p-2">
                <motion.h1
                  className="text-gray-800 min-w-[5rem] py-1 bg-white bg-opacity-70 px-4 text-right rounded-full"
                  variants={hoverEffect}
                >
                  {item.label}
                </motion.h1>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="no-scrollbar w-full flex items-center justify-center">
          <div className="no-scrollbar flex items-center gap-2 justify-start w-full overflow-x-auto scroll-smooth snap-x md:max-w-[60rem] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {bottomRowData.map((item: EventData, index: number) => (
              <motion.div
                key={index}
                className="relative h-[9rem] min-w-[14rem] max-w-[16rem] overflow-hidden rounded-xl shadow-xl snap-start transition-all duration-700 ease-in-out"
                whileHover="hover"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { delay: index * 0.1, duration: 0.6 } },
                }}
              >
                <img
                  src={item.image}
                  alt="event"
                  className="w-full h-full object-cover bg-center"
                />
                <div className="absolute top-0 left-0 bg-black bg-opacity-20 w-full h-full flex items-end justify-end z-10 p-2">
                  <motion.h1
                    className="text-gray-800 min-w-[5rem] py-1 bg-white bg-opacity-70 px-4 text-right rounded-full"
                    variants={hoverEffect}
                  >
                    {item.label}
                  </motion.h1>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* See More Button */}
      <motion.div className="py-5" variants={fadeInUp} initial="hidden" animate={controls}>
        <Link
          to="gallery"
          className="flex items-center justify-between gap-4 px-3 py-2 bg-gradient-to-r from-gray-500 to-white hover:from-white hover:to-gray-500 text-black rounded-full shadow-lg"
        >
          <span className="pl-3 px-2 text-xl">See More</span>
          <div className="px-2 py-2 bg-black text-white rounded-full text-xl flex items-center justify-center">
            <CiLocationArrow1 />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
