"use client";
import NotificationTable from "@/app/Components/Users/NotificationTable";
import ProfileCard from "@/app/Components/Users/ProfileCard";
import useFirebase from "@/app/Server/authentication/useFirebase";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UserProfileClient = ({ userDetails, userId }) => {
  const { deleteUserByUID, currentLogedIn } = useFirebase();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationInput, setConfirmationInput] = useState("");

  const handleDelete = () => {
    if (confirmationInput === "DELETE") {
      deleteUserByUID(userId);
      setIsModalOpen(false);
      setConfirmationInput("");
    } else {
      toast.error("You must type DELETE to confirm.");
    }
  };

  return (
    <div className="mt-2 ">
      <div className="min-h-screen w-[85%] mx-auto  py-20  ">
        <div className=" ">
          <ProfileCard user={userDetails} hide={true} />
          <div className="mt-6">
            <h2 className="text-3xl font-bold mt-20">Applications : </h2>
          </div>
          <div className="mt-6">
            <NotificationTable
              role={currentLogedIn.role}
              notifications={userDetails.details}
            />
          </div>
        </div>
        <div>
          <div className="text-right mt-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete Account
            </button>

            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white text-left rounded-lg shadow-lg p-6 w-full max-w-sm">
                  <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    To confirm the deletion, type <strong>DELETE</strong> in the
                    box below.
                  </p>
                  <input
                    type="text"
                    value={confirmationInput}
                    onChange={(e) => setConfirmationInput(e.target.value)}
                    placeholder="Type DELETE here"
                    className="w-full border border-gray-300 rounded p-2 mb-4"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDelete}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileClient;
