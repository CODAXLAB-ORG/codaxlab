import { Outlet } from "react-router-dom";
import Mouse from "../components/__mousepointer/mouse";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
// import Navbar from '../components/navbar/NavBar';


export default function MainLayout() {

  return (
    <main className="relative w-screen h-screen bg-gradient-to-br from-black to-gray-800 text-white overflow-hidden">
      

      {/* moving ball as cursor follower */}
      <Mouse/>

      {/* Overlay Content */}
      <div id="scroll-container" className="absolute inset-0 flex flex-col md:items-start justify-between text-center md:text-start gap-6 overflow-y-auto w-full no-scrollbar">
        {/* Add header or navbar here */}
        <nav className="text-white fixed top-0 w-full z-[90]">
          <Navbar />
        </nav>

        <div className="w-full px-5 lg:px-20 pb-[1rem] pt-[4rem]">
          <Outlet />
        </div>
        {/* Add footer here */}
        <Footer />
      </div>
    </main>
  );
}
