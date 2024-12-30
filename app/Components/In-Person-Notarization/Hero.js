import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gray-50 py-20 ">
      <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
            Notarize your documents affordably and{" "}
            <span className="text-green-600 underline">fraud-free</span> with
            the convenience customers expect with{" "}
            <span className="italic">online notary</span>.
          </h1>
          <p className="text-gray-700">
            With remote online notarization, you can expect to get documents
            signed and verified without having to go anywhere.
          </p>
          <button className="mt-4 bg-black text-white py-3 px-8 rounded-md font-medium hover:bg-gray-800">
            Book A Demo
          </button>
        </div>

        {/* Images */}

        <div className="w-full h-[400px] bg-black text-white text-4xl flex justify-center flex-col items-center">
          Image{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
