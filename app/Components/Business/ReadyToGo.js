"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
import BookingForm from "../Checkout/BookingForm";
const ReadyToGo = () => {
  return (
    <div className="w-[85%] my-10 mb-24 bg-gray-900 mx-auto text-center rounded-lg p-5 space-y-4 py-16">
      <motion.h1
        variants={fadeIn("up", 0, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="text-white lg:text-5xl text-4xl font-bold"
      >
        Ready to go ?
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="text-white font-semibold"
      >
        Book your appointment now !
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="flex flex-col justify-center text-center mx-auto space-y-2 lg:w-1/3"
      >
        <input
          type="email"
          className="px-5 py-2 rounded outline-none"
          placeholder="email..."
        />
        <div className=" rounded bg-green-900  hover:bg-black cursor-pointer ">
          <BookingForm appointment_title="START THE ENGINE" />
        </div>
      </motion.div>
    </div>
  );
};

export default ReadyToGo;
