// Header.tsx
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import CODAXLABLOGO from "../../assets/CODAXLABLOGO.png";

import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";

const linkClasses =
  "flex items-center text-white font-semibold hover:text-gray-300 space-x-2";

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

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "gallery", label: "Gallery" },
    { to: "donate", label: "Donate" },
    { to: "about", label: "About" },
    { to: "contact", label: "Contact Us" },
  ];

  return (
    <header className="text-white z-[100]">
      {/* desktop Menu */}

      <nav className="py-2 bg-opacity-30 backdrop-blur-md shadow-full">
        <div className="px-4 lg:px-20 flex justify-between items-center">
          <img
            src={CODAXLABLOGO}
            alt="logo"
            className="w-[7.5rem] md:w-[10rem] rounded-lg"
          />

          <ul className="hidden lg:flex items-center space-x-6 h-[4rem] px-5 uppercase text-[0.8rem]">
            {navLinks.map((link) => (
              <li key={link.to} className="relative group">
                <Link
                  to={link.to}
                  className={
                    activeSection === link.to
                      ? `${linkClasses} underline underline-offset-2 w-full px-2 py-2 shadow-custom rounded `
                      : linkClasses
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-white via-gray to-black  transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            <button>
              <a
                href="mailto:enquiries@codaxlab.com "
                className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
              >
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-white rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-gray-400 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-gray-300 rounded-full blur-md"></span>
                </span>
                <span className="relative text-black font-bold">
                  Join The Community
                </span>
              </a>
            </button>
          </ul>

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
                <CgMenuRight className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-90 transform overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden w-3/4 max-w-sm bg-black bg-opacity-30 backdrop-blur-md rounded-lg shadow-full`}
      >
        <nav className="pl-4 flex flex-col justify-between h-full gap-1">
          <div className="text-2xl font-bold h-[4.3rem] flex items-center pt-1">
            <img
              src={CODAXLABLOGO}
              alt="logo"
              className="w-[7.5rem] md:w-[10rem] rounded-lg"
            />
          </div>
          <ul className="flex flex-col items-start justify-start h-full space-y-4 gap-3 border-r-2 border-gray-700 pt-3 pb-9 pr-4 pl-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={
                    activeSection === link.to
                      ? `${linkClasses} underline underline-offset-2 w-full px-2 py-2 shadow-custom rounded `
                      : linkClasses
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button className="flex items-center justify-start w-full h-full max-h-[5rem] border-r-2 border-gray-700 pr-4">
            <a
              href="mailto:enquiries@codaxlab.com"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium rounded-lg shadow-2xl group w-full"
            >
              <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-white rounded-full blur-md ease"></span>
              <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-gray-400 rounded-full blur-md"></span>
                <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-gray-300 rounded-full blur-md"></span>
              </span>
              <span className="relative text-black font-bold">
                Join The Community
              </span>
            </a>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
