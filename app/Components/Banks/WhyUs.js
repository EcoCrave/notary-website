"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const WhyUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="w-[85%] mx-auto lg:grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-5 pb-5">
          <motion.p
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-lg uppercase tracking-widest text-gray-500 font-semibold"
          >
            Your advantages
          </motion.p>
          <motion.h2
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl lg:text-5xl pr-10 font-bold text-green-900 leading-tight mt-2"
          >
            Why use Notary Blocks?{" "}
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-lg"
          >
            Our product is ideal for banks' document authentication
            requirements. Advantages include:
          </motion.p>
        </div>

        {/* Right Section - Benefits */}
        {/* Right Section - Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <motion.div
            variants={fadeIn("up", 0, 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="bg-gradient-to-b from-green-50 hover:-translate-y-2 cursor-pointer duration-300 to-white shadow-md p-5 rounded "
          >
            <h3 className="text-2xl font-semibold ">Locally Flexible </h3>
            <p className="   text-lg mt-2">
              Notary Blocks allows you to notarize documents from any location,
              eliminating the need for in-person visits and providing
              convenience for businesses and individuals alike.
            </p>
          </motion.div>
          {/* Benefit 2 */}
          <motion.div
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="bg-gradient-to-b from-blue-50 hover:-translate-y-2 cursor-pointer duration-300 shadow-md to-white p-5 rounded "
          >
            <h3 className="text-2xl font-semibold ">Cost Saving</h3>
            <p className="text-lg mt-2">
              Reduce expenses associated with travel, office overhead, and
              physical document handling through efficient, paperless
              notarization.
            </p>
          </motion.div>
          {/* Benefit 3 */}
          <motion.div
            variants={fadeIn("up", 0, 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="bg-gradient-to-b hover:-translate-y-2 cursor-pointer duration-300 from-blue-50 shadow-md to-white p-5 rounded "
          >
            <h3 className="text-2xl font-semibold ">Digital Total Solution</h3>
            <p className="   text-lg mt-2">
              Notary Blocks integrates all steps of notarization into one
              platform, from identity verification to document management,
              ensuring a seamless digital experience.
            </p>
          </motion.div>
          {/* Benefit 4 */}
          <motion.div
            variants={fadeIn("up", 0, 1.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="bg-gradient-to-b hover:-translate-y-2 cursor-pointer duration-300 from-blue-50 shadow-md to-white p-5 rounded "
          >
            <h3 className="text-2xl font-semibold ">Time Saving</h3>
            <p className="   text-lg mt-2">
              Expedite document processing by completing notarizations online in
              minutes, optimizing time for both businesses and clients.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
