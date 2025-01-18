import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
// import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SpotlightCard } from '../cards/SpotlightCard';

interface Feature {
  title: string;
  description: string;
}


const HomeAboutSection: React.FC = () => {
  const navigate = useNavigate();

  const features: Feature[] = [
    { title: 'Events', description: 'Exciting workshops, hackathons, and meetups for tech enthusiasts' },
    { title: 'Mission', description: 'Empowering innovators to shape the future of technology' },
    { title: 'Vision', description: 'Fostering a collaborative tech ecosystem that drives global impact' },
    { title: 'Core Values', description: 'Innovation, collaboration, inclusivity, and continuous learning' },
    { title: 'Donate', description: 'Support our initiatives to advance technology and nurture talent' },
    { title: 'Benefits', description: 'Access to resources, mentorship, and a vibrant tech community' },
  ];


  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-10 bg-transparent text-white w-full md:w-auto">
      <div className="container mx-0 px-4 flex flex-col justify-center items-center">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-[1.5rem] md:text-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white font-bold uppercase">About Our Community</h2>
          <p className="text-md md:text-xl text-gray-400">
            We're a team of passionate individuals dedicated to creating innovative solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-10 place-content-center w-full md:w-auto">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
            >
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </SpotlightCard>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleContactClick}
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-black bg-gradient-to-r from-gray-500 to-white hover:from-white hover:to-gray-500 rounded-full shadow-lg transition duration-300"
          >
            Contact Us
            <FaArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
