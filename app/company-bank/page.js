import React from "react";
import Hero from "../Components/Banks/Hero";
import UseCase from "../Components/Banks/UseCase";
import WhyUs from "../Components/Banks/WhyUs";
import Process from "../Components/Banks/Process";
import Booking from "../Components/Banks/Booking";
import FAQSection from "../Components/Home/FAQSection";
export const metadata = {
  title: "Company and Banks: Financial Partnerships That Matter",
  description:
    "Company and Banks: Explore strategic financial partnerships, banking solutions, and how companies collaborate with banks to ensure stable business growth.",
};
const page = () => {
  return (
    <>
      <Hero />
      <UseCase />
      <WhyUs />
      <Process />
      <Booking />
      <FAQSection />
    </>
  );
};

export default page;
