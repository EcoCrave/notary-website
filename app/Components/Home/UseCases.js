"use client";
import React from "react";
import Link from "next/link";
import { BsClockHistory } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
import Image from "next/image";

const data = [
  {
    title: "For Business",
    description:
      "Effortless online notarization tailored for businesses—secure, fast, and reliable document solutions",
    imageUrl: "/img/businessman.jpg",
    gradient: "from-blue-800 to-green-700",
    topPosition: "top-[75px]",
    pageLink: "/business",
  },
  {
    title: "For Individual",
    description:
      "Secure and convenient online notarization services designed for individuals—fast, reliable, and hassle-free",
    imageUrl: "/img/lawer.jpg",
    gradient: "from-purple-500 to-green-700",
    topPosition: "top-[85px]",
    pageLink: "/in-person-notarization",
  },
  {
    title: "For Company & Banks",
    description:
      "Fast, secure online notarization services tailored for the construction industry—streamline your documentation today",
    imageUrl: "/img/construction.jpg",
    gradient: "from-teal-500 to-green-700",
    topPosition: "top-[95px]",
    pageLink: "/company-bank",
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
        (
          { title, description, imageUrl, gradient, topPosition, pageLink },
          index
        ) => (
          <motion.div
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            key={index}
            className={`md:w-[87%] p-10 rounded-3xl md:flex items-center md:justify-between gap-10 bg-gradient-to-r ${gradient} shadow-md m-auto my-8  sticky ${topPosition}`}
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
                  href={pageLink}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="rounded-md  ">
              <Image
                width={500}
                height={500}
                className="rounded-md w-[74%] my-5 mx-auto"
                src={imageUrl}
                alt=""
              />
            </div>
          </motion.div>
        )
      )}
    </div>
  </div>
);

export default Services;
