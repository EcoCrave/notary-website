"use client";
import React, { useEffect, useState } from "react";
import useFirebase from "@/app/Server/authentication/useFirebase";
const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { users } = useFirebase(); // Corrected usage of the custom hook
  console.log(users);

  return (
    <div className="mt-10">
      <div className="w-[85%] mx-auto">
        <div className="text-4xl font-bold mb-6">User's Data</div>
        <div>
          <div className="grid grid-cols-5 bg-gray-900 p-3 px-5 my-6 text-lg font-semibold text-white">
            <li className="list-none">User ID</li>
            <li className="list-none">User's Email</li>
            <li className="list-none">Meeting Date</li>
            <li className="list-none">Status</li>
            <li className="list-none">View Details</li>
          </div>

          {/* Render User Details */}
          {users.map((user) => (
            <div
              key={user.id}
              className="grid grid-cols-5 bg-white shadow-md p-5 my-2 text-lg font-semibold"
            >
              <li className="list-none">{user.id}</li>
              <li className="list-none">{user.email || "N/A"}</li>
              <li className="list-none">
                {user.meetingDate || "Not Scheduled"}
              </li>
              <li className="list-none">{user.status || "Pending"}</li>
              <li className="list-none">
                <button className="text-blue-500 underline">
                  View Details
                </button>
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
