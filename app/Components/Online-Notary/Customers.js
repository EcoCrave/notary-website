"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const Customers = () => {
  return (
    <div className=" py-16 ">
      <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="space-y-6 order-2">
          <motion.h2
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-lg uppercase font-medium text-gray-500"
          >
            Trusted Worldwide
          </motion.h2>
          <motion.h1
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Trusted by
            <br />
            <span>1000+ businesses</span>
            <br />
            <span>16000+ notaries</span>
            <br />
            <span>50+ states</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-gray-700"
          >
            The RON process is highly secure and meets the highest level of
            compliance standards, ensuring that the notarization is completed
            accurately and efficiently.
          </motion.p>
        </div>

        {/* Right Content */}
        <motion.div
          variants={fadeIn("up", 0, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className=" order-1"
        >
          <Image
            src="/img/trust.jpg"
            alt=""
            width={650}
            height={650}
            className="object-cover mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Customers;
