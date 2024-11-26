import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 space-y-5 text-gray-900">
      {/* Header Section */}
      <div className="text-center py-16 px-4">
        <h2 className="text-lg uppercase font-semibold text-gray-500">
          How It Works
        </h2>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          In 5 steps to your online notary appointment
        </h1>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          With notarity, no geographical barriers slow you down. Get your
          documents notarised remotely and without delay by our partner
          notaries. No matter where in the world you are.
        </p>
        <button className="mt-6 bg-green-600 text-white py-3 px-8 rounded-md font-semibold hover:bg-green-700 transition">
          Book appointment now
        </button>
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
              className={`space-y-5 ${index % 2 !== 0 ? "lg:order-last" : ""}`}
            >
              <p className="text-sm font-semibold text-gray-500">{step.step}</p>
              <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
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
      <div className="bg-gray-900 py-20 shadow-lg p-8 text-center">
        <h3 className="text-2xl text-white font-bold">
          Still have questions? Our explanatory video will help.
        </h3>
        <p className="text-gray-100 mt-3 max-w-xl mx-auto">
          In our video, we explain step by step how you can book your digital
          notary appointment and what you should have ready for it. Watch it and
          make your next appointment stress-free online.
        </p>
        <div className="mt-8">
          <video
            controls
            className="w-full bg-white max-w-lg mx-auto rounded-lg"
            poster="/path-to-video-thumbnail.jpg"
          >
            <source src="/path-to-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
    image: "/img/calender.webp",
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
    image: "/img/calender.webp",
  },
  {
    step: "03 / 05",
    title: "Verify your identity",
    description:
      "As soon as your appointment is confirmed, you will be asked to verify your identity through a secure platform.",
    image: "/img/calender.webp",
  },
  {
    step: "04 / 05",
    title: "Online appointment & signing",
    description:
      "Meet with the notary online to complete the notarization process for your documents.",
    image: "/img/calender.webp",
  },
  {
    step: "05 / 05",
    title: "Receive your documents",
    description:
      "After the appointment, download your notarized documents securely from our platform.",
    image: "/img/calender.webp",
  },
];
