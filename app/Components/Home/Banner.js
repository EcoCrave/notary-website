"use client";
import React, { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import BookingForm from "../Checkout/BookingForm";
import Link from "next/link";
import Image from "next/image";
import useFirebase from "@/app/Server/authentication/useFirebase";

const Banner = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoPopup = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  const { currentLogedIn } = useFirebase();

  return (
    <main className="py-16 lg:py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-[85%] items-center lg:flex justify-between gap-12 mx-auto space-y-5">
        {/*---------------- Left Content ------------*/}
        <motion.div
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="space-y-8 lg:w-[50%]"
        >
          <motion.p
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className=" font-semibold"
          >
            Starts with{" "}
            <span className="font-bold text-2xl  bg-gray-900 ml-2 p-2 rounded text-white lowercase">
              {" "}
              $25 Only
            </span>
          </motion.p>
          <motion.h1
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="md:text-5xl text-4xl font-bold"
          >
            Don’t Hesitate in Choosing <br /> the Right Notary
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
          >
            Notary Blocks streamlines digital collaboration with notaries,
            boosting efficiency, saving time and money, and providing innovative
            services to your clients.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0, 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.9 }}
            className="gap-4 flex items-center mx-auto"
          >
            <div className="bg-green-700 rounded-md">
              <BookingForm appointment_title="Arrange an appointment" />
            </div>

            <Link
              className="px-4 py-3 rounded-md border border-green-800 text-green-800 hover:bg-green-800 hover:text-white"
              href="/contact"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeIn("up", 0, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="relative rounded-md"
        >
          <Image
            width={700}
            height={700}
            className="rounded-xl"
            src="/img/notary.jpg"
            alt="Notary Banner"
          />
          <div
            className="absolute inset-0 flex justify-center items-center cursor-pointer"
            // onClick={toggleVideoPopup}
          >
            <FaCirclePlay className="text-7xl text-white rounded-full bg-black border" />
          </div>
        </motion.div>
      </div>

      {/* Video Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative  rounded-lg shadow-lg p-4 max-w-3xl w-full">
            <button
              onClick={toggleVideoPopup}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
            >
              ✕
            </button>
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/hEofB08X7lI?si=SwurZyMmgpf74cOf"
              title="Notary Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
};

export default Banner;
