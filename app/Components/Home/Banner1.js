"use client";
import React from "react";
import { motion } from "framer-motion";

const Banner1 = () => {
  // Image Data Array
  const images = [
    "/img/brand1.png",
    "/img/brand2.jpg",
    "/img/brand3.jpg",
    "/img/brand4.png",
    "/img/brand5.jpg",
    "/img/brand6.jpg",
    "/img/brand7.jpg",
    "/img/brand8.jpeg",
    "/img/brand9.png",
    "/img/brand10.png",
  ];

  return (
    <main className="bg-gray-900 py-10 pb-16 overflow-hidden">
      <div className="text-center space-y-8 m-auto w-[85%]">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl text-white font-bold"
        >
          Trusted by over 3,000 law firms, title agencies and businesses.
        </motion.h2>

        {/* Auto-sliding Image Container */}
        <motion.div
          className="flex w-full gap-5"
          style={{
            display: "flex",
            whiteSpace: "nowrap",
          }}
          animate={{ x: ["0%", "-100%"] }} // Move images to the left
          transition={{
            ease: "linear",
            duration: 20, // Duration for a full loop
            repeat: Infinity, // Loop animation
          }}
        >
          {/* Duplicate the images to create a seamless sliding effect */}
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              className="w-40 h-auto inline-block"
              src={src}
              alt={`Client ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Banner1;
