import { motion } from "framer-motion";
import { faqData } from "../components/Policy/faqData";

export default function About() {
  return (
    <section className="text-gray-100 font-sans px-3">
      {/* Header Section */}
      <motion.div
        className="relative w-full h-96 bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/236x/96/1d/27/961d27ec840890c86fc3cde4824c95cb.jpg')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">About Us at CodaxLab</h1>
        <p className="text-lg text-[#eee] mt-4 max-w-2xl">
          A vibrant tech community where innovation meets collaboration.
        </p>
      </motion.div>

      {/* About Us Section */}
      <div className="container mx-auto py-16 px-2 sm:py-24 sm:px-12 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://i.pinimg.com/236x/25/0f/d7/250fd7d90bcb46b73ec95dc5cbb116be.jpg"
              alt="About Us"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Text */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-white mb-4">Who We Are </h2>
            <p className="text-lg text-[#eee] mb-6">
              At <span className="font-semibold text-white">CodaxLab</span>, we
              we are a growing community of tech enthusiasts, innovators, and
              learners committed to driving excellence in technology. Our goal
              is to create an inclusive space for sharing knowledge, building
              projects, and growing together.
            </p>
            <a href="https://chat.whatsapp.com/HkNUR3Qvs6KIPpBStJKNeQ">
              <button className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition">
                Join Our Community
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="container mx-auto px-2 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our Community Pillars{" "}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Vision Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To build a thriving tech community that fosters creativity,
              learning, and collaboration while shaping the future of
              technology.
            </p>
          </div>

          {/* Core Values Section */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-indigo-500">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Core Values
            </h3>
            <ul className="space-y-4 text-left">
              <li className="text-gray-400">
                <strong className="text-indigo-500">Collaboration:</strong>{" "}
                Building together to achieve greater impact.
              </li>
              <li className="text-gray-400">
                <strong className="text-indigo-500">Growth:</strong> Empowering
                continuous learning and skill development.
              </li>
              <li className="text-gray-400">
                <strong className="text-indigo-500">Diversity:</strong>{" "}
                Celebrating diverse perspectives and backgrounds.
              </li>
              <li className="text-gray-400">
                <strong className="text-indigo-500">Innovation:</strong>{" "}
                Encouraging bold ideas and creative solutions.
              </li>
            </ul>
          </div>
          {/* Mission Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To empower individuals by connecting them to resources,
              mentorship, and opportunities that help them grow and succeed in
              tech.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="container mx-auto px-2 py-16">
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <summary className="text-lg font-bold text-white flex justify-between items-center cursor-pointer">
                  <span>{faq.question}</span>
                  <svg
                    className="w-6 h-6 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
      {/* Ant Design Illustration and Contact Form */}
      {/* <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
					<h3 className="text-2xl font-bold text-white mb-4">Any Questions?</h3>
					<p className="text-gray-400 mb-6">
						You can ask anything you want to know about CodaxLab.
					</p>
					<div className="w-48 h-48 mx-auto mb-6 text-indigo-500">
						<QuestionCircleOutlined style={{ fontSize: "8rem" }} />
					</div>
					<div className="w-full">
						<label className="block text-gray-400 text-sm mb-2" htmlFor="name">
							Let me know
						</label>
						<Input
							placeholder="Enter your query here"
							className="bg-gray-700 text-gray-200 border-none rounded-lg"
							suffix={
								<SendOutlined
									className="text-indigo-500 cursor-pointer"
									style={{ fontSize: "1.5rem" }}
									onClick={() => console.log("Send button clicked")}
								/>
							}
						/>
					</div>
				</div> */}

      {/* Call-to-Action Section */}
      {/* <motion.div
        className="relative w-full h-80 bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/1b/21/24/1b2124782a1fa3ba4b150d03b8b69124.jpg')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-white">Join Us</h2>
        <p className="text-lg text-gray-300 mt-4">
          Shape the future of technology with us.
        </p>
        <button className="mt-6 px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition">
          Explore Careers
        </button>
      </motion.div> */}
    </section>
  );
}
