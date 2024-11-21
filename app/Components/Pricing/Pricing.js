"use client";

import React, { useState } from "react";
import FancyBox from "./FancyBox";
import PriceGrid from "./PriceGrid";

const Pricing = () => {
  const [service, setService] = useState("notarise");
  console.log(service);
  return (
    <div className="bg-gray-100">
      {" "}
      <div className=" w-[90%] mx-auto text-gray-900 py-16 px-6">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Choose the best plan for your business
          </h1>
          <p className="text-gray-600 mt-2">
            No contracts. No surprise fees. Cancel anytime.
          </p>
          <div className="mt-4 flex justify-center items-center space-x-4">
            <button
              className={`py-2 px-4 ${
                service === "notarise" ? "bg-black text-white" : ""
              }  rounded-md font-medium`}
              onClick={() => setService("notarise")}
            >
              For Notaries
            </button>
            <button
              className={`py-2 px-4 ${
                service === "business" ? "bg-black text-white" : ""
              }  rounded-md font-medium`}
              onClick={() => setService("business")}
            >
              For Businesses / GNW
            </button>
            <button
              className={`py-2 px-4 ${
                service === "closing" ? "bg-black text-white" : ""
              }  rounded-md font-medium`}
              onClick={() => setService("closing")}
            >
              For Closings
            </button>
            <button
              className={`py-2 px-4 ${
                service === "esign" ? "bg-black text-white" : ""
              }  rounded-md font-medium`}
              onClick={() => setService("esign")}
            >
              eSign Only
            </button>
          </div>
          <div className="mt-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Buy annual and get extra discount!</span>
            </label>
          </div>
        </header>
        {/* Pricing Section */}

        {service === "business" || service === "closing" ? (
          <FancyBox service={service} />
        ) : (
          <PriceGrid service={service} />
        )}
        {/* -------------------- */}
      </div>
    </div>
  );
};

export default Pricing;
