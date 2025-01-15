"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import BookingForm from "../Checkout/BookingForm";
import Image from "next/image";
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
          <motion.div
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="mt-4 bg-green-700 rounded-md font-medium hover:bg-gray-800 w-fit"
          >
            <BookingForm appointment_title="Book A Demo" />
          </motion.div>
        </div>

        {/* Images */}

        <motion.div
          variants={fadeIn("up", 0, 1.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className=" order-1 lg:order-2"
        >
          <Image
            className="rounded-xl w-full "
            width={500}
            height={500}
            src="/img/onlineNotary.jpg"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
