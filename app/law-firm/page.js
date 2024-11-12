import React from "react";
import Hero from "../Components/LawfirmPage/Hero";
import Digitalization from "../Components/LawfirmPage/Digitalization";
import AdvantagesSection from "../Components/LawfirmPage/AdvantagesSection";
import HowItWorks from "../Components/LawfirmPage/HowItWorks";
import AdvantagesForClients from "../Components/LawfirmPage/AdvantagesForClients";
import Faq from "../Components/LawfirmPage/Faq";

const page = () => {
  return (
    <div>
      <Hero />
      <Digitalization />
      <HowItWorks />
      <AdvantagesSection />
      <AdvantagesForClients />
      <Faq />
    </div>
  );
};

export default page;
