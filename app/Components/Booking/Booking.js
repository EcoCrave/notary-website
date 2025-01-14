"use client";
import React from "react";
import { InlineWidget } from "react-calendly";
const Booking = () => {
  return (
    <div>
      <div className="w-full  pt-10 ">
        <InlineWidget url="https://calendly.com/ecocraveworld/notarize-document" />
      </div>
    </div>
  );
};

export default Booking;
