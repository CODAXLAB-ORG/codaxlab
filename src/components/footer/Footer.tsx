import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CODAXLABLOGO from "../../assets/CODAXLABLOGO.png"
import { AiFillTikTok } from "react-icons/ai";
import BottomDrawer from "../drawers/BottomDrawer";


export default function Footer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isDrawerOpen2, setIsDrawer2Open] = useState(false)
  const currentYear: number = new Date().getFullYear()
  
  return (
    <footer className="w-full lg:px-[1rem]">
      <div className="w-full px-4 md:px-[1.5rem] lg:px-[4rem] py-4 flex flex-col justify-center items-center gap-3 bg-gray-500 bg-opacity-30 backdrop-blur-md rounded-t-xl shadow-lg">
        <div className="w-full h-auto flex flex-col md:flex-row md:justify-between py-5 gap-4 ">
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-start gap-1 text-start">
              <b className="text-gray-300">QUICK LINKS</b>
              <ul className="grid grid-cols-2 w-full gap-3 text-gray-400">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="donate">Donate</Link>
                </li>
                <li>
                  <Link to="contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="about">About Us</Link>
                </li>
                <li>
                  <Link to="mailto:enquiries@codaxlab.com">Join the Community</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-1 text-left">
              <b className="text-gray-300 uppercase">More Links</b>
              <ul className="grid grid-cols-2 w-full text-gray-400">
                <li>
                  <button onClick={() => setIsDrawerOpen(true)}>Privacy Policy</button>
      
                  <BottomDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                    <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
                    <div className="max-h-[30rem] overflow-y-auto pb-[7rem] no-scrollbar">
                      <p className="mb-4">This is a modern bottom drawer component built with React and Tailwind CSS.</p>
                      <p className="mb-4">It's responsive, accessible, and has smooth animations powered by Framer Motion.</p>
                    </div>
                  </BottomDrawer>
                </li>
                <li>
                  <button onClick={() => setIsDrawer2Open(true)}>FAQs</button>
      
                  <BottomDrawer isOpen={isDrawerOpen2} onClose={() => setIsDrawer2Open(false)}>
                    <h2 className="text-xl font-semibold mb-4">Frequently asked questions</h2>
                    <div className="max-h-[30rem] overflow-y-auto pb-[7rem] no-scrollbar">
                      <p className="mb-4">This is movicx a modern bottom drawer component built with React and Tailwind CSS.</p>
                      <p className="mb-4">It's responsive, accessible, and has smooth animations powered by Framer Motion.</p>
                      <p className="mb-4">This is movicx a modern bottom drawer component built with React and Tailwind CSS.</p>
                      <p className="mb-4">It's responsive, accessible, and has smooth animations powered by Framer Motion.</p>
                      <p className="mb-4">This is movicx a modern bottom drawer component built with React and Tailwind CSS.</p>
                      <p className="mb-4">It's responsive, accessible, and has smooth animations powered by Framer Motion.</p>
                      <p className="mb-4">This is movicx a modern bottom drawer component built with React and Tailwind CSS.</p>
                      <p className="mb-4">It's responsive, accessible, and has smooth animations powered by Framer Motion.</p>
                      <p className="mb-4">This is movicx a modern bottom drawer component built with React and Tailwind CSS.</p>
                      <p className="mb-4">It's responsive, accessible, and has smooth animations powered by Framer Motion.</p>
                      {/* <button onClick={() => setIsDrawer2Open(false)}>Close Drawer</button> */}
                    </div>
                    
                  </BottomDrawer>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:max-w-[20rem] text-start flex flex-col gap-2 text-gray-400">
            <div className="w-full max-w-[8rem] bg-black px-2 p-1 rounded-lg shadow-lg overflow-hidden">
              <img src={CODAXLABLOGO} alt="photo" className="w-full"/>
            </div>
            <p>A welcoming community for tech enthusiasts to connect,
              share knowledge,
              and grow together. Whether you're a beginner or an expert!
            </p>  
          </div>
        </div>
        <div className="divider w-full h-[5px] bg-gray-400 rounded-full"></div>
        <div className="flex items-center justify-between w-full gap-4">
          <p className="text-xs md:text-sm lg:text-lg text-gray-500 min-w-[12.7rem] text-left">&copy; {currentYear} CodaxLab. All Rights Reserved</p>
          <ul className="Socials max-w-[7rem] w-full grid grid-cols-4 gap-2 md:text-2xl">
            <li className="">
              <Link to="#"><BsWhatsapp /></Link>
            </li>
            <li>
              <Link to="#"><RiTwitterXLine /></Link>
            </li>
            <li>
              <Link to="#"><AiFillTikTok /></Link>
            </li>
            <li>
              <Link to="#"><FaLinkedinIn /></Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
