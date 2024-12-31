"use client";
import { FaRegClock, FaUsers, FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
export default function AdvantagesForClients() {
  const advantages = [
    {
      icon: <FaRegClock className="w-6 h-6 text-white" />,
      title: "Time Saving - Increasing Efficiency",
      description:
        "Clients can complete notarizations quickly without the need for travel or waiting in-office, streamlining the process and saving valuable time.",
    },
    {
      icon: <FaUsers className="w-6 h-6 text-white" />,
      title: "Unmatched Flexibility",
      description:
        "Digital appointments offer clients the ability to schedule and complete notarizations at their convenience, accommodating different time zones and busy lifestyles.",
    },
    {
      icon: <FaGlobeAmericas className="w-6 h-6 text-white" />,
      title: "Integration with Digital Business Processes",
      description:
        "Seamlessly aligning with modern digital workflows, digital notarization simplifies document management, allowing clients to upload, notarize, and receive documents electronically.",
    },
  ];

  return (
    <div className="bg-white bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="w-[85%] mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <motion.h2
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Advantages{" "}
            <span className="text-green-900">digital notary appointments</span>{" "}
            for your clients
          </motion.h2>
        </div>

        {/* Advantages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              variants={fadeInAnimationVariants}
              custom={index}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              key={index}
              className="flex flex-col items-start bg-gradient-to-b from-blue-50 to-white hover:-translate-y-2 cursor-pointer duration-300 p-6 rounded-lg shadow-md"
            >
              <div className="bg-green-500 p-2 rounded-full mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-500">
                {advantage.title}
              </h3>
              <p className=" mt-2">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
