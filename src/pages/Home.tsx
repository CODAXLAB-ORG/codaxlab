// import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection/HeroSection'
import HomeAboutSection from '../components/HomeSections/HomeAboutSection'
import HomeGallerySection from '../components/HomeSections/HomeGallerySection'

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
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.section 
      className='flex flex-col h-auto' 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
    >
      <motion.div 
        className='flex flex-col justify-between h-auto' 
        variants={itemVariants}
      >
        <HeroSection />
        <motion.div
          className="flex flex-col md:flex-row items-center justify-end w-full h-full"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50, damping: 10 }}
        >
          <motion.div
            className="lg:max-w-[40rem] p-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-auto glass-effect border-2 border-gray-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <b>TECHNOLOGY</b>
              <p className='text-xs md:text-sm text-gray-400'>
                We harness advanced tools and frameworks to develop scalable,
                high-performance solutions. Our focus is on creating systems that empower
                tech enthusiasts to connect, collaborate, and share knowledge, driving growth within the tech community.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <b>INNOVATION</b>
              <p className='text-xs md:text-sm text-gray-400'>
                Innovation is at the heart of what we do. Our designers craft intuitive and visually appealing interfaces
                that inspire creativity and foster meaningful connections.
                By blending functionality with design excellence, we create platforms where ideas can thrive.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* All other home page components here */}
      <motion.section
        className='py-5 h-auto no-scrollbar w-full'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <HomeAboutSection />
        <HomeGallerySection />
      </motion.section>
    </motion.section>
  )
}
