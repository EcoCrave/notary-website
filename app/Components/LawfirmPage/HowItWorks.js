"use client";
import { useState } from "react";

import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
export default function HowItWorks() {
  // Define steps and descriptions
  const steps = [
    {
      title: "Booking link",
      description:
        "Send your clients a personalised booking link for a notary appointment. Your clients can choose the date freely at any time between 7 a.m. and 10 p.m. and with a few minutes' notice. You will be notified of every appointment request from your clients via e-mail.",
    },
    {
      title: "Digital appointment",
      description:
        "Conduct the notary appointment digitally, providing convenience and flexibility for both parties.",
    },
    {
      title: "Execution",
      description:
        "Finalize and securely execute all required documents, ensuring compliance and accessibility for your clients.",
    },
  ];

  // State to track the active step
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className=" py-16 ">
      <div className="w-[85%] mx-auto bg-gray-900 rounded-lg p-8 md:flex md:space-x-12">
        {/* Left Section - Steps */}
        <div className="md:w-1/3 space-y-4">
          <h2 className="text-4xl font-bold text-green-500">How it works</h2>
          <ul className="mt-4 space-y-4">
            {steps.map((step, index) => (
              <motion.button
                variants={fadeInAnimationVariants}
                custom={index}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                key={index}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer flex flex-col text-lg font-medium ${
                  activeStep === index
                    ? "text-green-500 border-green-600 border p-2 w-52"
                    : "text-white"
                }`}
              >
                {step.title}
              </motion.button>
            ))}
          </ul>
        </div>

        {/* Right Section - Description */}
        <div className=" mt-8 md:mt-0">
          <motion.h3
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-2xl font-semibold text-white"
          >
            {steps[activeStep].title}
          </motion.h3>
          <motion.p
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-gray-50 mt-4"
          >
            {steps[activeStep].description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
