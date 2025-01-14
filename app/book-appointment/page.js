import React from "react";
import Booking from "../Components/Booking/Booking";

export const metadata = {
  title: "Appointment Booking",
  description: "Book a schedule to talk with our experts",
};

const page = () => {
  return (
    <>
      {" "}
      <Booking />
    </>
  );
};

export default page;
