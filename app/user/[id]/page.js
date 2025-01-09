"use client";
import NotificationTable from "@/app/Components/Users/NotificationTable";
import ProfileCard from "@/app/Components/Users/ProfileCard";
import useFirebase from "@/app/Server/authentication/useFirebase";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const nameToFetch = params.id;
      const data = await getDataById(nameToFetch);
      setUserDetails(data);
    };

    fetchData();
  }, [params.id]);

  const { getDataById } = useFirebase();

  return (
    <div className="mt-2">
      <div className="min-h-screen bg-gray-50 py-20 mx-auto ">
        <div className="w-[85%] mx-auto ">
          <ProfileCard user={userDetails} hide={true} />
          <div className="mt-6">
            {" "}
            <h2 className="text-3xl font-bold mt-20">Orders</h2>{" "}
          </div>
          <div className="mt-6">
            <NotificationTable notifications={userDetails.details} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
