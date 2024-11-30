import React from "react";
import Hero from "../Components/Banks/Hero";
import UseCase from "../Components/Banks/UseCase";
import WhyUs from "../Components/Banks/WhyUs";
import Process from "../Components/Banks/Process";
import Booking from "../Components/Banks/Booking";
import FAQSection from "../Components/Home/FAQSection";
export const metadata = {
  title: "hello world",
  description:
    "This is the business page where we can talk about how we can help you to grow your business",
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
