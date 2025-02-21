"use client";
import useFirebase from "@/app/Server/authentication/useFirebase";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Notary = () => {
  const [notaries, setNotaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const handleOnClick = () => {
    toast(email);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const notaries = await getNotary();
        setNotaries(notaries);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { getNotary } = useFirebase(); // Corrected usage of the custom hook

  return (
    <div className="w-[85%] mx-auto mb-10 shadow p-6 mt-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left text-lg">User Name :</th>
            <th className="p-3 text-left text-lg">Email :</th>
            <th className="p-3 text-left text-lg">Role :</th>
            <th className="p-3 text-left text-lg">User Details :</th>
          </tr>
        </thead>
        <tbody>
          {notaries.map((user, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">
                <div>
                  <p>{user.role}</p>
                  {user.role == "user" ? (
                    <div
                      onClick={() => setEmail(user.email)}
                      className="text-sm cursor-pointer text-center rounded-full w-fit px-2 text-white bg-green-600 "
                    >
                      Make him public notary
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </td>

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

export default Notary;
