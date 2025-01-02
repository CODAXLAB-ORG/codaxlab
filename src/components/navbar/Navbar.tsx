// Header.tsx
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import CODAXLABLOGO from "../../assets/CODAXLABLOGO.png"

import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";

const linkClasses = "flex items-center hover:text-gray-400 space-x-2";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  // const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect which section is currently active on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="bg-transparent text-white sticky top-0 left-0 z-[100]">
      <div className="h-[3.5rem] md:h-[4.3rem] mx-auto px-4 lg:px-[4rem] flex justify-between items-center py-4 glass-effect md:bg-transparent md:bg-opacity-none md:backdrop-blur-none md:rounded-none">
        {/* Logo */}
        <div className=" h-[4rem] flex items-center lg:glass-effect lg:px-3">
            <img src={CODAXLABLOGO} alt="logo" className="w-[7.5rem] md:w-[10rem] rounded-lg"/>
        </div>

        {/* Navigation links for larger screens */}
        <nav className="hidden lg:flex space-x-6 bg-black bg-opacity-30 backdrop-blur-md rounded-lg shadow-full h-[4rem] px-5 uppercase text-[0.8rem]">
          <Link
            to="/"
            className={
              activeSection === "/"
                ? `${linkClasses} underline underline-offset-2 w-full px-2 py-2 shadow-custom rounded `
                : linkClasses
            }
            onClick={() => setIsOpen(false)}
          >
             <span>Home</span>
          </Link>
          <Link
            to="gallery"
            className={
              activeSection === "gallery"
                ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                : linkClasses
            }
            onClick={() => setIsOpen(false)}
          >
            
            <span>Gallery</span>
          </Link>

          <Link
            to="donate"
            className={
              activeSection === "donate"
                ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                : linkClasses
            }
            onClick={() => setIsOpen(false)}
          >
            
            <span>Donate</span>
          </Link>
          <Link
            to="about"
            className={
              activeSection === "about"
                ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                : linkClasses
            }
            onClick={() => setIsOpen(false)}
          >
        
            <span>About</span>
          </Link>
          <Link
            to="contact"
            className={
              activeSection === "contact"
                ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                : linkClasses
            }
            onClick={() => setIsOpen(false)}
          >
        
            <span >Contact Us</span>
          </Link>
          <div className="flex items-center space-x-2 ">
            <a
              href="tel:+12702902019"
              className="px-4 py-2 rounded w-full max-w-[20rem] font-semibold text-center bg-gradient-to-r from-gray-500 to-white hover:from-white hover:to-gray-500 text-black shadow-lg transition-all duration-[5s]"
              aria-label="Login"
            >
              Join The Community
            </a>
          </div>
        </nav>

        {/* Hamburger menu for smaller screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <AiOutlineClose className="w-7 h-7" />
            ) : (
              <CgMenuRight className="w-8 h-8"/>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-90 transform overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden w-3/4 max-w-sm bg-black bg-opacity-30 backdrop-blur-md rounded-lg shadow-full`}
      >
        <nav className="pl-4 flex flex-col justify-between h-full gap-1">
        <div className="text-2xl font-bold h-[4.3rem] flex items-center pt-1">
            <img src={CODAXLABLOGO} alt="logo" className="w-[7.5rem] md:w-[10rem] rounded-lg"/>
        </div>
          <div className="flex flex-col items-start space-y-4 gap-3 border-r-2 border-gray-700 h-full max-h-[40rem] pt-3 pb-9 pr-4 pl-2">
            <Link
              to="/"
              className={
                activeSection === "/"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
               <span className="text-lg">Home</span>
            </Link>
            <Link
              to="gallery"
              className={
                activeSection === "gallery"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
               <span className="text-lg">Gallery</span>
            </Link>
            <Link
              to="donate"
              className={
                activeSection === "donate"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
             
              <span className="text-lg">Donate</span>
            </Link>
            <Link
              to="about"
              className={
                activeSection === "about"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
              
              <span className="text-lg">About</span>
            </Link>
            
            <Link
              to="contact"
              className={
                activeSection === "contact"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
             
              <span className="text-lg">Contact Us</span>
            </Link>
          </div>
          <div className="flex items-center justify-center w-full h-full max-h-[5rem] border-r-2 border-gray-700 pr-4">
            <a
              href="tel:+12702902019"
              className="px-4 py-2 rounded w-full max-w-[20rem] font-semibold text-center bg-gradient-to-r from-gray-500 to-white hover:from-white hover:to-gray-500 text-black shadow-lg transition-all duration-[5s]"
              aria-label="Login"
            >
              Join The Community
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;