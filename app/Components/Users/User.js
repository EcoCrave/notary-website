"use client";

import Image from "next/image";
import React, { useState } from "react";
import UserDashboard from "./UserDashboard";
import EditUserForm from "./EditUserForm";

const User = () => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  // User data to edit
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    address: "1234 Main Street, Springfield",
  });

  const handleUpdateUser = (updatedData) => {
    // Update user data logic (e.g., API call)
    console.log("Updated User Data:", updatedData);
    setUserData(updatedData); // Simulate updating the user
    setIsEditFormOpen(false); // Close the edit form
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="py-24 bg-gray-50">
      <div className="w-[85%] mx-auto">
        <div className="flex gap-10 ">
          <div className="max-w-80 max-h-80 border-b-4 rounded-md ">
            <Image
              src="/img/nilabru.png"
              width={500}
              height={500}
              className="h-full w-full object-cover object-left-top "
              alt="Picture of our boss"
            />
          </div>
          <div className=" p-6">
            <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>

            {/* Display User Information */}
            <div className=" p-4 ">
              <p className="text-lg font-semibold">Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              <p>Phone: {userData.phone}</p>
              <p className="text-2xl font-bold mt-4">Address:</p>
              <div className="grid grid-cols-3 gap-5">
                <p>Country: {userData.address.country}</p>
                <p>Street: {userData.address.street}</p>
                <p>Zipcode: {userData.address.zipcode}</p>
              </div>
              <button
                onClick={() => setIsEditFormOpen(true)}
                className="mt-4 px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg"
              >
                Edit User
              </button>
            </div>

            {/* Edit User Form Popup */}
            {isEditFormOpen && (
              <EditUserForm
                initialData={userData}
                onClose={() => setIsEditFormOpen(false)}
                onSave={handleUpdateUser}
              />
            )}
          </div>
        </div>

        {/*.................................... Order. List.............................. */}

        <div className="relative overflow-x-auto border-t-[1px] border-gray-200 mt-7 pt-10">
          <table className="w-full text-sm text-left rtl:text-right border-b-2 text-gray-500">
            <thead className="text-xs text-gray-100 uppercase">
              <tr className="bg-gray-900">
                <th scope="col" className="px-6 text-lg py-3">
                  Applied On
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  File
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Meeting Link
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Meeting Time
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-lg">
                  Submission
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="bg-white shadow-md text-lg">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </td>
                <td className="px-6  py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Processing..</td>
                <td className="px-6 py-4">Processing..</td>
                <td className="px-6 py-4">
                  <UserDashboard
                    isModalOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />
                </td>
              </tr>
              <tr className="bg-white shadow-md text-lg">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </td>
                <td className="px-6  py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Processing..</td>
                <td className="px-6 py-4">Processing..</td>
                <td className="px-6 py-4">
                  <UserDashboard
                    isModalOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />
                </td>
              </tr>
              <tr className="bg-white shadow-md text-lg">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </td>
                <td className="px-6  py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">Processing..</td>
                <td className="px-6 py-4">
                  <UserDashboard
                    isModalOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
