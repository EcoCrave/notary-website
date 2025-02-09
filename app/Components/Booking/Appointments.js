// import { Calendar, ChevronLeft, ChevronRight, Search } from "lucide-react";
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CheckoutButton from "../checkout-button";
import useFirebase from "@/app/Server/authentication/useFirebase";
import BookingForm from "../Checkout/BookingForm";

export default function Appointments() {
  const [appointment, setAppointment] = useState(true);
  const [userDetails, setUserDetails] = useState("");
  const { getDataById, user } = useFirebase();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user?.uid) {
          const data = await getDataById(user.uid);
          setUserDetails(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [user?.uid]);
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
          {userDetails.details ? (
            <div className="space-y-5">
              {userDetails.details.map((detail, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 shadow-md rounded-md flex justify-between items-center"
                >
                  <div className="flex flex-col px-4 py-3 bg-gradient-to-r from-gray-100 rounded-md to-white font-mono">
                    <span className="text-2xl font-bold text-gray-900 ">
                      {detail.meetingDate}
                    </span>
                    <span>{detail.meetingTime}</span>
                  </div>

                  {/*------------------------------- Payment Button --------------------------------- */}
                  <div>
                    <p className="text-center text-green-800">
                      ${detail.totalCost}
                    </p>
                    {!detail.paymentStatus == "Paid" ? (
                      <CheckoutButton
                        price={detail.totalCost}
                        name="Sample Product"
                      />
                    ) : (
                      <span className="px-5 bg-green-800 text-white py-1 rounded-full mt-2">
                        Paid
                      </span>
                    )}
                  </div>
                </div>
              ))}
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

          <div className="bg-green-700 w-fit rounded-md">
            <BookingForm appointment_title="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
}
