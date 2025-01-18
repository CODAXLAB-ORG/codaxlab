// import React from 'react'
// import { SpotlightCard } from '../components/cards/SpotlightCard'
import HeroSection from '../components/HeroSection/HeroSection'
import HomeAboutSection from '../components/HomeSections/HomeAboutSection'
import HomeGallerySection from '../components/HomeSections/HomeGallerySection'

export default function Home() {
  return (
      <section className='flex flex-col h-auto'>
          <div className='flex flex-col justify-between h-auto'>
              <HeroSection />
              <div className="flex flex-col md:flex-row items-center justify-end w-full h-full">
                  <div className="lg:max-w-[40rem] p-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-auto glass-effect border-2 border-gray-400">
                      <div>
                          <b>TECHNOLOGY</b>
                          <p className='text-xs md:text-sm text-gray-400'>
                            Our team of developers excels in leveraging cutting-edge tools and frameworks to create robust, 
                              scalable, and high-performance software solutions. From backend systems to interactive frontends,
                              we ensure every product meets modern technological standards.
                          </p>
                      </div>
                      <div>
                          <b>INNOVATION</b>
                          <p className='text-xs md:text-sm text-gray-400'>
                              Our designers push creative boundaries to craft unique, user-friendly, and visually appealing interfaces.
                              Combining functionality with aesthetic appeal, we focus on delivering designs that not only meet client
                              expectations but also enhance user experiences.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          {/* All other home page components here */}
          <section className='py-5 h-auto no-scrollbar w-full'>
              <HomeAboutSection/>
              <HomeGallerySection/>
          </section>
          {/* <section>
            <SpotlightCard>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Dynamic Spotlight</h3>
                <p className="text-gray-300">
                Hover over this card to see the dynamic spotlight effect.
                </p>
            </SpotlightCard>
          </section> */}
      </section>
  )
}
