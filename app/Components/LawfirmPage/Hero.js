"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import BookingForm from "../Checkout/BookingForm";
export default function Hero() {
  return (
    <div className=" relative  back bg-[url('/img/law.jpg')]  py-24 ">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className=" mx-auto w-[85%] flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* Left Side Content */}
        <motion.div
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="lg:w-1/2 z-10  mb-8 order-2 lg:order-1"
        >
          <motion.div
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="pr-9 space-y-6 order-2 "
          >
            <motion.p
              variants={fadeIn("up", 0, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className=" uppercase tracking-widest text-gray-100 font-semibold"
            >
              The future is digital
            </motion.p>
            <motion.h1
              variants={fadeIn("up", 0, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="md:text-5xl text-4xl font-bold text-white leading-tight"
            >
              Digitise your law firm's co-operation with notaries
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-gray-50"
            >
              websitename simplifies notarization with safe, remote, and online
              services. Partner notaries handle all document types, ensuring
              convenience. If unsure, select "Notarized signature" or "Signature
              notarized" for tailored assistance.
            </motion.p>
            <div className="flex flex-wrap gap-4 mt-6">
              <motion.div
                variants={fadeIn("up", 0, 0.9)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.9 }}
                className="bg-green-900   px-6 rounded-md font-medium hover:bg-green-900 transition"
              >
                <BookingForm appointment_title="Arrange a demo appointment" />
              </motion.div>
              <motion.button
                variants={fadeIn("up", 0, 1.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.9 }}
                className=" bg-gray-800 text-white py-3 px-6 rounded-md font-medium hover:bg-green-900 transition"
              >
                Services
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
