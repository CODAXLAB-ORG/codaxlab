// import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'

export default function Home() {
  return (
      <div className='flex flex-col h-auto pt-40 lg:pt-50 mt-[7rem] md:mt-[5rem] lg:mt-0'>
          <div className='flex flex-col justify-between h-auto pt-20'>
              <HeroSection />
              <div className="flex flex-col md:flex-row items-center justify-end w-full h-full">
                  <div className="lg:max-w-[40rem] p-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-auto glass-effect border-2 border-gray-400">
                      <div>
                          <b>TECHNOLOGY</b>
                          <p className='text-xs md:text-sm lg:text-xs text-gray-400'>
                            Our team of developers excels in leveraging cutting-edge tools and frameworks to create robust, 
                              scalable, and high-performance software solutions. From backend systems to interactive frontends,
                              we ensure every product meets modern technological standards.
                          </p>
                      </div>
                      <div>
                          <b>INNOVATION</b>
                          <p className='text-xs md:text-sm lg:text-xs text-gray-400'>
                              Our designers push creative boundaries to craft unique, user-friendly, and visually appealing interfaces.
                              Combining functionality with aesthetic appeal, we focus on delivering designs that not only meet client
                              expectations but also enhance user experiences.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div>Hello world testing......</div>
      </div>
  )
}
