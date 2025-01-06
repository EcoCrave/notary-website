"use client";
import React, { useState } from "react";

const OrderDetails = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage modal visibility

  const order = {
    id: "#167895",
    date: "Mon, July 22, 2023",
    meetingDate: "July 23, 2023, 10:00 AM",
    meetingLink: "https://example.com/meeting-link",
    name: "Maria Aniston",
    adviserEmail: "mariaaniston@wholesaletronics.com",
    address: "123 Main St, Springfield, USA",
    service: "Consultation Service",
    status: "Approved",
    files: [
      { name: "File1.pdf", url: "https://example.com/file1.pdf" },
      { name: "File2.docx", url: "https://example.com/file2.docx" },
    ],
  };

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
            <div className="mb-6 space-y-3">
              <h1 className="text-2xl font-bold text-gray-800">
                Order Details
              </h1>
              <div className="text-gray-500 text-lg">
                Order ID:{" "}
                <span className="font-semibold text-gray-700">{order.id}</span>
              </div>
              <div className="text-gray-500 text-sm">
                Scheduled Date:{" "}
                <span className="font-semibold text-gray-700">
                  {order.date}
                </span>
              </div>
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  order.status === "Approved"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {order.status}
              </span>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-3">
              {/* Customer Info */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Customer
                </h2>
                <p className="text-gray-600">Name: {order.name}</p>
                <p className="text-gray-600">Email: {order.adviserEmail}</p>
                <p className="text-gray-600">State: {order.address}</p>
              </div>

              {/* Order Info */}
              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Order Info
                </h2>
                <p className="text-gray-600">
                  Meeting Date: {order.meetingDate}
                </p>
                <p className="text-gray-600">
                  Meeting Link:{" "}
                  <a
                    href={order.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Join Meeting
                  </a>
                </p>
                <p className="text-gray-600">Service Type: {order.service}</p>
              </div>

              {/* Uploaded Files */}
              <div className="col-span-1 md:col-span-2">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Uploaded Files
                </h2>
                <ul className="list-disc list-inside text-gray-600">
                  {order.files.map((file, index) => (
                    <li key={index}>
                      <a
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
