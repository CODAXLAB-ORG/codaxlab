import ballImage from "../assets/CODAXLABLOGO.png";
import { useState } from "react";
import ContactUsHero from "../components/contact-us/ContactUsHero";

const faqsQ: {
  id: string;
  question: string;
  isOpen: boolean;
  answer: string;
}[] = [
  {
    id: "f1",
    question: "How can we help you?",
    isOpen: false,
    answer:
      "Our team is here to assist you with any questions or concerns you may have.",
  },
  {
    id: "f2",
    question: "What is your response time?",
    isOpen: false,
    answer:
      "We typically respond to all inquiries within 24 hours during business days.",
  },
  {
    id: "f3",
    question: "Do you offer technical support?",
    isOpen: false,
    answer:
      "Yes, we provide comprehensive technical support for all our products and services.",
  },
];

export default function Contact() {
  const [faqs, setFaqs] = useState(faqsQ);
  const team: {
    name: string;
    role: string;
    image: string;
  }[] = [
    { name: "Sarah Wilson", role: "Product Manager", image: ballImage },
    { name: "Alex Chen", role: "Lead Developer", image: ballImage },
    { name: "Maria Garcia", role: "Designer", image: ballImage },
    { name: "James Lee", role: "Support Lead", image: ballImage },
  ];

  const handleAccordianClick = (id: string) => {
    setFaqs(
      faqs.map((faq) => {
        if (faq.id === id) {
          faq.isOpen = !faq.isOpen;
        }
        return faq;
      })
    );
  };

  return (
    <section className="flex flex-col pt-[0.6rem] mt-6 w-full px-18">
      <ContactUsHero />

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="space-y-6">
          <h1 className="text-center mb-4 text-4xl font-semibold">
            We'd Love to Hear From Your!
          </h1>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-left" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                placeholder="Enter your name"
                className="bg-gray-900 p-2 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-left" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 p-2 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-left" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                placeholder="Enter subject"
                className="bg-gray-900 p-2 rounded-md"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-left" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[150px] bg-gray-900 p-2 rounded-md"
              />
            </div>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-md">
            Send Message
          </button>
        </div>

        {/* Contact Information */}
        <div className="space-y-8 bg-white rounded-xl shadow-lg py-4 px-5">
          <div className="bg-[393A3C]">
            <div>
              <h1 className="text-center text-black mb-4 text-4xl font-semibold">
                Contact Information
              </h1>
              <p className="text-center mb-4 mx-12 text-black">
                Have questions or feedback? Fill out the form below, and we’ll
                get back to you shortly!
              </p>
            </div>
            <div>
              <div className="space-y-4">
                {team.map((member, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div>
                      <img
                        className="w-[6rem] h-[6rem] rounded-full"
                        src={member.image}
                        alt={member.name}
                      />
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <p className="text-black text-md">{member.name}</p>
                      <div className="text-md text-gray-400">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <div>
          <div>
            <h1 className="text-center mb-6 text-4xl md:text-6xl lg:text-7xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-center mb-4">
              Find quick answers to common questions about our community,
              services, and more.
            </p>
          </div>
          <div>
            <div className="w-full md:px-36">
              {faqs.map((faq, index) => (
                <div key={index} className="my-2">
                  <div
                    className={`w-full px-4 flex justify-between p-4 bg-white ${
                      faq.isOpen ? "rounded-t-md" : "rounded-md"
                    }`}
                  >
                    <p className="text-black text-left">{faq.question}</p>
                    <p
                      onClick={() => handleAccordianClick(faq.id)}
                      className="text-black text-left"
                    >
                      {faq.isOpen ? <p>up</p> : <p>down</p>}
                    </p>
                  </div>
                  {faq.isOpen && (
                    <div className={"bg-white p-0 px-4 rounded-b-md"}>
                       <hr  className="h-px bg-gray-200 border-0"/>
                      <p className="text-black text-left py-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-end w-full max-w-[500px] self-center mt-6">
            <h1 className="text-center mb-6 text-4xl font-bold">
            Your Tech Community Awaits!
            </h1>
            <p className="text-center mb-4">
            Connect with like-minded individuals, gain access to exclusive resources, and grow your tech career.
            </p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-md">
            Join The Community
          </button>
          </div>
    </section>
  );
}
