"use client";
import useFirebase from "@/app/Server/authentication/useFirebase";

import React, { useEffect, useState } from "react";

const ActiveProjectsTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const users = await getUsers();
        setUsers(users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { getUsers } = useFirebase(); // Corrected usage of the custom hook
  console.log(users);

  return (
    <div className="w-[85%] mx-auto mb-10 shadow p-6 mt-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left text-lg">User Name :</th>
            <th className="p-3 text-left text-lg">Email :</th>
            <th className="p-3 text-left text-lg">User ID :</th>
            <th className="p-3 text-left text-lg">User Details :</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.uid}</td>

              <td>
                <a
                  href={`/user/${user.uid}`}
                  className="border-b border-black hover:border-blue-800 hover:text-blue-800"
                >
                  View Details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveProjectsTable;
