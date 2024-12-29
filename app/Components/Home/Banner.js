"use client";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Banner = () => {
  return (
    <main className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-[85%] items-center grid lg:grid-cols-2 gap-12 mx-auto">
        {/* Left Content */}
        <motion.div
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="space-y-8"
        >
          <motion.p
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="uppercase font-semibold"
          >
            Starts with only{" "}
            <span className="font-bold text-4xl text-green-900">$25</span>
          </motion.p>
          <motion.h1
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="md:text-5xl text-4xl font-bold"
          >
            Don’t Hesitate in Choosing <br /> the Right Notary
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            notarity helps you and your clients to digitalise the cooperation
            with notaries. This enables you to work more efficiently, save time
            and money and offer your clients an innovative service.
          </motion.p>
          <div className="gap-4 flex mx-auto">
            <motion.button
              variants={fadeIn("up", 0, 0.9)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.9 }}
              className="bg-green-800 px-4 py-2 rounded-md text-white"
            >
              Arrange an appointment
            </motion.button>
            <motion.button
              variants={fadeIn("up", 0, 1.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.9 }}
              className="px-4 py-2 rounded-md border border-green-800 text-green-800 hover:bg-green-800 hover:text-white"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeIn("up", 0, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="relative rounded-md"
        >
          <img
            className="rounded-xl"
            src="https://bluenotary.us/assets/ron-banner.jpg"
            alt="Notary Banner"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <FaCirclePlay className="text-7xl text-white rounded-full bg-black border" />
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Banner;
