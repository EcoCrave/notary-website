"use client";
import React from "react";
import Link from "next/link";
import { BsClockHistory } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";

const data = [
  {
    title: "For Business",
    description:
      "Unlock peace of mind with our rapid and secure online notarization for all your important documents...",
    imageUrl: "https://bluenotary.us/assets/images/for_business.png",
    gradient: "from-blue-800 to-green-700",
    topPosition: "top-[75px]",
  },
  {
    title: "For Individual",
    description:
      "Unlock peace of mind with our rapid and secure online notarization for all your important documents...",
    imageUrl: "https://bluenotary.us/assets/images/for_individual.png",
    gradient: "from-purple-500 to-green-700",
    topPosition: "top-[85px]",
  },
  {
    title: "For Construction",
    description:
      "Unlock peace of mind with our rapid and secure online notarization for all your important documents...",
    imageUrl: "https://bluenotary.us/assets/images/for_construction.png",
    gradient: "from-teal-500 to-green-700",
    topPosition: "top-[95px]",
  },
];

const Services = () => (
  <div className=" pb-20 pt-10 ">
    <div className="w-[85%] lg:w-[80%] m-auto">
      <div className="text-center pt-5 space-y-3">
        <motion.p
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className=" font-semibold"
        >
          SOLUTIONS WE PROVIDE
        </motion.p>
        <motion.h2
          variants={fadeIn("up", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="md:text-5xl text-4xl font-bold"
        >
          Business Use Cases
        </motion.h2>
      </div>
      {data.map(
        ({ title, description, imageUrl, gradient, topPosition }, index) => (
          <motion.div
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            key={index}
            className={`md:w-[87%] p-10 rounded-3xl md:flex items-center md:justify-center gap-10 bg-gradient-to-r ${gradient} shadow-md m-auto my-8  sticky ${topPosition}`}
          >
            <div className="space-y-5 text-white md:w-1/2">
              <h2 className="md:text-4xl text-3xl text-white font-bold">
                {title.split(" ")[0]} {title.split(" ")[1]}
              </h2>
              <div className="flex items-center gap-5 border-b pb-5 border-gray-500">
                <div className="flex items-center gap-1">
                  <BsClockHistory />
                  <span>Faster</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaFingerprint />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1">
                  <IoSettingsOutline />
                  <span>Convenient</span>
                </div>
              </div>
              <p className="text-white w-full ">{description}</p>
              <div>
                <Link
                  className="bg-green-700 p-2 rounded hover:bg-green-900 space-y-2"
                  href=""
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <img className="md:h-80" src={imageUrl} alt="" />
            </div>
          </motion.div>
        )
      )}
    </div>
  </div>
);

export default Services;
