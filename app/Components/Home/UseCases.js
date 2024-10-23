import Link from "next/link";
import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { FaFingerprint } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const UseCases = () => {
  return (
    <div className=" bg-gray-900 py-10">
      <div className="w-[90%] m-auto ">
        <div className="text-center text-white py-8 space-y-3">
          <h3 className="text-md">SOLUTIONS WE PROVIDE</h3>
          <h2 className="text-4xl font-bold">Business Use Cases</h2>
        </div>
        <div className="w-full items-center p-10 rounded-2xl flex justify-center gap-10 bg-gradient-to-r from-orange-500 to-green-700 shadow-md m-auto my-10 sticky top-[90px]">
          <div className="space-y-5 text-white">
            <h2 className="text-4xl font-bold">
              For <br /> Law Firms
            </h2>
            <div className="flex items-center gap-5 border-b pb-5 border-gray-500">
              <div className="flex items-center gap-1">
                <BsClockHistory />
                <span>Faster</span>
              </div>
              <div className="flex items-center gap-1">
                <FaFingerprint />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <IoSettingsOutline />
                <span>Convenient</span>
              </div>
            </div>
            <p>
              We are your secret weapon for quickly & securely notarizing all
              your documents online.
            </p>
            <div>
              <Link className="bg-green-900 p-2 space-y-2" href="">
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://bluenotary.us/assets/images/for_lawfirm.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full p-10 rounded-2xl items-center flex justify-center gap-10 bg-gradient-to-r from-green-800 to-green-700 shadow-md m-auto my-10 sticky top-[110px]">
          <div className="space-y-5  text-white">
            <h2 className="text-4xl font-bold">
              For <br /> Title Agents
            </h2>
            <div className="flex items-center gap-5 border-b pb-5 border-gray-500">
              <div className="flex items-center gap-1">
                <BsClockHistory />
                <span>Faster</span>
              </div>
              <div className="flex items-center gap-1">
                <FaFingerprint />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <IoSettingsOutline />
                <span>Convenient</span>
              </div>
            </div>
            <p>
              Unlock peace of mind with our rapid and secure online notarization
              for all your important documents.
            </p>
            <div>
              <Link className="bg-green-900 p-2 space-y-2" href="">
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://bluenotary.us/assets/images/title_agents.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full p-10 items-center rounded-2xl flex justify-center gap-10 bg-gradient-to-r from-blue-800 to-green-700 shadow-md m-auto my-10 sticky top-[130px]">
          <div className="space-y-5 text-white">
            <h2 className="text-4xl font-bold">
              For <br /> Business
            </h2>
            <div className="flex items-center gap-5 border-b pb-5 border-gray-500">
              <div className="flex items-center gap-1">
                <BsClockHistory />
                <span>Faster</span>
              </div>
              <div className="flex items-center gap-1">
                <FaFingerprint />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <IoSettingsOutline />
                <span>Convenient</span>
              </div>
            </div>
            <p>
              Your silent partner in quickly and safely notarizing every
              document you have—entirely online.
            </p>
            <div>
              <Link className="bg-green-900 p-2 space-y-2" href="">
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://bluenotary.us/assets/images/for_business.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full items-center p-10 rounded-2xl flex justify-center gap-10 bg-gradient-to-r from-purple-500 to-green-700  shadow-md m-auto my-10 sticky top-[150px]">
          <div className="space-y-5 text-white">
            <h2 className="text-4xl font-bold">
              For <br /> Individual
            </h2>
            <div className="flex items-center gap-5 border-b pb-5 border-gray-500">
              <div className="flex items-center gap-1">
                <BsClockHistory />
                <span>Faster</span>
              </div>
              <div className="flex items-center gap-1">
                <FaFingerprint />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <IoSettingsOutline />
                <span>Convenient</span>
              </div>
            </div>
            <p>
              We are your secret weapon for quickly & securely notarizing all
              your documents online.
            </p>
            <div>
              <Link className="bg-green-900 p-2 space-y-2" href="">
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://bluenotary.us/assets/images/for_individual.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full items-center p-10 rounded-2xl flex justify-center gap-10 bg-gradient-to-r from-teal-500 to-green-700  shadow-md m-auto my-10 sticky top-[170px]">
          <div className="space-y-5 text-white">
            <h2 className="text-4xl font-bold">
              For <br /> Construction
            </h2>
            <div className="flex items-center gap-5 border-b pb-5 border-gray-500">
              <div className="flex items-center gap-1">
                <BsClockHistory />
                <span>Faster</span>
              </div>
              <div className="flex items-center gap-1">
                <FaFingerprint />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <IoSettingsOutline />
                <span>Convenient</span>
              </div>
            </div>
            <p>
              The hidden ace up your sleeve for fast, trustworthy online
              document notarization.
            </p>
            <div>
              <Link className="bg-green-900 p-2 space-y-2" href="">
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://bluenotary.us/assets/images/for_construction.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full items-center p-10 rounded-2xl flex justify-center gap-10 bg-gradient-to-r from-slate-500 to-green-700  shadow-md m-auto my-10 sticky top-[190px]">
          <div className="space-y-5 text-white">
            <h2 className="text-4xl font-bold">
              For <br /> Real Estate
            </h2>
            <div className="flex items-center gap-5 border-b pb-5 border-gray-500">
              <div className="flex items-center gap-1">
                <BsClockHistory />
                <span>Faster</span>
              </div>
              <div className="flex items-center gap-1">
                <FaFingerprint />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <IoSettingsOutline />
                <span>Convenient</span>
              </div>
            </div>
            <p>
              Your go-to solution for swift and secure online notarization of
              all your documents.
            </p>
            <div>
              <Link className="bg-green-900 p-2 space-y-2" href="">
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://bluenotary.us/assets/images/for_real_estate.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
