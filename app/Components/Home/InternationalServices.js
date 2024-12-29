"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
export default function InternationalServices() {
  const services = [
    {
      title: "Power of Attorney",
      content:
        "A Power of Attorney is a legal document that grants one person (the agent or attorney-in-fact) the authority to act on behalf of another person (the principal) in legal or financial matters. Businesses often use POAs to authorize individuals to make decisions, sign documents, and handle transactions on behalf of the company. This is particularly useful in scenarios where executives or key decision-makers are unavailable or when dealing with international transactions requiring local representation.",
    },
    {
      title: "Signature Notarisations",
      content:
        "Signature notarisation is a legal process that involves verifying the authenticity of a signature on a document. This ensures that the document has been signed willingly by the person involved.",
    },
    {
      title: "Affidavit",
      content:
        "An affidavit is a written statement that is sworn to be true by the person making it. Affidavits are commonly used in legal proceedings.",
    },
    {
      title: "Certified True Copy",
      content:
        "A certified true copy is a copy of a document that has been verified as an exact copy of the original. This is often required for official documents.",
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="pb-10 mt-5 bg-gradient-to-t from-blue-50 to-white">
      <div className=" py-10 flex flex-col space-y-6 w-[85%] mx-auto">
        <motion.h2
          variants={fadeIn("up", 0, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="md:text-5xl text-4xl font-bold text-gray-900 "
        >
          International Services
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          className="text-gray-600 pb-3"
        >
          Our international partner notaries offer a wide range of online
          notarial services tailored to the diverse needs of internationally
          active companies. Our platform ensures secure, efficient, and legally
          compliant notarial processes and helps companies to manage complex
          legal tasks seamlessly across borders. Below you will find an overview
          of the most important services offered by our partner notaries and how
          your company can benefit from them.
        </motion.p>

        <div className=" lg:flex flex-col md:flex-row items-start  ">
          {/* Service List */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-1 lg:flex-col gap-4 mb-3  ">
            {services.map((service, index) => (
              <motion.button
                variants={fadeInAnimationVariants}
                custom={index}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2 text-left font-medium shadow-md bg-white w-full rounded-lg ${
                  selectedService.title === service.title
                    ? "text-green-900 bg-green-600  border-green-500"
                    : "text-gray-700 border-gray-300"
                }`}
              >
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Service Content */}
          <div className="mt-6 md:mt-0 lg:ml-10 md:mr-5 flex lg:w-1/2">
            <div>
              <motion.h3
                variants={fadeIn("up", 0, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="text-2xl font-bold text-green-900"
              >
                {selectedService.title}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="text-gray-700 mt-4"
              >
                {selectedService.content}
              </motion.p>
            </div>{" "}
          </div>
          <motion.div
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex lg:justify-center  "
          >
            <div className="bg-white p-8 rounded-lg shadow-md text-center  border border-gray-200">
              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900">Only $25</h1>

              {/* Subtitle */}
              <p className="text-lg font-semibold text-green-700 mt-4">
                Connect with one of our online <br /> certified notaries now.
              </p>

              {/* Description */}
              <p className="text-gray-600 mt-2 text-sm">
                Simply enter your email address and get started
              </p>

              {/* Input Field */}
              <div className="mt-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 text-gray-700"
                />
              </div>

              {/* Button */}
              <button className="bg-black text-white w-full mt-4 py-2 rounded hover:bg-gray-800">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
