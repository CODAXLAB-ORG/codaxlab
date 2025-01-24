// import React from 'react'
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection/HeroSection";
import HomeAboutSection from "../components/HomeSections/HomeAboutSection";
import HomeGallerySection from "../components/HomeSections/HomeGallerySection";
import { Link } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="flex flex-col h-auto "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col justify-between h-auto"
        variants={itemVariants}
      >
        <HeroSection />
        <motion.div
          className="flex flex-col md:flex-row items-center justify-end w-full h-full"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        >
          <motion.div
            className="lg:max-w-[40rem] p-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-auto glass-effect border-2 border-gray-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <b>TECHNOLOGY</b>
              <p className="text-xs md:text-sm text-gray-400">
                We harness advanced tools and frameworks to develop scalable,
                high-performance solutions. Our focus is on creating systems
                that empower tech enthusiasts to connect, collaborate, and share
                knowledge, driving growth within the tech community.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <b>INNOVATION</b>
              <p className="text-xs md:text-sm text-gray-400">
                Innovation is at the heart of what we do. Our designers craft
                intuitive and visually appealing interfaces that inspire
                creativity and foster meaningful connections. By blending
                functionality with design excellence, we create platforms where
                ideas can thrive.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* All other home page components here */}
      <motion.section
        className="py-20 flex flex-col gap-y-20 h-auto no-scrollbar w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <HomeAboutSection />
        <HomeGallerySection />
        <section className="w-full h-auto flex justify-center pt-2 md:pt-7">
          <div className="text-center w-full max-w-6xl flex flex-col gap-4 items-center">
            <h2 className="text-[1.5rem] md:text-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white font-bold uppercase">
              Our Community
            </h2>
            <p className="text-md md:text-xl text-gray-200 px-1">
              From developers building solutions to users worldwide, each
              individual contributes significantly to our mission. Together,
              we've helped each other through innovative technology, bridging
              gaps with tools, knowledge, and opportunities.
            </p>

            <p className="text-md md:text-xl text-gray-200 px-1">
              But our work is far from over. With your support, we can reach
              even more people and create lasting change in communities around
              the world.
            </p>

            <p className="text-md md:text-xl text-gray-200 px-1">
              Our community also organizes hackathons to motivate techies. We
              are a space for tech enthusiasts to connect, share knowledge, and
              grow together.
            </p>

            <Link
              to="donate"
              className="flex items-center justify-between gap-4 mt-3 px-3 py-2 bg-gradient-to-r from-gray-500 to-white hover:from-white hover:to-gray-500 text-black rounded-full shadow-lg"
            >
              <span className="pl-3 px-2 text-xl">Donate today</span>
              <div className="px-2 py-2 bg-black text-white rounded-full text-xl flex items-center justify-center">
                <CiLocationArrow1 />
              </div>
            </Link>
          </div>
        </section>
      </motion.section>
    </motion.section>
  );
}
