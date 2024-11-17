import React from "react";

const Features = () => {
  return (
    <div className="mt-28 bg-gray-50 py-10">
      <div className="w-[80%] mx-auto">
        <div className="text-center space-y-3">
          <h2 className="text-5xl font-bold">Our Features</h2>
          <h3 className="text-4xl font-semibold">
            Get ahead of your competition
          </h3>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white hover:bg-green-900 hover:text-white transform hover:-translate-y-1 cursor-pointer duration-1000 p-10 rounded text-black shadow-md">
              <h3 className="text-2xl font-semibold ">Locally flexible</h3>
              <p className="  text-lg mt-2">
                Reduce your administrative workload when organising notary
                appointments for your clients by 90%.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-white hover:bg-green-900 hover:text-white transform hover:-translate-y-1 cursor-pointer duration-300 p-10 rounded text-black shadow-md">
              <h3 className="text-2xl font-semibold ">Cost saving</h3>
              <p className="  text-lg mt-2">
                Reduce your administrative workload when organising notary
                appointments for your clients by 90%.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="bg-white hover:bg-green-900 hover:text-white transform hover:-translate-y-1 cursor-pointer duration-300 p-10 rounded text-black shadow-md">
              <h3 className="text-2xl font-semibold ">
                Digital total solution
              </h3>
              <p className="  text-lg mt-2">
                Reduce your administrative workload when organising notary
                appointments for your clients by 90%.
              </p>
            </div>
            {/* Benefit 4 */}
            <div className="bg-white hover:bg-green-900 hover:text-white transform hover:-translate-y-1 cursor-pointer duration-300 p-10 rounded text-black shadow-md">
              <h3 className="text-2xl font-semibold ">Time saving</h3>
              <p className="  text-lg mt-2">
                Reduce your administrative workload when organising notary
                appointments for your clients by 90%.
              </p>
            </div>
            <div className="bg-white hover:bg-green-900 hover:text-white transform hover:-translate-y-1 cursor-pointer duration-300 p-10 rounded text-black shadow-md">
              <h3 className="text-2xl font-semibold ">Time saving</h3>
              <p className="  text-lg mt-2">
                Reduce your administrative workload when organising notary
                appointments for your clients by 90%.
              </p>
            </div>
            <div className="bg-white hover:bg-green-900 hover:text-white transform hover:-translate-y-1 cursor-pointer duration-300 p-10 rounded text-black shadow-md">
              <h3 className="text-2xl font-semibold ">Time saving</h3>
              <p className="  text-lg mt-2">
                Reduce your administrative workload when organising notary
                appointments for your clients by 90%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
