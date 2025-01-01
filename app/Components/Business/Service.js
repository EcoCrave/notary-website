"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
const Service = () => {
  return (
    <div className="bg-gradient-to-t  from-blue-50 to-white py-8">
      <div className="w-[85%] mx-auto md:text-center">
        {/* Heading */}
        <motion.h2
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-4xl font-bold text-gray-900"
        >
         Driving the Digital Economy Forward 
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeIn("up", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-gray-700 mt-4 max-w-2xl mx-auto"
        >
          Everyone benefits when notarizations are easy, legal, and can be checked more quickly. View our award-winning 
          online notarization platform to learn how it is moving some of the biggest businesses in the country online.
           We can do the same for you.
        </motion.p>

        {/* Industry Links */}
        <motion.div
          variants={fadeIn("up", 0, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          {[
            "Real Estate",
            "Financial Services",
            "Auto",
            "Credit Unions",
            "Solar and Energy",
            "Insurance",
          ].map((industry, index) => (
            <motion.div
              variants={fadeInAnimationVariants}
              custom={index}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="flex items-center space-x-1 text-lg font-medium text-gray-900  transition"
            >
              <FaCheck className="w-5 h-5 text-green-900" />
              <span>{industry}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
