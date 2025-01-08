import { motion } from "framer-motion";
import { Input } from "antd";
import { QuestionCircleOutlined, SendOutlined } from "@ant-design/icons";

export default function About() {
	return (
		<section className="text-gray-100 font-sans">
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
				<p className="text-lg text-gray-300 mt-4 max-w-2xl">
					Empowering innovation and driving excellence in a rapidly evolving
					digital world.
				</p>
			</motion.div>

			{/* About Us Section */}
			<div className="container mx-auto px-6 py-16">
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
						<h2 className="text-4xl font-bold text-white mb-4">
							We Always Make The Best
						</h2>
						<p className="text-lg text-gray-400 mb-6">
							At <span className="font-semibold text-white">CodaxLab</span>, we
							specialize in crafting innovative and high-performance software
							solutions. With a dedication to excellence and a focus on
							innovation, we ensure that every project meets the highest
							standards.
						</p>
						<button className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition">
							Contact Us
						</button>
					</div>
				</div>
			</div>

			{/* Core Values Section */}
			<div className="container mx-auto px-6 py-16">
				<h2 className="text-4xl font-bold text-center text-white mb-12">
					What Drives Us
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Vision Section */}
					<div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
						<h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
						<p className="text-gray-400">
							To shape the future of technology by fostering innovation and
							building solutions that make a lasting impact globally.
						</p>
					</div>

					{/* Mission Section */}
					<div className="bg-gray-900 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center border-t-4 border-indigo-500">
						<h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
						<p className="text-gray-400">
							To empower businesses by delivering high-performance software
							solutions that solve real-world challenges with creativity and
							excellence.
						</p>
					</div>

					{/* Core Values Section */}
					<div className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
						<h3 className="text-2xl font-bold text-white mb-4">
							Our Core Values
						</h3>
						<ul className="space-y-4 text-left">
							<li className="text-gray-400">
								<strong className="text-indigo-500">Innovation:</strong>{" "}
								Pioneering new ideas and technologies.
							</li>
							<li className="text-gray-400">
								<strong className="text-indigo-500">Integrity:</strong> Building
								trust through honesty and transparency.
							</li>
							<li className="text-gray-400">
								<strong className="text-indigo-500">Sustainability:</strong>{" "}
								Fostering environmentally conscious solutions.
							</li>
							<li className="text-gray-400">
								<strong className="text-indigo-500">Collaboration:</strong>{" "}
								Empowering teamwork to achieve greatness.
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* FAQs Section */}
			<div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
				{/* FAQ List */}
				<div>
					<h2 className="text-4xl font-bold text-white mb-8">
						Frequently Asked Questions
					</h2>
					<div className="space-y-4">
						{[
							{
								question: "What services do you provide?",
								answer:
									"We offer custom software solutions, consulting, and design.",
							},
							{
								question: "How can I collaborate with CodaxLab?",
								answer:
									"Reach out to us via the contact page or explore our careers.",
							},
							{
								question: "What industries do you work with?",
								answer:
									"We cater to a wide range of industries, including tech, healthcare, and finance.",
							},
						].map((faq, index) => (
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

				{/* Ant Design Illustration and Contact Form */}
				<div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
					<h3 className="text-2xl font-bold text-white mb-4">Any Questions?</h3>
					<p className="text-gray-400 mb-6">
						You can ask anything you want to know about CodaxLab.
					</p>
					{/* Ant Design Illustration */}
					<div className="w-48 h-48 mx-auto mb-6 text-indigo-500">
						<QuestionCircleOutlined style={{ fontSize: "8rem" }} />
					</div>
					{/* Contact Form */}
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
				</div>
			</div>

			{/* Call-to-Action Section */}
			<motion.div
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
			</motion.div>
		</section>
	);
}
