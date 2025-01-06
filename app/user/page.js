import React from "react";
import User from "../Components/Users/User";

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
