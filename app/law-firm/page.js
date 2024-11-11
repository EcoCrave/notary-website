import React from "react";
import Hero from "../Components/LawfirmPage/Hero";
import Digitalization from "../Components/LawfirmPage/Digitalization";
import AdvantagesSection from "../Components/LawfirmPage/AdvantagesSection";
import HowItWorks from "../Components/LawfirmPage/HowItWorks";

const page = () => {
  return (
    <div>
      <Hero />
      <Digitalization />
      <AdvantagesSection />
      <HowItWorks />
    </div>
  );
};

export default page;
