"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
export default function Hero() {
  return (
    <div className="bg-gray-50 py-24 ">
      <div className=" mx-auto w-[85%] flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Left Side Content */}
        <div className="lg:w-1/2  order-2 lg:order-1">
          <div className="pr-9 space-y-4 ">
            <motion.p
              variants={fadeIn("up", 0, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className=" uppercase tracking-widest text-gray-800 font-semibold"
            >
              The future is digital
            </motion.p>
            <motion.h1
              variants={fadeIn("up", 0, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="lg:text-5xl text-4xl font-bold text-gray-900 leading-tight"
            >
              Digitise your law firm's cooperation with notaries
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-gray-700"
            >
              Notarity helps you and your clients to digitalise the cooperation
              with notaries. This enables you to work more efficiently, save
              time and money and offer your clients an innovative service.
            </motion.p>
            <div className="flex flex-wrap gap-4 mt-6">
              <motion.button
                variants={fadeIn("up", 0, 0.9)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="bg-green-900 text-white py-3 px-6 rounded-md font-medium hover:bg-green-900 transition"
              >
                Arrange a demo appointment
              </motion.button>
              <motion.button
                variants={fadeIn("up", 0, 1.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="border border-green-900 hover:text-white py-3 px-6 rounded-md font-medium hover:bg-green-900 transition"
              >
                Services
              </motion.button>
            </div>
          </div>
        </div>

        {/* Right Side Cards */}
        <motion.div
          variants={fadeIn("up", 0, 1.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="lg:w-1/2 order-1 lg:order-2"
        >
          <Image
            className="rounded-xl w-full "
            width={500}
            height={500}
            src="/img/digitalize.webp"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}
