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
                              We harness advanced tools and frameworks to develop scalable,
                              high-performance solutions. Our focus is on creating systems that empower
                              tech enthusiasts to connect, collaborate, and share knowledge, driving growth within the tech community.
                          </p>
                      </div>
                      <div>
                          <b>INNOVATION</b>
                          <p className='text-xs md:text-sm text-gray-400'>
                              Innovation is at the heart of what we do. Our designers craft intuitive and visually appealing interfaces
                              that inspire creativity and foster meaningful connections.
                              By blending functionality with design excellence, we create platforms where ideas can thrive.
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
