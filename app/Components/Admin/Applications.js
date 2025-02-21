"use client";
import useFirebase from "@/app/Server/authentication/useFirebase";
import React, { useEffect, useState } from "react";
import OrderDetails from "../Users/OrderDetails";
const Applications = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getFormData();

        setdata(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { getFormData, currentLogedIn } = useFirebase(); // Corrected usage of the custom hook

  return (
    <div className="w-[85%] mx-auto mb-10 shadow p-6 mt-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left text-lg">User:</th>
            <th className="p-3 text-left text-lg">Payment Status :</th>
            <th className="p-3 text-left text-lg">meeting Link :</th>
            <th className="p-3 text-left text-lg">Meeting Time :</th>
            <th className="p-3 text-left text-lg">View Details :</th>
          </tr>
        </thead>
        <tbody>
          {data.map((userData, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">{userData.userEmail}</td>
              <td className="">
                <p
                  className={`px-5 py-1 text-white text-sm rounded-full font-semibold ${
                    userData.paymentStatus == "Paid"
                      ? "bg-green-700 w-fit "
                      : "bg-red-700 w-fit"
                  }`}
                >
                  {" "}
                  {userData.paymentStatus}
                </p>
              </td>
              <td className="p-3">{userData.meetingLink}</td>
              <td className="p-3">
                {userData.meetingDate} {""} {userData.meetingTime}{" "}
              </td>

              <td>
                <OrderDetails role={currentLogedIn.role} data={userData} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
