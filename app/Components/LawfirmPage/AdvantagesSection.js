"use client";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
export default function AdvantagesSection() {
  return (
    <div className="bg-white pb-10 px-6">
      <div className="w-[85%] mx-auto lg:flex  gap-12">
        {/* Left Section */}
        <div>
          <motion.p
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-lg uppercase tracking-widest text-gray-500 font-semibold"
          >
            Why Notarity
          </motion.p>
          <motion.h2
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl md:text-5xl pr-10 font-bold text-gray-900 leading-tight my-2 mb-6"
          >
            Advantages{" "}
            <span className="text-green-900">digital notary appointments</span>{" "}
            for your law firm
          </motion.h2>
        </div>

        {/* Right Section - Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <motion.div
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="bg-gradient-to-b from-green-50 hover:-translate-y-2 cursor-pointer duration-300 to-white shadow-md p-5 rounded "
          >
            <h3 className="text-2xl font-semibold ">Effort reduction</h3>
            <p className="   text-lg mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
            </p>
          </motion.div>
          {/* Benefit 2 */}
          <motion.div
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="bg-gradient-to-b from-blue-50 hover:-translate-y-2 cursor-pointer duration-300 shadow-md to-white p-5 rounded "
          >
            <h3 className="text-2xl font-semibold ">Effort reduction</h3>
            <p className="   text-lg mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
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
            <h3 className="text-2xl font-semibold ">Effort reduction</h3>
            <p className="   text-lg mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
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
            <h3 className="text-2xl font-semibold ">Effort reduction</h3>
            <p className="   text-lg mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
