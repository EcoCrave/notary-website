"use client";
import { FaRegClock, FaUsers, FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
export default function AdvantagesForClients() {
  const advantages = [
    {
      icon: <FaRegClock className="w-6 h-6 text-white" />,
      title: "Time saving",
      description:
        "Your clients save time travelling to your office or the notary's office.",
    },
    {
      icon: <FaUsers className="w-6 h-6 text-white" />,
      title: "Flexibility",
      description:
        "Your clients can make notary appointments online flexibly and at very short notice.",
    },
    {
      icon: <FaGlobeAmericas className="w-6 h-6 text-white" />,
      title: "Digital business processes",
      description:
        "The documents are genuinely electronic and fit seamlessly into the digital business processes of your clients.",
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
