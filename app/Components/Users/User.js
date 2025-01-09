"use client";
import useFirebase from "@/app/Server/authentication/useFirebase";
import { useEffect, useState } from "react";
import NotificationTable from "./NotificationTable";
import ProfileCard from "./ProfileCard";

const ProfilePage = () => {
  const { user, getDataById, updateUserData } = useFirebase(); // Move useFirebase to the top

  const [userDetails, setUserDetails] = useState({});
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

  if (!user) {
    return <div>Loading user...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 mx-auto ">
      <div className="w-[85%] mx-auto ">
        <ProfileCard updateUserData={updateUserData} user={userDetails} />
        <div className="mt-6">
          <h2 className="text-3xl font-bold mt-20">Orders</h2>
        </div>
        <div className="mt-6">
          <NotificationTable notifications={userDetails.details} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
