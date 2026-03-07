import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CourseFAQ = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-slate-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#01377d] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-slate-300 overflow-hidden hover:border-[#39FF14] transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-[#01377d] text-lg pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-[#39FF14] text-xl flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-slate-400 text-xl flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFAQ;
