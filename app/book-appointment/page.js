import React from "react";
import Booking from "../Components/Booking/Booking";
import Appointments from "../Components/Booking/Appointments";

export const metadata = {
  title: "Appointment Booking",
  description: "Book a schedule to talk with our experts",
};

const page = () => {
  return (
    <>
      {" "}
      <Appointments />
    </>
  );
};

export default page;
