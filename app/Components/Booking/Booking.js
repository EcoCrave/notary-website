"use client";
import React, { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

const Booking = ({ setIsModalOpen }) => {
  const [rootElement, setRootElement] = useState(null);
  useEffect(() => {
    setRootElement(document.body); // Attach popup to body
  }, []);

  return (
    <div className="flex flex-col  ">
      {rootElement && (
        <PopupButton
          url="https://calendly.com/ecocraveworld/30min"
          rootElement={rootElement} // Ensure it's attached to a valid DOM element
          text="Schedule Booking!"
          className="px-4 py-2 bg-black text-white rounded-md shadow-md hover:bg-black transition-all"
        />
      )}
    </div>
  );
};

export default Booking;
