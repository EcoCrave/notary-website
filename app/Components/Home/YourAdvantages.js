import React from "react";
import Timeline from "./Timeline";

const YourAdvantages = () => {
  return (
    <div className="bg-gray-50">
      <div className="w-[90%] mx-auto  text-center p-10 space-y-4">
        <h3 className="text-lg uppercase ">Your advantages</h3>
        <h2 className="text-3xl font-bold ">
          Why your company should use notarity
        </h2>
        <p className="lg:w-[70%] mx-auto pt-5">
          Effortlessly manage complex legal tasks across borders with notarity.
          Our platform facilitates secure, fast, and cost-effective online
          notarisation for your global teams, eliminating the need for physical
          appointments and extensive paperwork. Enhance your operational
          efficiency and ensure compliance with notarity's innovative digital
          solutions, designed to streamline legal workflows.
        </p>
        <Timeline />
      </div>
    </div>
  );
};

export default YourAdvantages;
