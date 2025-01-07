import ProfileRings from "./ProfileRings"


const ContactUsHero = () => {
  return (
    <div className="flex flex-1 flex-col md:flex-row md:justify-between mb-32 mt-16 lg:gap-[25rem]">
        <div className="flex gap-6 flex-col">
          <h1 className="text-center sm:text-left mb-4 text-4xl md:text-6xl lg:text-7xl font-bold">
            Get in Touch with Us
          </h1>
          <p className="text-center sm:text-left text-gray-400">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
          <button className="w-full sm:w-[15rem] bg-blue-600 hover:bg-blue-700 p-3 rounded-md">
          Join the Community
          </button>
        </div>
        <div className="self-center flex items-center justify-center mt-4">
          <ProfileRings />
        </div>
      </div>
  )
}

export default ContactUsHero
