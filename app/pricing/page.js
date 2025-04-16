import React from "react";
import Pricing from "../Components/Pricing/Pricing";
import Testimonial from "../Components/Pricing/Testimonnial";
import FAQSection from "../Components/Home/FAQSection";
export const metadata = {
  title: "Notaryblocks - Pricing",
  description: "",
};
const page = () => {
  return (
    <div className="">
      <Pricing />
      <Testimonial />
      <FAQSection />
    </div>
  );
};

export default page;
