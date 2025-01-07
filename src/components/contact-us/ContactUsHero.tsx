import ProfileRings from "./ProfileRings"


const ContactUsHero = () => {
  return (
    <div className="flex flex-1 flex-col md:flex-row md:justify-between mb-24 mt-16">
        <div className="flex gap-6 flex-col">
          <h1 className="text-center md:text-left mb-4 text-5xl md:text-7xl lg:text-8xl font-bold">
            Get in Touch <br /> with Us
          </h1>
          <p className="text-center md:text-left text-gray-400">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
          <button className="w-full md:w-[15rem] bg-blue-600 hover:bg-blue-700 p-3 rounded-md">
          Join the Community
          </button>
        </div>
        <div className="mt-4 p-8 flex justify-center items-center w-1/3 h-2/3 bg-green-400">
          {/* <ProfileRings /> */}
        </div>
      </div>
  )
}

export default ContactUsHero
