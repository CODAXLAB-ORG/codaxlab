
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CODAXLABLOGO from "../../assets/CODAXLABLOGO.png";
import { AiFillTikTok } from "react-icons/ai";
import { useModal } from "../../hooks/useModal";
import { Modal } from './../modals/Modal';
import PrivacyPolicy from "../Policy/PrivacyPolicy";
import FAQs from "../Policy/FAQs";

export default function Footer() {
  const { isOpen, openModal, closeModal, isOpen2, openModal2, closeModal2 } = useModal()
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="w-full lg:px-[1rem]">
      <div className="w-full px-4 md:px-[1.5rem] lg:px-[4rem] py-4 flex flex-col justify-center items-center gap-3 bg-gray-500 bg-opacity-30 backdrop-blur-md rounded-t-xl shadow-lg">
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between w-full gap-y-5 gap-x-20">
          <div className="w-full md:max-w-[20rem] text-start flex flex-col gap-4 text-[#eee]">
            <div className="w-full max-w-[8rem] bg-black px-2 p-1 rounded-lg shadow-lg overflow-hidden">
              <img src={CODAXLABLOGO} alt="photo" className="w-full" />
            </div>
            <p className="text-gray-300">
              A welcoming community for tech enthusiasts to connect, share
              knowledge, and grow together. Whether you're a beginner or an
              expert!
            </p>
          </div>
          <div className="w-full h-auto">
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-x-20">
              <div className="flex flex-col items-start gap-1 w-full text-start">
                <b className="text-white">QUICK LINKS</b>
                <ul className="grid grid-cols-2 gap-y-3 w-full py-4 text-gray-300">
                  <li className="hover:text-white transition-all duration-300">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:text-white transition-all duration-300">
                    <Link to="gallery">Gallery</Link>
                  </li>
                  <li className="hover:text-white transition-all duration-300">
                    <Link to="donate">Donate</Link>
                  </li>
                  <li className="hover:text-white transition-all duration-300">
                    <Link to="contact">Contact Us</Link>
                  </li>
                  <li className="hover:text-white transition-all duration-300">
                    <Link to="about">About Us</Link>
                  </li>
                  <li className="hover:text-white transition-all duration-300">
                    <a href="mailto:enquiries@codaxlab.com">Join us!</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-1 text-left">
                <b className="text-white uppercase">More Links</b>
                <ul className="flex flex-col gap-y-3 items-start py-4 justify-start w-full text-gray-300">
                  <li>
                    <button onClick={openModal}>
                      Privacy Policy
                    </button>

                    
                  </li>
                  <li className="hover:text-white transition-all duration-300">
                    <button onClick={openModal2}>FAQs</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="divider w-full bg-white border-t rounded-full"></div>

        <div className="flex items-center justify-between w-full gap-4">
          <p className="text-xs md:text-sm lg:text-[16px] text-gray-300 min-w-[12.7rem] text-left">
            &copy; {currentYear} CodaxLab. All Rights Reserved
          </p>
          <ul className="Socials max-w-[8rem]  grid grid-cols-4 gap-x-2 lg:gap-x-6 md:text-2xl">
            <li className="hover:text-green-500 transition-all duration-300">
              <Link to="#">
                <BsWhatsapp />
              </Link>
            </li>
            <li className="hover:text-black transition-all duration-300">
              <Link to="#">
                <RiTwitterXLine />
              </Link>
            </li>
            <li className="hover:text-black transition-all duration-300">
              <Link to="#">
                <AiFillTikTok />
              </Link>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300">
              <Link to="#">
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Privacy Policy"

      >
        <PrivacyPolicy/>
      </Modal>

      <Modal
        isOpen={isOpen2}
        onClose={closeModal2}
        title="Frequently Asked Questions"

      >
        <FAQs/>
      </Modal>
    </footer>
  );
}
