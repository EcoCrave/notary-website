import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const Banner = () => {
  return (
    <main className=" py-36 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-[85%] items-center flex gap-12 mx-auto ">
        <div className="w-1/2 space-y-10">
          <p className="uppercase font-semibold ">
            Starts with only{" "}
            <span className="font-bold text-4xl text-green-900">$25</span>{" "}
          </p>
          <h1 className="text-5xl font-bold">
            Don’t Hesitate in Choosing <br /> the Right Notary
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
        <div className="w-1/2 relative rounded-md">
          <img
            className="rounded-xl"
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
