"use client";
import React, { useState } from "react";
import useFirebase from "@/app/Server/authentication/useFirebase";
const OrderDetails = ({ data, role }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage modal visibility
  const { user } = useFirebase();
  return (
    <div className=" flex  ">
      {/* Button to Open Modal */}
      <button
        className="bg-green-600 text-white px-6 py-2 rounded-md shadow hover:bg-green-700"
        onClick={() => setIsOpen(true)}
      >
        View Order Details
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          {/* Modal Content */}
          <div className="bg-white py-20 w-[80%] max-w-4xl rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Header Section */}
            <h1 className="text-2xl font-bold text-gray-800">Order Details</h1>
            <div className="mt-5 flex justify-between">
              <div className="mb-6 space-y-3">
                <div className="text-gray-500 text-lg">
                  Order ID:{" "}
                  <span className="font-semibold text-gray-700">{data.id}</span>
                </div>
                <div className="text-gray-500 text-sm">
                  Application Date:{" "}
                  <span className="font-semibold text-gray-700">
                    {data.date}
                  </span>
                </div>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    data.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {data.status}
                </span>
              </div>
              <div className="relative flex flex-col">
                <h2 className="absolute top-0 right-10 text-4xl font-bold text-green-900">
                  $40
                </h2>
                <h2
                  className={`bg-red-700 rounded text-white px-5 absolute top-10 right-10`}
                >
                  Not paid
                </h2>
              </div>
            </div>

            {/* Main Content */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-3">
                {/* Customer Info */}
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Customer
                  </h2>
                  <p className="text-gray-600">
                    Name: {data.f_name + "" + data.l_name}
                  </p>
                  <p className="text-gray-600">Email: {data.assignedEmail}</p>
                  <p className="text-gray-600">State: {data.state}</p>
                </div>

                {/* Order Info */}
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Booking Info
                  </h2>
                  <p className="text-gray-600">
                    Meeting Time: {data.meetingDate}
                  </p>
                  <p className="text-gray-600">
                    Meeting Link:{" "}
                    <a
                      href={data.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Join Meeting
                    </a>
                  </p>
                  <p className="text-gray-600">Service Type: {data.service}</p>
                </div>

                {/* Uploaded Files */}
                <div className="col-span-1 md:col-span-2">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Uploaded Files
                  </h2>
                  <div className="list-disc list-inside flex gap-5 text-gray-600">
                    <a
                      target="_blank"
                      href={data.signatureURL}
                      className="hover:text-blue-700 hover:underline"
                    >
                      ESign
                    </a>

                    <a
                      target="_blank"
                      href={data.selfieURL}
                      className="hover:text-blue-700 hover:underline"
                    >
                      ID Selfie
                    </a>

                    <a
                      target="_blank"
                      href={data.documentURL}
                      className="hover:text-blue-700 hover:underline"
                    >
                      Document
                    </a>
                  </div>
                </div>
              </div>

              {/* Only Admin can see this section..................... */}

              {role == "admin" && (
                <>
                  <h1 className="text-center my-6 font-bold text-2xl">
                    Only Admin Is allowed to fill the input
                  </h1>
                  <div className="flex justify-between w-full items-center gap-10">
                    <div className="space-y-2 w-1/4">
                      {" "}
                      <span className=""> Order Status : </span>
                      <select
                        name="Order Status"
                        value={data.status}
                        // onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2"
                      >
                        <option value="">Select Status</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Approved">Approved</option>
                        <option value="Finished">Finished</option>
                      </select>
                    </div>
                    <div className="space-y-2 w-1/4">
                      {" "}
                      <span className=""> Payment Status : </span>
                      <select
                        name="Payment Status"
                        value={data.status}
                        // onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2"
                      >
                        <option value="">Select Status</option>
                        <option value="In Progress">Not Paid</option>
                        <option value="Approved">Paid</option>
                      </select>
                    </div>
                    <div className="flex flex-col space-y-2 w-1/3">
                      <label>Meeting Link</label>
                      <input type="text" className="border p-1" />
                    </div>
                    <div className="w-1/3">
                      <label>Meeting Time</label>
                      <input type="text" className="border p-1" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
