"use client";
import Image from "next/image";
import React, { useState } from "react";
import BookingForm from "../Checkout/BookingForm";
import { FaCirclePlay } from "react-icons/fa6";

const HowItWorks = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleVideoPopup = () => {
    setIsVideoOpen(!isVideoOpen);
  };
  return (
    <div className="bg-gray-50 space-y-5 text-gray-900">
      <div className="w-[85%] mx-auto pb-10">
        {/* Header Section */}
        <div className="lg:text-center py-16 space-y-4">
          <h2 className="text-xl uppercase font-semibold text-gray-500">
            How It Works
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 my-2">
            In 5 steps to your online notary appointment
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            With our platform, you can experience secure, fast, and hassle-free
            notarization. Follow these simple steps to have your documents
            notarized in just 10 minutes.
          </p>
          <div className="mt-6 w-fit mx-auto bg-green-600 rounded-md  hover:bg-green-700 transition">
            <BookingForm appointment_title="Book appointment now" />
          </div>
        </div>

        {/* Steps Section */}
        <div className="space-y-10 py-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 lg:p-20 items-center mx-auto bg-white rounded-xl shadow-lg max-w-5xl ${
                index % 2 !== 0
                  ? "lg:grid-cols-[2fr_1fr]"
                  : "lg:grid-cols-[1fr_2fr]"
              }`}
            >
              <div
                className={`space-y-5 ${
                  index % 2 !== 0 ? "lg:order-last" : ""
                }`}
              >
                <p className="text-sm font-semibold text-gray-500">
                  {step.step}
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <div className="text-gray-700">{step.description}</div>
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Learn more
                </a>
              </div>
              <div className="flex justify-center">
                <Image
                  width={500}
                  height={500}
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-gradient-to-b from-blue-50 py-20 shadow-lg p-8 lg:text-center ">
          <h3 className="text-4xl lg:text-5xl font-bold">
            Still have questions? Our explanatory video will help.
          </h3>
          <p className=" mt-3 max-w-xl mx-auto">
            In our video, we explain step by step how you can book your digital
            notary appointment and what you should have ready for it. Watch it
            and make your next appointment stress-free online.
          </p>
          {/* ----------------------------------------------- */}
          <div>
            <div className="relative  rounded-md max-w-lg mx-auto mt-10">
              <img
                className="rounded-xl"
                src="/img/notary.jpg"
                alt="Notary Banner"
              />
              <div
                className="absolute inset-0 flex justify-center items-center cursor-pointer"
                onClick={toggleVideoPopup}
              >
                <FaCirclePlay className="text-7xl text-white rounded-full bg-black border" />
              </div>
            </div>
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
          </div>

          {/* ---------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

const steps = [
  {
    step: "01 / 05",
    title: "Book an appointment",
    description:
      "The first step to your online notary appointment is to book a preferred date. Pick a time and date that works for you, upload your documents, and give us additional details for your specific case.",
    image: "/img/booking_notary.png",
  },
  {
    step: "02 / 05",
    title: "Create an account",
    description: (
      <>
        To access the appointment or change the details of your booking, you
        must log into your account on <a href="#">Notary</a>. Don't have an
        account yet?{" "}
        <a href="#" className="text-green-500 font-bold">
          Register now here
        </a>
        . Without an account you won’t be able to meet with our partner notaries
        and make use of their services.
      </>
    ),
    image: "/img/booking_notary.png",
  },
  {
    step: "03 / 05",
    title: "Verify your identity",
    description:
      "As soon as your appointment is confirmed, you will be asked to verify your identity through a secure platform.",
    image: "/img/booking_notary.png",
  },
  {
    step: "04 / 05",
    title: "Online appointment & signing",
    description:
      "Meet with the notary online to complete the notarization process for your documents.",
    image: "/img/booking_notary.png",
  },
  {
    step: "05 / 05",
    title: "Receive your documents",
    description:
      "After the appointment, download your notarized documents securely from our platform.",
    image: "/img/booking_notary.png",
  },
];
