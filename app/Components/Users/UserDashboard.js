"use client";
import React, { useState } from "react";

const UserDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [userData, setUserData] = useState({
    address: "Vashantek, Dhaka - 1206",
    country: "Bangladesh",
    zipcode: "WC2E 7EE",
    adviserEmail: "ecocraveworld@gmail.com",
    assignedEmail: "ecocraveworld@gmail.com",
    bookedDate: "2024-12-17",
    bookedTime: "18:12",
    chosenServices: ["Service 1", "Service 2"],
    createdAt: "December 23, 2024 at 3:10:36 PM UTC+6",
    dateOfBirth: "2024-12-13",
    documentURL:
      "https://firebasestorage.googleapis.com/v0/b/notary-99410.firebasestorage.app/o/documents%2Fedited%20(2).pdf?alt=media&token=5d2ab854-f4c9-4d98-a81b-3f1534a720ef",
    idCardNumber: "fdsfds",
    idCardType: "fds",
    phoneNumber: "01644842785",
    selfieURL:
      "https://firebasestorage.googleapis.com/v0/b/notary-99410.firebasestorage.app/o/selfies%2Fedited%20(2).pdf?alt=media&token=987c0362-f229-4ecd-a941-6c2a3d1474ca",
    signatureURL:
      "https://firebasestorage.googleapis.com/v0/b/notary-99410.firebasestorage.app/o/signatures%2Fedited%20(2).pdf?alt=media&token=78425f13-52bb-42f7-b78f-bd67dc55cfa6",
    userEmail: "ecocraveworld@gmail.com",
    userId: "JG9KEAF0AwfwosThb3iXqS7KSv63",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated Data:", userData); // Save the data to server or state management
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>

        <div className="space-y-4">
          {Object.entries(userData).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-4">
              <label className="w-1/4 text-gray-700 capitalize" htmlFor={key}>
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              {isEditing ? (
                <input
                  id={key}
                  name={key}
                  value={Array.isArray(value) ? value.join(", ") : value}
                  onChange={handleInputChange}
                  className="w-3/4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="w-3/4 text-gray-900">
                  {Array.isArray(value) ? value.join(", ") : value}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6 space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Edit Data
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
