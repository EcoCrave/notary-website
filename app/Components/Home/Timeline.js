"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import React from "react";
import { MdOutlineDoneAll } from "react-icons/md";

const Timeline = () => {
  return (
    <div className="w-[90% ] md:w-[80%] md:mx-auto pt-10 md:grid md:grid-cols-2 ">
      <motion.ol
        variants={fadeIn("right", 0, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="relative border-l border-gray-700 md:ml-10"
      >
        <li className="mb-10 ml-6 ">
          <motion.span
            variants={fadeIn("right", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="absolute flex items-center  justify-center w-10 h-10  rounded-full -left-5 ring-1 ring-black bg-white "
          >
            <MdOutlineDoneAll className="" />
          </motion.span>
          <div className=" text-left px-5 space-y-2">
            <motion.h2
              variants={fadeIn("right", 0, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-green-900 font-bold text-2xl"
            >
              Hello
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className=" "
            >
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project. All of the pages and components are first designed in
              Figma and we keep a parity between the two versions even as we
              update the project.
            </motion.p>
          </div>
        </li>
      </motion.ol>
      <motion.ol
        variants={fadeIn("left", 0, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="relative border-l border-gray-700 md:ml-10"
      >
        <li className="mb-10 ml-6 ">
          <motion.span
            variants={fadeIn("left", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="absolute flex items-center  justify-center w-10 h-10  rounded-full -left-5 ring-1 ring-black bg-white "
          >
            <MdOutlineDoneAll className="" />
          </motion.span>
          <div className=" text-left px-5 space-y-2">
            <motion.h2
              variants={fadeIn("up", 0, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-green-900 font-bold text-2xl"
            >
              Hello
            </motion.h2>
            <motion.p
              variants={fadeIn("left", 0, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className=" "
            >
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project. All of the pages and components are first designed in
              Figma and we keep a parity between the two versions even as we
              update the project.
            </motion.p>
          </div>
        </li>
      </motion.ol>
      <motion.ol
        variants={fadeIn("right", 0, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="relative border-l border-gray-700 md:border-white  md:ml-10"
      >
        <li className="mb-10 ml-6 ">
          <motion.span
            variants={fadeIn("right", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="absolute flex items-center  justify-center w-10 h-10  rounded-full -left-5 ring-1 ring-black bg-white "
          >
            <MdOutlineDoneAll className="" />
          </motion.span>
          <div className=" text-left px-5 space-y-2">
            <motion.h2
              variants={fadeIn("right", 0, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-green-900 font-bold text-2xl"
            >
              Hello
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className=" "
            >
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project. All of the pages and components are first designed in
              Figma and we keep a parity between the two versions even as we
              update the project.
            </motion.p>
          </div>
        </li>
      </motion.ol>
      <motion.ol
        variants={fadeIn("left", 0, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="relative border-l border-gray-700 md:border-white md:ml-10"
      >
        <li className="mb-10 ml-6 ">
          <motion.span
            variants={fadeIn("left", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="absolute flex items-center  justify-center w-10 h-10  rounded-full -left-5 ring-1 ring-black bg-white "
          >
            <MdOutlineDoneAll className="" />
          </motion.span>
          <div className=" text-left px-5 space-y-2">
            <motion.h2
              variants={fadeIn("left", 0, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-green-900 font-bold text-2xl"
            >
              Hello
            </motion.h2>
            <motion.p
              variants={fadeIn("left", 0, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className=" "
            >
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project. All of the pages and components are first designed in
              Figma and we keep a parity between the two versions even as we
              update the project.
            </motion.p>
          </div>
        </li>
      </motion.ol>
    </div>
  );
};

export default Timeline;
