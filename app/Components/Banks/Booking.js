"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import BookingForm from "../Checkout/BookingForm";
const Booking = () => {
  return (
    <div className="flex   mx-auto justify-center pb-10 items-center  px-4">
      <div className="bg-gray-900 shadow-md rounded-2xl lg:text-center p-8 py-10 w-[87%] mx-auto">
        {/* Heading */}
        <motion.h2
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Book an appointment now!
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-gray-200 lg:w-1/2 text-lg mx-auto mb-6"
        >
          Notary Blocks appointments with our partner notary’s offices are a
          simple, fast and flexible way to handle your notarial matters. Book an
          appointment with a partner notary’s office in a video call now.
        </motion.p>

        {/* Button */}
        <motion.div
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="bg-green-700 w-fit mx-auto rounded-md font-semibold hover:bg-green-900 transition"
        >
          <BookingForm appointment_title="Book an appointment" />
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
