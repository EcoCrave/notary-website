"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
import BookingForm from "../Checkout/BookingForm";
export default function InternationalServices() {
  const services = [
    {
      title: "Apostille & Legalization",
      content: (
        <div className="space-y-2">
          <p className="mb-3">
            Provide digital apostille services for documents that need to be
            recognized in foreign countries under the Hague Convention. For
            non-member countries, offer legalization services to process
            documents through consulates or embassies.
          </p>

          <li>
            A step-by-step guide for international clients to ensure compliance.
          </li>
          <li>
            Include translation services for documents in non-native languages.
          </li>
          <li>
            Offer secure digital delivery of processed documents to clients
            worldwide.
          </li>
          <li>
            Provide real-time tracking and updates throughout the legalization
            process.
          </li>
          <li>
            <strong>Examples: </strong> Birth certificates, marriage
            certificates, business agreements.
          </li>
        </div>
      ),
    },
    {
      title: "Multi-Language Support",
      content: (
        <div className="space-y-2">
          <p className="mb-3">
            Offer notary services in multiple languages, catering to
            international clients. Collaborate with certified translators to
            provide document translations and notarization in one seamless
            process.
          </p>

          <li>
            Focus on high-demand languages like Spanish, French, Mandarin, and
            Arabic.
          </li>
          <li>Provide expedited services for urgent document needs.</li>
          <li>Offer mobile notary services for added convenience.</li>
          <li>Ensure compliance with local and international regulations.</li>
        </div>
      ),
    },
    {
      title: "Immigration Notarization",
      content: (
        <div className="space-y-2">
          <p className="mb-3">
            Assist with notarizing immigration-related documents for users
            migrating to other countries.
          </p>

          <li>
            Provide guidance on document preparation to meet country-specific
            requirements.
          </li>
          <li>
            Offer certified translation services for immigration documents.
          </li>
          <li>
            Ensure secure digital submission and tracking of notarized
            documents.
          </li>
          <li>
            <strong>Examples:</strong> Visa applications, affidavits of support,
            sponsor declarations, and travel consent forms for minors.
          </li>
        </div>
      ),
    },
    {
      title: "Educational Documents",
      content: (
        <div className="space-y-2">
          <p className="mb-3">
            Notarize academic certificates and transcripts for individuals
            studying or working abroad.
          </p>

          <li>
            Add apostille services for students applying to universities in
            foreign countries.
          </li>
          <li>
            Provide certified translation of academic documents for non-native
            languages.
          </li>
          <li>Ensure compliance with international accreditation standards.</li>
          <li>
            Offer expedited notarization services for urgent applications.
          </li>
        </div>
      ),
    },
    {
      title: "Cross-Border Contracts",
      content: (
        <div className="space-y-2">
          <p className="mb-3">
            Facilitate notarization of international contracts, such as:
          </p>

          <li>Partnership agreements.</li>
          <li>Licensing and distribution agreements.</li>
          <li>Cross-border mergers and acquisitions.</li>
          <li>Franchise agreements for international markets.</li>
          <li>Joint venture agreements with global partners.</li>
          <li>Export and import trade contracts.</li>
        </div>
      ),
    },
    {
      title: "International Real Estate",
      content: (
        <div className="space-y-2">
          <p className="mb-3">
            Assist with notarizing property purchase or sale agreements for
            clients buying or selling real estate in a different country.
          </p>{" "}
          <li>Include escrow instructions and mortgage notarizations.</li>
          <li>
            Provide notarization for lease agreements and rental contracts.
          </li>
          <li>
            Assist with title deed certifications for international properties.
          </li>
          <li>
            Offer guidance on country-specific real estate documentation
            requirements.
          </li>
        </div>
      ),
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
        <motion.div
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
        </motion.div>
        <div className=" lg:flex flex-col md:flex-row items-start  gap-10">
          {/* Service List */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-1 lg:flex-col gap-4 mb-3  ">
            {services.map((service, index) => (
              <motion.button
                key={index}
                variants={fadeInAnimationVariants}
                custom={index}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2 text-left  shadow-md  w-full rounded-lg ${
                  selectedService.title === service.title
                    ? "text-white bg-green-600 font-bold "
                    : "text-gray-700 border-gray-300 shadow bg-white"
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
              <motion.div
                variants={fadeIn("up", 0, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="text-gray-700 mt-4"
              >
                {selectedService.content}
              </motion.div>
            </div>{" "}
          </div>
          <motion.div
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="flex mt-4 lg:mt-0 lg:justify-center"
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
              <div className="bg-black w-full mt-4  rounded hover:bg-gray-800">
                <BookingForm appointment_title="Book Now" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
