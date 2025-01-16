"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import BookingForm from "../Checkout/BookingForm";
const BusinessBanner = () => {
  return (
    <section className="relative bg-gray-50 py-24  back bg-[url('/img/business.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="w-[85%]  mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Left Side Content */}
        <div className="lg:w-1/2 z-10 space-y-4 p-10">
          <motion.p
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-lg uppercase tracking-widest text-white font-semibold"
          >
            The future is digital
          </motion.p>
          <motion.h1
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Grow Your Business and Reach Customers Nationwide
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-gray-50 text-lg"
          >
            Experience the convenience of{" "}
            <span className="font-bold text-xl">
              Remote Online Notarization
            </span>{" "}
            certify documents anytime, anywhere, completely online in minutes.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.9 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            <input
              type="email"
              className="border w-1/2 px-5 rounded-md"
              placeholder="email"
            />
            <div className="bg-green-900  rounded-md font-medium hover:bg-green-900 transition">
              <BookingForm appointment_title="Get Started Now" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBanner;
