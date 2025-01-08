import { useState } from "react";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { HiArrowSmDown } from "react-icons/hi";

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

function ContactUsFAQ() {
    const [faqs, setFaqs] = useState(faqsQ);


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
    <div className="mt-12">
        <div>
          <div>
            <h1 className="text-center mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
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
                      {!faq.isOpen ? <HiArrowSmDown /> : <HiOutlineArrowSmUp />}
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
  )
}

export default ContactUsFAQ
