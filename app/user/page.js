import React from "react";
import Admin from "../Components/Admin/Admin";
import User from "../Components/Users/User";
import UserDashboard from "../Components/Users/UserDashboard";

export const metadata = {
  title: "User Page",
  description: "This is the Admin panel",
};

const page = () => {
  return (
    <>
      <User />
    </>
  );
};

export default page;
