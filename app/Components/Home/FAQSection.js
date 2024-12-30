"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
export default function FAQSection() {
  const faqs = [
    {
      question: "How does online notarization work?",
      answer:
        "Online notarization works by connecting you with a licensed notary through a secure video call. You verify your identity, sign the document digitally, and the notary seals it electronically.",
    },
    {
      question: "What documents can be notarized on BlueNotary?",
      answer:
        "Documents like affidavits, powers of attorney, real estate documents, and more can be notarized on BlueNotary.",
    },
    {
      question: "Can you Notarize documents from overseas?",
      answer:
        "Yes, BlueNotary allows notarization of documents from overseas as long as the document is valid in the U.S. or the intended jurisdiction.",
    },
    {
      question: "What types of documents can be notarized on BlueNotary?",
      answer:
        "BlueNotary can notarize a wide range of documents, including legal, financial, and personal documents.",
    },
    {
      question: "Is online notarization legal?",
      answer:
        "Yes, online notarization is legal in many states in the U.S. and recognized in multiple countries.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" py-4 pb-16  ">
      <div className="flex flex-col items-center md:flex-row md:justify-between w-[85%] mx-auto">
        {/* Left Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.button
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="mb-4 px-4 py-2 border rounded-full text-sm font-semibold text-gray-800 border-gray-300"
          >
            FAQ'S
          </motion.button>
          <motion.h2
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="lg:text-5xl text-4xl font-bold text-gray-900 "
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-gray-600 mt-4 font-semibold"
          >
            Need more help?{" "}
            <a href="#" className="text-blue-600 underline">
              Contact Us
            </a>
          </motion.p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              variants={fadeInAnimationVariants}
              custom={index}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              key={index}
              className="border-b border-gray-200 pb-4"
            >
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
                <motion.p
                  variants={fadeIn("up", 0, 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.7 }}
                  className="mt-2 bg-gray-100 p-4 text-gray-700"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
