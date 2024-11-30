import React from "react";

const WhyUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-5">
          <p className="text-lg uppercase tracking-widest text-gray-500 font-semibold">
            Your advantages
          </p>
          <h2 className="text-5xl pr-10 font-bold text-green-900 leading-tight mt-2">
            Why use notarity?{" "}
          </h2>
          <p className="text-lg">
            We have developed an offer that is perfectly tailored to a bank's
            document authentication needs. Some advantages include:
          </p>
        </div>

        {/* Right Section - Benefits */}
        {/* Right Section - Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <div className="bg-gradient-to-b from-green-50 hover:-translate-y-2 cursor-pointer duration-300 to-white shadow-md p-5 rounded ">
            <h3 className="text-2xl font-semibold ">Effort reduction</h3>
            <p className="   text-lg mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
            </p>
          </div>
          {/* Benefit 2 */}
          <div className="bg-gradient-to-b from-blue-50 hover:-translate-y-2 cursor-pointer duration-300 shadow-md to-white p-5 rounded ">
            <h3 className="text-2xl font-semibold ">Effort reduction</h3>
            <p className="   text-lg mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
            </p>
          </div>
          {/* Benefit 3 */}
          <div className="bg-gradient-to-b hover:-translate-y-2 cursor-pointer duration-300 from-blue-50 shadow-md to-white p-5 rounded ">
            <h3 className="text-2xl font-semibold ">Effort reduction</h3>
            <p className="   text-lg mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
            </p>
          </div>
          {/* Benefit 4 */}
          <div className="bg-gradient-to-b hover:-translate-y-2 cursor-pointer duration-300 from-blue-50 shadow-md to-white p-5 rounded ">
            <h3 className="text-2xl font-semibold ">Effort reduction</h3>
            <p className="   text-lg mt-2">
              Reduce your administrative workload when organising notary
              appointments for your clients by 90%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
