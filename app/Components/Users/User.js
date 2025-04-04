"use client";
import useFirebase from "@/app/Server/authentication/useFirebase";
import { useEffect, useState } from "react";
import NotificationTable from "./NotificationTable";
import ProfileCard from "./ProfileCard";
import { toast } from "react-toastify";
import AdminProfile from "./AdminProfile";
import NotaryProfile from "./NotaryProfile";

const ProfilePage = () => {
  const {
    user,
    getDataById,
    updateUserData,
    deleteCurrentUser,
    currentLogedIn,
    getNotaryByID,
    deleteUserData,
    getNotaryByEmail,
    handleLogout,
  } = useFirebase(); // Move useFirebase to the top
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [confirmationInput, setConfirmationInput] = useState(""); // Input for confirmation

  // Function to handle delete action
  const handleDelete = () => {
    if (confirmationInput === "DELETE") {
      deleteUserData();
      deleteCurrentUser();
      handleLogout();
      setIsModalOpen(false);
      setConfirmationInput("");
      toast.success("User Permanently Deleted!");
      // Add your delete logic here, such as calling an API or updating the database
    } else {
      toast.error("You must type DELETE to confirm.");
    }
  };
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (currentLogedIn.role == "notary") {
        const data = await getNotaryByEmail(currentLogedIn?.email);
        setUserDetails(data);
      }
      if (currentLogedIn.role == "admin" || currentLogedIn.role == "user") {
        const data = await getDataById(currentLogedIn?.uid);
        setUserDetails(data);
      }
    };

    fetchData();
  }, [currentLogedIn.uid]);

  if (!user) {
    return <div>Loading user...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 mx-auto ">
      <div className="w-[85%] mx-auto ">
        {userDetails?.role == "user" && (
          <div>
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
        )}

        {userDetails?.role == "admin" && (
          <AdminProfile
            role={currentLogedIn.role}
            notifications={userDetails}
          />
        )}

        {userDetails?.role == "notary" && (
          <NotaryProfile
            role={currentLogedIn.role}
            notifications={userDetails}
          />
        )}

        {/* ------------------------------------------------------------------ */}
        <div>
          {/* <button>Delete User</button> */}
          <div className="text-right mt-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete Account
            </button>

            {/* Modal */}
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

          {/* -------------------- */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
