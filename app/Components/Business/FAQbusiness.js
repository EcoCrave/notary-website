"use client";
import React, { useState } from "react";

const FAQbusiness = () => {
  const faqs = [
    {
      question: "What is a notary for business?",
      answer:
        "A notary for business authenticates and verifies documents like contracts, agreements, and affidavits, ensuring their legality and validity.",
    },
    {
      question: "Why do businesses need notarization?",
      answer:
        "Notarization prevents fraud, confirms document authenticity, and ensures compliance with legal standards",
    },
    {
      question: "What documents require notarization?",
      answer:
        "Common documents include contracts, leases, affidavits, loan agreements, and partnership agreements",
    },
    {
      question: "Can notarization be done online for businesses?",
      answer:
        "Yes, digital notary services allow businesses to notarize documents remotely through secure platforms.",
    },
    {
      question: "What are the benefits of business notarization?",
      answer:
        "It enhances legal protection, builds trust in transactions, and ensures document legitimacy for stakeholders",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className=" py-12  ">
      <div className="flex flex-col md:flex-row md:justify-between w-[87%] p-6 mx-auto">
        {/* Left Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <button className="mb-4 px-4 py-2 border rounded-full text-sm font-semibold text-gray-800 border-gray-300">
            FAQ'S
          </button>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4">
            Need more help?{" "}
            <a href="#" className="text-blue-600 underline">
              Contact Us
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer text-gray-900 font-semibold text-lg"
              >
                <span>{faq.question}</span>
                <span className="text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQbusiness;
