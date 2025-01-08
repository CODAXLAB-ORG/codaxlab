
import SocialLinks from "./SocialLinks"

const ContactUsHero = () => {
  return (
    <div className="flex gap-6 flex-col h-96 w-full justify-center items-center">
      <h1 className="text-center md:text-left mb-4 text-5xl md:text-6xl lg:text-7xl font-bold">
        Get in Touch with Us
      </h1>
      <p className="text-center md:text-left text-gray-400">
        Have questions? We'd love to hear from you. Send us a message and we'll
        respond as soon as possible.
      </p>
      <button className="w-full md:w-[15rem] bg-blue-600 hover:bg-blue-700 p-3 rounded-md">
        Join the Community
      </button>
      <SocialLinks />
    </div>
  );
};

export default ContactUsHero;
