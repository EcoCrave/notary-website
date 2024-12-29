"use client";
import React from "react";
import Timeline from "./Timeline";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const YourAdvantages = () => {
  return (
    <div className="">
      <div
        variants={fadeIn("up", 0, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="w-[85%] mx-auto space-y-4 text-center py-10 "
      >
        <motion.h3
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-lg text-left md:text-center uppercase font-semibold"
        >
          Your advantages
        </motion.h3>
        <motion.h2
          variants={fadeIn("up", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="md:text-5xl text-left md:text-center text-4xl font-bold "
        >
          Why your company should use notarity
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className=" mx-auto pt-5 text-left md:text-center"
        >
          Effortlessly manage complex legal tasks across borders with notarity.
          Our platform facilitates secure, fast, and cost-effective online
          notarisation for your global teams, eliminating the need for physical
          appointments and extensive paperwork. Enhance your operational
          efficiency and ensure compliance with notarity's innovative digital
          solutions, designed to streamline legal workflows.
        </motion.p>
        <Timeline />
      </div>
    </div>
  );
};

export default YourAdvantages;
