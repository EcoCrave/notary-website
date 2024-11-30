import React from "react";
import Timeline from "./Timeline";

const YourAdvantages = () => {
  return (
    <div className="">
      <div className="w-[85%] mx-auto space-y-4 text-center py-10 ">
        <h3 className="text-lg uppercase font-semibold">Your advantages</h3>
        <h2 className="text-5xl font-bold ">
          Why your company should use notarity
        </h2>
        <p className=" mx-auto pt-5">
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
