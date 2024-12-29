"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";

const Banner1 = () => {
  // Image Data Array
  const images = [
    "https://bluenotary.us/assets/clients/img-1.webp",
    "https://bluenotary.us/assets/clients/img-2.webp",
    "https://bluenotary.us/assets/clients/img-1.webp",
    "https://bluenotary.us/assets/clients/img-2.webp",
    "https://bluenotary.us/assets/clients/img-1.webp",
    "https://bluenotary.us/assets/clients/img-2.webp",
    "https://bluenotary.us/assets/clients/img-1.webp",
    "https://bluenotary.us/assets/clients/img-2.webp",
    "https://bluenotary.us/assets/clients/img-1.webp",
    "https://bluenotary.us/assets/clients/img-2.webp",
  ];

  return (
    <main className="bg-gray-900 py-10 pb-16">
      <div className="text-center space-y-8 m-auto w-[85%]">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="text-3xl text-white font-bold"
        >
          Trusted by over 3,000 law firms, title agencies and businesses.
        </motion.h2>

        {/* Map through images */}
        <div className="flex w-full overflow-x-scroll banner-scroll gap-5">
          {images.map((src, index) => (
            <motion.img
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.0 }}
              key={index}
              className={`w-40 ${index % 2 === 0 ? "rounded" : ""}`} // Conditional styling for rounded corners
              src={src}
              alt={`Client ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Banner1;
