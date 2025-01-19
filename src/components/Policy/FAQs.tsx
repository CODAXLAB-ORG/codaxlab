import { Plus } from "lucide-react";
import React, { useState } from "react";
import { faqData } from "./faqData";



const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  

  return (
    <div className="pt-2 bg-blend-normal text-gradient-to-tr from-gray-800 to-black h-[64vh] overflow-y-scroll no-scrollbar">
      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between gap-4 text-left p-2 bg-gray-300 hover:bg-gray-400 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-md font-semibold max-w-[17rem]">{faq.question}</h2>
              <Plus size={24} className="min-w-7 text-lg"/>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-black text-gray-400">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
