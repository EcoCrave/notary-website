import Image from "next/image";
import React from "react";
import { MdOutlineCheckCircle } from "react-icons/md";

const ReachSignature = () => {
  return (
    <div className=" py-16 px-6 bg-gray-50 ">
      <div className="w-[85%] mx-auto  flex justify-between items-center lg:flex-row   gap-12">
        {/* Left Side Image */}

        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/img/bedi1.webp" // Replace this path with the actual path to the image
            alt="Person on Laptop"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            What you can expect
          </h2>
          <p className="text-gray-700">
            With Proof, you’ll get an all-in-one identity verification platform
            for all your business transactions.
          </p>

          {/* List of Expectations */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <MdOutlineCheckCircle className="w-6 h-6 text-green-900 mr-3" />
              <p className="text-gray-700">
                An enterprise-grade platform to drive accurate, compliant
                notarizations that are accepted nationwide
              </p>
            </li>
            <li className="flex items-start">
              <MdOutlineCheckCircle className="w-6 h-6 text-green-900 mr-3" />
              <p className="text-gray-700">
                Access to the world’s leading on-demand notary network that has
                completed millions of online notarizations
              </p>
            </li>
            <li className="flex items-start">
              <MdOutlineCheckCircle className="w-6 h-6 text-green-900 mr-3" />
              <p className="text-gray-700">
                The ability to use your in-house notaries or leverage our
                on-demand Notarize Network, available 24/7
              </p>
            </li>
            <li className="flex items-start">
              <MdOutlineCheckCircle className="w-6 h-6 text-green-900 mr-3" />
              <p className="text-gray-700">
                A comprehensive platform to handle everything from online
                notarization to eSign and identity verification in one seamless
                experience
              </p>
            </li>
          </ul>

          {/* Learn More Button */}
          <button className="mt-6 bg-green-900 text-white py-2 px-4 rounded-md font-medium flex items-center hover:bg-green-950 transition">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReachSignature;
