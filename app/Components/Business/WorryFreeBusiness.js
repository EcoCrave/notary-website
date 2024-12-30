"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
const WorryFreeBusiness = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Testimonial Text */}
        <div className="md:w-2/3 space-y-6">
          <motion.p
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-2xl  font-semibold text-gray-800 leading-relaxed"
          >
            “With Proof, we now have the technology to identify and automate the
            transactions that need to be notarized and securely signed. The
            Proof platform gives us greater visibility into the customers we are
            transacting with and increases trust in the documents we rely upon.
            Consolidating to one identity management platform reduces our fees
            and complexity, and better positions us to securely serve our
            customers online. ”
          </motion.p>
          <div>
            <motion.p
              variants={fadeIn("up", 0, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="font-semibold text-gray-900"
            >
              Morgan Cavallo
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-gray-500"
            >
              Director, Titling Compliance, Vroom
            </motion.p>
          </div>
        </div>

        {/* Testimonial Image */}
        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
          <motion.div
            variants={fadeIn("up", 0, 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className=" rounded-full "
          >
            <Image
              src="/img/bedi.svg" // Replace this path with the actual path to the image
              alt="Morgan Cavallo"
              width={260}
              height={260}
              className="object-cover rounded-full "
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorryFreeBusiness;
