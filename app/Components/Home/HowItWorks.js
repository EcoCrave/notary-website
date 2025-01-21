"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
import Link from "next/link";
export default function NotarySection() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white pb-20">
      <div className=" w-[85%]   mx-auto min-h-screen flex flex-col items-center ">
        <div className="mt-10  w-full gap-5 justify-center items-center grid md:grid-cols-2 ">
          <motion.div
            variants={fadeIn("left", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col space-y-8 md:order-2 "
          >
            <div className=" mt-8">
              <h1 className="md:text-5xl text-4xl spac text-left  font-bold text-gray-900">
                Upload. <br />
                Verify ID. <br /> Meet Online
              </h1>
            </div>
            <Step
              number="1"
              title="Create an User Account"
              description=<span>
                {" "}
                <Link
                  href="/login"
                  className="text-blue-600 border-b-blue-600 hover:border-b-[1px]"
                >
                  Create an user account
                </Link>{" "}
                through our authentication system.
              </span>
            />
            <Step
              number="2"
              title="Upload Your Documents"
              description="Quickly upload your document in any file form."
            />
            <Step
              number="3"
              title="Verify Your Identity"
              description="Get approved by our team through email and book an appointment."
            />
            <Step
              number="4"
              title="Meet The Notary"
              description="Sign, seal, and send to whomever needs it after meeting the notary public agent in a live video/audio session."
            />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex order-1   flex-col md:flex-row items-center mt-16 space-y-8 md:space-y-0 md:space-x-12"
          >
            <Image
              src="/img/how-it-works.png"
              width={600}
              height={600}
              alt="How it works"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="space-y-2">
      <h3 className="text-white text-md font-semibold bg-gray-900 w-fit px-2 rounded tracking-wider">
        Step {number} :
      </h3>
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <hr className="mt-4 border-gray-200" />
    </div>
  );
}

function ImageCard({ label, imageSrc }) {
  return (
    <div className="relative w-72 h-40 rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <img src={imageSrc} alt={label} className="w-full h-full object-cover" />
      <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
        {label}
      </div>
    </div>
  );
}
