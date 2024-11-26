import React from "react";
import { FaCheck } from "react-icons/fa";

const Service = () => {
  return (
    <div className="bg-gray-900 my-10 w-[90%] rounded mx-auto py-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white">
          We’re fueling the digital economy
        </h2>

        {/* Subheading */}
        <p className="text-gray-100 mt-4 max-w-2xl mx-auto">
          When notarizations are convenient, compliant, and more easily
          verifiable, everyone wins. See how our award-winning online
          notarization platform is bringing the nation’s largest industries
          online – and how we can do the same for your business.
        </p>

        {/* Industry Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            "Real Estate",
            "Financial Services",
            "Auto",
            "Credit Unions",
            "Solar and Energy",
            "Insurance",
          ].map((industry) => (
            <div
              key={industry}
              className="flex items-center space-x-1 text-lg font-medium text-gray-100  transition"
            >
              <FaCheck className="w-5 h-5 text-green-700" />
              <span>{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
