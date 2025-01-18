import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { SpotlightCard } from '../cards/SpotlightCard';
import { motion } from 'framer-motion';

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

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  return (
    <section className="py-10 bg-transparent text-white w-full md:w-auto">
      <div className="container flex flex-col justify-center items-center">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <h2 className="text-[1.5rem] md:text-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white font-bold uppercase">
            About Our Community
          </h2>
          <p className="text-md md:text-xl text-gray-400 px-4">
            We're a team of passionate individuals dedicated to creating innovative solutions that make a difference.
          </p>
        </div>

        {/* Cards Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-8 place-content-center w-full md:w-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <SpotlightCard>
                <h3 className="text-lg md:text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white uppercase">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-black bg-gradient-to-r from-gray-500 to-white hover:from-white hover:to-gray-500 rounded-full shadow-lg transition duration-300"
          >
            Contact Us
            <FaArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
