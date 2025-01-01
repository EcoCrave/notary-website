"use client";
import React, { useState } from "react";

const Faqlawfirm = () => {
  const faqs = [
    {
      question: "What is a notary service for a law firm?",
      answer:
        "A service that authenticates legal documents, ensures validity, and deters fraud through notarization, often used for contracts, affidavits, or powers of attorney.",
    },
    {
      question: "Why do law firms need notary services?",
      answer:
        "Notary services ensure legal compliance, authenticate client signatures, and provide credibility to important legal documents for court or official use",
    },
    {
      question: "Can notary services be digital for law firms?",
      answer:
        "Yes, digital notarization allows remote authentication of documents using secure online platforms, saving time and enhancing accessibility.",
    },
    {
      question: "What documents require notarization in law firms?",
      answer:
        "Contracts, affidavits, real estate agreements, wills, and power of attorney documents often require notarization for legal validity.",
    },
    {
      question: "How does notarization protect law firms?",
      answer:
        "Notarization prevents forgery and fraud by verifying identities, ensuring legal compliance, and providing evidence of the document’s authenticity.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className=" py-12  ">
      <div className="flex flex-col md:flex-row md:justify-between w-[85%] p-6 mx-auto">
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

export default Faqlawfirm;
