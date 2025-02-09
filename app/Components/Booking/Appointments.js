// import { Calendar, ChevronLeft, ChevronRight, Search } from "lucide-react";
"use client";
import Image from "next/image";
import { useState } from "react";
import CheckoutButton from "../checkout-button";

export default function Appointments() {
  const [appointment, setAppointment] = useState(true);
  return (
    <div className="w-full bg-gray-50">
      <div className="w-[85%] mx-auto py-10 bg-gray-50 mt-10 grid md:grid-cols-2 gap-8">
        {/* Left section - Appointments */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-green-950">
              Next appointments
            </h1>
          </div>
          {appointment ? (
            <div className="space-y-5">
              <div className="bg-gray-50 p-3 shadow-md rounded-md flex justify-between items-center">
                <div className="flex flex-col px-4 py-3 bg-gradient-to-r from-gray-100 rounded-md to-white font-mono">
                  <span className="text-2xl font-bold text-gray-900 ">
                    Jun 12th,2025
                  </span>
                  <span>10.30 UST</span>
                </div>

                {/*------------------------------- Payment Button --------------------------------- */}
                <div>
                  <CheckoutButton price={19.99} name="Sample Product" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
              <p className="text-gray-500">You have no current appointments.</p>
            </div>
          )}
        </div>

        {/* Right section - Book appointment */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-green-90 mb-4">
              Book appointment
            </h2>
            <p className="text-gray-600">
              Usually, an online meeting with the notary can take place within
              the next 24h.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6">
            <button className="bg-green-600 hover:bg-green-700">
              Book appointment
            </button>

            <div className="relative w-full h-64 mt-8">
              <Image
                src="/placeholder.svg"
                alt="Calendar illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
