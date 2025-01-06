import { FaEdit } from "react-icons/fa";
const ProfileCard = ({ user }) => {
  return (
    <div className=" flex gap-x-20 rounded-lg p-6">
      <div className=" items-start">
        {/* User Photo */}
        <img
          src={user.photoURL}
          alt="User"
          className="md:w-40 md:h-40  border border-gray-300"
        />
        <div className="mt-3">
          {/* Name and Ratings */}
          <div className="flex">
            <h2 className="text-xl font-bold text-gray-700">
              {user.displayName}
            </h2>
          </div>

          {user.emailVerified === true ? (
            <p className="text-sm bg-green-500 px-2 w-fit text-white font-semibold rounded-full">
              {" "}
              Account verified{" "}
            </p>
          ) : (
            <p className="text-sm bg-red-500 px-2 w-fit text-white font-semibold rounded-full">
              Account Not Verified
            </p>
          )}
          <span className="flex items-start space-x-2 border-b cursor-pointer  border-black w-fit mt-3">
            <p className="text-sm"> Edit Profile </p>
            <FaEdit className="text-sm" />
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 space-y-4 text-md">
        <div className="flex items-center space-x-2">
          <p className="font-semibold">User ID : </p>
          <p>{user.uid}</p>
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
    </div>
  );
};

export default ProfileCard;
