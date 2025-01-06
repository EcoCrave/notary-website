import NotificationTable from "@/app/Components/Users/NotificationTable";
import ProfileCard from "@/app/Components/Users/ProfileCard";
import React from "react";
// Mock User Data
const user = {
  name: "Jannie Regel",
  photoURL: "https://via.placeholder.com/80",
  rating: 214,
  trust: 85,
  gender: "Female",
  birthDate: "23/02/1987",
  phone: "263 281 480",
  bloodType: "AB+",
};

// Mock Notifications
const notifications = [
  {
    type: "Accident",
    time: "27/07/2017, 14:32",
    status: "Done",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    type: "Violence",
    time: "27/07/2017, 17:32",
    status: "Pending",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    type: "Robbery",
    time: "24/07/2017, 21:45",
    status: "Done",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    type: "Ambulance",
    time: "24/07/2017, 09:52",
    status: "Done",
    description: "Lorem ipsum dolor sit amet.",
  },
];
const page = ({ params }) => {
  return (
    <div className="mt-2">
      <div className="min-h-screen bg-gray-50 py-20 mx-auto ">
        <div className="w-[85%] mx-auto ">
          <ProfileCard user={user} />
          <div className="mt-6">
            {" "}
            <h2 className="text-3xl font-bold mt-20">Orders</h2>{" "}
          </div>
          <div className="mt-6">
            <NotificationTable notifications={notifications} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
