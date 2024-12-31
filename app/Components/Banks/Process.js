"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const Process = () => {
  return (
    <main className=" py-16 ">
      <div className=" items-center lg:grid grid-cols-2 gap-10 justify-center w-[87%] mx-auto space-y-4">
        <motion.div
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className=" relative w-full flex lg:justify-center"
        >
          <Image
            className="rounded-xl items-center w-[60%]"
            width={600}
            height={600}
            src="/img/code.webp"
            alt=""
          />
        </motion.div>

        <div className=" space-y-8 md:pr-40">
          <motion.h1
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl font-bold"
          >
            Smooth processes through interface automation
          </motion.h1>
          <div className="space-y-3">
            <motion.p
              variants={fadeIn("up", 0, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-lg"
            >
              Interfaces allow papers to be signed directly to websitename and certified documents to be returned to the bank's system.
               Running errands or sending papers via mail or email is unnecessary.

            </motion.p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Process;
