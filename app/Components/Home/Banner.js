import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const Banner = () => {
  return (
    <main className="bg-gray-100 py-10 ">
      <div className="w-[90%] items-center flex gap-8 mx-auto space-y-4">
        <div className="w-1/2 space-y-6">
          <span className="uppercase">The future is digital</span>
          <h1 className="text-4xl font-bold">
            Don’t Hesitate in Choosing the Right Notary
          </h1>
          <p>
            notarity helps you and your clients to digitalise the cooperation
            with notaries. This enables you to work more efficiently, save time
            and money and offer your clients an innovative service.
          </p>
          <div className="gap-4 flex mx-auto">
            <button className="bg-green-800 px-4 py-2 rounded-md text-white">
              Arrange an appointment
            </button>
            <button>Contact Us</button>
          </div>
        </div>
        <div className="w-1/2 relative">
          <img
            className=""
            src="https://bluenotary.us/assets/ron-banner.jpg"
            alt=""
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <FaCirclePlay className="text-7xl text-white rounded-full bg-black border" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
