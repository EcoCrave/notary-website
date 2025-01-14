"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
const ReachSignature = () => {
  return (
    <div className=" py-16 px-6 bg-gray-50 ">
      <div className="w-[85%] mx-auto  lg:flex justify-between items-center lg:flex-row   gap-12">
        {/* Left Side Image */}

        <motion.div
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="rounded-3xl flex justify-center overflow-hidden"
        >
          <Image
            src="/img/wt.jpg" // Replace this path with the actual path to the image
            alt="Person on Laptop"
            width={500}
            height={500}
            className="object-cover w-full"
          />
        </motion.div>

        {/* Right Side Content */}
        <div className="lg:w-1/2 space-y-6">
          <motion.h2
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-3xl font-bold text-gray-900"
          >
            What you can expect
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-gray-700"
          >
            With Proof, you’ll get an all-in-one identity verification platform
            for all your business transactions.
          </motion.p>

          {/* List of Expectations */}
          <ul className="space-y-4">
            <motion.li
              variants={fadeIn("up", 0, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex items-start"
            >
              <MdOutlineCheckCircle className="w-6 h-6 text-green-900 mr-3" />
              <p className="text-gray-700">
                An enterprise-grade platform to drive accurate, compliant
                notarizations that are accepted nationwide
              </p>
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0, 0.9)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex items-start"
            >
              <MdOutlineCheckCircle className="w-6 h-6 text-green-900 mr-3" />
              <p className="text-gray-700">
                Access to the world’s leading on-demand notary network that has
                completed millions of online notarizations
              </p>
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0, 1.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex items-start"
            >
              <MdOutlineCheckCircle className="w-6 h-6 text-green-900 mr-3" />
              <p className="text-gray-700">
                The ability to use your in-house notaries or leverage our
                on-demand Notarize Network, available 24/7
              </p>
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0, 1.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="flex items-start"
            >
              <MdOutlineCheckCircle className="w-6 h-6 text-green-900 mr-3" />
              <p className="text-gray-700">
                A comprehensive platform to handle everything from online
                notarization to eSign and identity verification in one seamless
                experience
              </p>
            </motion.li>
          </ul>

          {/* Learn More Button */}
          <motion.button
            variants={fadeIn("up", 0, 1.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="mt-6 bg-green-900 text-white py-2 px-4 rounded-md font-medium flex items-center hover:bg-green-950 transition"
          >
            Learn more
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ReachSignature;
