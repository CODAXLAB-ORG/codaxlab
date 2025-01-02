import HeroSocials from "./HeroSocials";


const HeroSection: React.FC = () => {


  return (
    <div className="flex flex-col lg:flex-row items-center h-full justify-between pt-[8rem] lg:pt-[2.7rem] xl:pt-20 gap-3">
      <div className="h-auto w-full lg:max-w-[50rem] flex flex-col items-center lg:items-start gap-4 py-2">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider flex flex-col text-center lg:text-start lg:min-w-[38rem]">
          <span className="text-[1.5rem] md:text-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white">HERE AND NOW</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white monoton-regular pt-4">
            CODAX FUTURE
          </span>
        </h1>
        <p className="text-lg md:text-3xl max-w-xl bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white text-center lg:text-start">
          Discover the intersection of innovation and intelligence. Scroll to explore.
        </p>
        <div className="max-w-[15rem] p-1 border-2 border-gray-500 rounded-lg shadow-lg transition-all duration-[5s]">
            <button className="text-xl md:text-3xl w-full px-5 font-semibold py-2 md:py-3 xl:py-2 bg-gradient-to-r from-gray-500 to-white hover:from-white hover:to-gray-500 text-black rounded-lg shadow-lg transition-all duration-[5s]">
              Get Started
            </button>
        </div>
      </div>
      <HeroSocials/>
    </div>
  );
};

export default HeroSection;
