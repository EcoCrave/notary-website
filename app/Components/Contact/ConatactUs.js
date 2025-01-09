"use client";

import { sendEmail } from "@/app/contact/(connectResendMail)/resend.js";
import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
function send() {
  sendEmail();
}
const ContactUs = () => {
  return (
    <div className="bg-gray-100">
      {" "}
      <div className="min-h-screen w-[85%] mx-auto py-20 flex items-center justify-center ">
        <div className="container mx-auto bg-white shadow-lg rounded-lg flex flex-col lg:flex-row overflow-hidden">
          {/* Left Section - Form */}
          <div className="lg:w-1/2 p-10 space-y-6">
            <h2 className="lg:text-5xl text-4xl font-bold">Contact Us</h2>
            <p className="text-gray-600">
              Feel free to contact us any time. We will get back to you as soon
              as we can!
            </p>
            <form action={send} className="space-y-6">
              <div className="space-y-5">
                <label className="block text-gray-700 font-semibold text-xl">
                  Name :{" "}
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border-b-2 border-gray-300  outline-none"
                />
              </div>
              <div className="space-y-5">
                <label className="block text-gray-700 font-semibold text-xl">
                  Email :{" "}
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border-b-2 border-gray-300  outline-none"
                />
              </div>
              <div className="space-y-5">
                <label className="block text-gray-700 font-semibold text-xl">
                  Message :{" "}
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 border-b-2 border-gray-300  outline-none"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white bg-gradient-to-r from-green-900 to-green-700 rounded-lg font-semibold hover:bg-green-950"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right Section - Contact Info */}
          <div className=" p-10 bg-gray-900 text-white">
            <h2 className="text-5xl font-bold text-white mb-8">Contact Info</h2>
            <div className="space-y-4">
              <li className="list-none items-center">
                <span className="text-green-600 font-bold text-2xl">
                  Phone :{" "}
                </span>
                <span>+91 8009 054294</span>
              </li>
              <li className="list-none">
                <span className="text-green-600 font-bold text-2xl">
                  Email :{" "}
                </span>
                <span>info@flightmantra.com</span>
              </li>
              <li className=" list-none">
                <span className="text-green-600 text-2xl font-bold">
                  Location_on :{" "}
                </span>
                <span className="leading-1">
                  1000+ Travel partners and 65+ Service city across India, USA,
                  Canada & UAE
                </span>
              </li>
            </div>
            <div className="mt-8 flex space-x-6">
              <FaFacebook className="text-3xl cursor-pointer" />
              <FaInstagramSquare className="text-3xl cursor-pointer" />
              <FaLinkedin className="text-3xl cursor-pointer" />
              <FaTiktok className="text-3xl cursor-pointer" />
              <FaPinterest className="text-3xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
