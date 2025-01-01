"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const Hero = () => {
  return (
    <div className="bg-gray-50 py-16 ">
      <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6 order-2 lg:order-1">
          <motion.h1
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl  font-bold text-gray-900 leading-snug"
          >
            Notarize your documents affordably and{" "}
            <span className="text-green-600 underline">fraud-free</span> with
            the convenience customers expect with{" "}
            <span className="italic">websitename</span>.
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-gray-700"
          >
            With remote online notarization, you can expect to get documents
            signed and verified without having to go anywhere.
          </motion.p>
          <motion.button
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="mt-4 bg-green-700 text-white py-3 px-8 rounded-md font-medium hover:bg-gray-800"
          >
            Book A Demo
          </motion.button>
        </div>

        {/* Images */}

        <motion.div
          variants={fadeIn("up", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="w-full h-[400px] order-1 lg:order-2 bg-black text-white text-4xl flex justify-center flex-col items-center"
        >
          Image{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
