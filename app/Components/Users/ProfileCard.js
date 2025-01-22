import { useState } from "react";
import * as animationData from "../../../public/img/animation.json";
import { FaEdit } from "react-icons/fa";
import UpdateProfilePopup from "./UpdateProfilePopup";
import { toast } from "react-toastify";
import Image from "next/image";
import BookingForm from "../Checkout/BookingForm";
import Lottie from "lottie-react";
const ProfileCard = ({ user, updateUserData, hide, verify }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const handleUpdate = async (updatedData) => {
    try {
      await updateUserData(user.uid, updatedData); // Update user data in Firestore
      setUserData(updatedData); // Update local state
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Error updating profile:", error);
    }
  };

  return (
    <div className=" flex gap-x-20 rounded-lg p-6">
      <div className=" items-start">
        {/* User Photo */}
        <Image
          width="400"
          height="400"
          src={user.photoURL || "/default-avatar.png"}
          alt="User"
          className="md:w-40 md:h-40  border border-gray-300"
        />
        <div className="mt-3">
          {/* Name and Ratings */}
          <div className="flex">
            <h2 className="text-3xl font-bold text-gray-700">
              {user.fullName}
            </h2>
          </div>
          {verify === true ? (
            <p className="text-sm bg-green-500 px-2 w-fit text-white font-semibold rounded-full">
              {" "}
              Account verified{" "}
            </p>
          ) : (
            <p className="text-sm bg-red-500 px-2 w-fit text-white font-semibold rounded-full">
              Account Not Verified
            </p>
          )}

          {!hide && (
            <span
              onClick={() => setIsPopupOpen(true)}
              className="flex items-start space-x-2 border-b cursor-pointer  border-black w-fit mt-3"
            >
              <p className="text-sm"> Edit Profile </p>
              <FaEdit className="text-sm" />
            </span>
          )}

          <UpdateProfilePopup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            onUpdate={handleUpdate}
            existingData={userData}
            user={user}
          />
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-4 text-md ">
        <div className="flex items-center space-x-2">
          <p className="font-semibold">User ID : </p>
          <p>{user.uid}</p>
        </div>
        <div className="flex items-center space-x-2">
          <h3 className="text-2xl font-semibold border-b-2 border-gray-300">
            Contact Info
          </h3>{" "}
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">Email : </p>
          <p>{user.email}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">Phone Number : </p>
          <p>{user.phoneNumber}</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-900 mb-4">
            Book appointment
          </h2>
          <p className="text-gray-600">
            Usually, an online meeting with the notary can take place within the
            next 24h.
          </p>
        </div>

        <div className="flex relative flex-col items-start ">
          <div className="bg-green-700 rounded-md">
            <BookingForm appointment_title="Book an appointment" />
          </div>

          <div className="  mt-8">
            <Lottie
              className="w-40 absolute top-0 right-0"
              animationData={animationData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
