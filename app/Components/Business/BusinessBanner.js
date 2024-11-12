import React from "react";

const BusinessBanner = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 back bg-[url('/img/bghome.png')] bg-cover bg-no-repeat bg-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-10">
        {/* Left Side Content */}
        <div className="lg:w-1/2 space-y-4 p-10">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
            The future is digital
          </p>
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Expand your business across the nation
          </h1>
          <p className="text-gray-700 text-lg">
            With the power of{" "}
            <span className="font-bold text-xl">
              Remote Online Notarization
            </span>{" "}
            Notarize Anytime, Anywhere, 100% Online in minutes.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <input
              type="email"
              className="border w-1/2 px-5 rounded-md"
              placeholder="email"
            />
            <button className="bg-green-900 text-white py-3 px-6 rounded-md font-medium hover:bg-green-900 transition">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBanner;
