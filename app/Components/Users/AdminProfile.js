"use client";
import Image from "next/image";
import React, { useState } from "react";

const AdminProfile = ({ notifications, role }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  //   const handleUpdate = async (updatedData) => {
  //     try {
  //       await updateUserData(user.uid, updatedData); // Update user data in Firestore
  //       setUserData(updatedData); // Update local state
  //       toast.success("Profile updated successfully!");
  //     } catch (error) {
  //       toast.error("Error updating profile:", error);
  //     }
  //   };

  return (
    <div className=" text-4xl text-black">
      <div className=" flex justify-between items-center rounded-lg py-6">
        <div className="flex space-x-8">
          <div className=" ">
            {/* User Photo */}
            <Image
              width="400"
              height="400"
              src={notifications?.photoURL || "/img/avatar.webp"}
              alt="Admin"
              className="md:w-40 md:h-40  border border-gray-300"
            />
            <div className="mt-3">
              {/* Name and Ratings */}

              {/* {!hide && (
                <span
                  onClick={() => setIsPopupOpen(true)}
                  className="flex items-start space-x-2 border-b cursor-pointer  border-black w-fit mt-3"
                >
                  <p className="text-sm"> Edit Profile </p>
                  <FaEdit className="text-sm" />
                </span>
              )} */}

              {/* <UpdateProfilePopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onUpdate={handleUpdate}
                existingData={userData}
                user={user} /> */}
            </div>
          </div>

          {/* Details */}
          <div className=" space-y-4  ">
            <div className="flex">
              <h2 className="text-3xl font-bold text-gray-700">
                {notifications?.fullName}
              </h2>
            </div>
            <div className="flex ">
              <p className="font-semibold">ID: </p>
              <p>{notifications?.uid}</p>
            </div>
            <div className=" space-x-2">
              <h3 className="text-2xl font-semibold border-b-2 border-gray-300">
                Contact Info
              </h3>{" "}
            </div>
            <div className="flex space-x-2">
              <p className="font-semibold">Email: </p>
              <p>{notifications?.email}</p>
            </div>
            <div className="flex space-x-2">
              <p className="font-semibold">Phone Number: </p>
              <p>{notifications?.phoneNumber}</p>
            </div>
          </div>
        </div>
        {/* <div className="bg-white rounded-lg shadow-sm p-6 max-w-[50%]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Book appointment
            </h2>
            <p className="text-gray-600">
              Usually, an online meeting with the notary can take place within
              the next 24h.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AdminProfile;
