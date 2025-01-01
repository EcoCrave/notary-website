"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const UseCase = () => {
  return (
    <main className=" py-16 ">
      <div className=" items-center lg:grid grid-cols-2 gap-10 justify-center w-[87%] mx-auto space-y-4">
        <motion.div
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className=" relative  justify-center"
        >
          <Image
            className="rounded-xl items-center lg:w-[60%]"
            width={600}
            height={600}
            src="/img/useCase.webp"
            alt=""
          />
        </motion.div>

        <div className=" space-y-8 md:pr-40">
          <motion.h1
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl font-bold"
          >
            Use cases for banks
          </motion.h1>
          <div className="space-y-3">
            <motion.p
              variants={fadeIn("up", 0, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-lg"
            >
             Lending banks have several authentication criteria.
              These often concern:

            </motion.p>
            <motion.li
              variants={fadeIn("up", 0, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="m-5"
            >
              Pledge document certification
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="m-5"
            >
              Certification of deletion notes
            </motion.li>

            <motion.p
              variants={fadeIn("up", 0, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-lg"
            >
            </motion.p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UseCase;
