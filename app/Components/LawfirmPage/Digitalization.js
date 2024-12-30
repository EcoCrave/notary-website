"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const Digitalization = () => {
  return (
    <main className=" py-1 ">
      <div className=" items-center lg:flex gap-28 justify-center w-[85%] mx-auto space-y-4">
        <motion.div
          variants={fadeIn("up", 0, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className=" shadow-lg rounded-lg "
        >
          <Image
            className="rounded-xl w-full "
            width={500}
            height={500}
            src="/img/digitalize.webp"
            alt=""
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="lg:w-1/2 space-y-6"
        >
          <motion.h1
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="md:text-5xl text-4xl font-bold text-gray-900 leading-tight"
          >
            The future is digital.
            <br /> Are you too?
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            className="text-gray-700"
          >
            We have developed a free product especially for law firms that
            allows you to utilise the full potential of notarity. With
            personalised booking links, you can present yourself to your clients
            in a modern way. <br /> We would be happy to present this offer to
            you personally in a joint appointment and show you all the
            advantages of notarity.
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
};

export default Digitalization;
