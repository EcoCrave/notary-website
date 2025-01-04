"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
const Booking = () => {
  return (
    <div>
      <div className="w-full mt-10 pt-10 h-[700px]">
        <InlineWidget url="https://calendly.com/your-username" />
      </div>
    </div>
  );
};

export default Booking;
