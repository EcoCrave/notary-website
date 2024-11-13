import React from "react";
import Hero from "../Components/Banks/Hero";
import UseCase from "../Components/Banks/UseCase";
import WhyUs from "../Components/Banks/WhyUs";
import Process from "../Components/Banks/Process";
import Booking from "../Components/Banks/Booking";

const page = () => {
  return (
    <div>
      <Hero />
      <UseCase />
      <WhyUs />
      <Process />
      <Booking />
    </div>
  );
};

export default page;
