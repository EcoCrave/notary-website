import Image from "next/image";
import React from "react";

const Customers = () => {
  return (
    <div className=" py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <div className="space-y-6 lg:order-2">
          <h2 className="text-sm uppercase font-medium text-gray-500">
            Trusted Worldwide
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Trusted by
            <br />
            <span>1000+ businesses</span>
            <br />
            <span>16000+ notaries</span>
            <br />
            <span>50+ states</span>
          </h1>
          <p className="text-gray-700">
            The RON process is highly secure and meets the highest level of
            compliance standards, ensuring that the notarization is completed
            accurately and efficiently.
          </p>
          <button className="mt-4 border border-gray-800 text-gray-800 py-3 px-6 rounded-md font-medium hover:bg-gray-800 hover:text-white transition">
            See Case Studies →
          </button>
        </div>

        {/* Right Content */}
        <div className=" lg:order-1">
          <Image
            src="/img/customers.png"
            width={650}
            height={650}
            className="object-cover mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
