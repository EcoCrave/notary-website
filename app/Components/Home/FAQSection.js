"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
import Link from "next/link";
export default function FAQSection() {
  const faqs = [
    {
      question: "How does online notarization work?",
      answer:
        "Online notarization connects you with a licensed notary via a secure video call. After verifying your identity, you digitally sign the document, and the notary applies an electronic seal.",
    },
    {
      question: "What documents can be notarized on Notary Blocks?",
      answer:
        "Documents such as affidavits, powers of attorney, real estate papers, and more can be notarized on Notary Blocks.",
    },
    {
      question: "Can you Notarize documents from overseas?",
      answer:
        "Yes, Notary Blocks enables notarization of documents from abroad, provided the document is valid in the U.S. or the intended jurisdiction.",
    },
    {
      question: "What types of documents can be notarized on Notary Blocks?",
      answer:
        "Notary Blocks can notarize a variety of documents, including legal, financial, and personal ones.",
    },
    {
      question: "Is online notarization legal?",
      answer:
        "Yes, online notarization is legally recognized in many U.S. states and is accepted in several countries worldwide.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" pt-16 pb-16  ">
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
            <Link href="/contact" className="text-blue-600 underline">
              Contact Us
            </Link>
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
