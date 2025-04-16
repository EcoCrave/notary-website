import React from "react";
import Hero from "../Components/LawfirmPage/Hero";
import Digitalization from "../Components/LawfirmPage/Digitalization";
import AdvantagesSection from "../Components/LawfirmPage/AdvantagesSection";
import HowItWorks from "../Components/LawfirmPage/HowItWorks";
import AdvantagesForClients from "../Components/LawfirmPage/AdvantagesForClients";
import Faqlawfirm from "../Components/LawfirmPage/Faqlawfirm";
export const metadata = {
  title: "Law Firms for Legal Support & Trusted Representation",
  description:
    "Law Firms offering expert legal advice, professional representation, and personalized services for individuals, businesses, and corporate clients.",
};
const page = () => {
  return (
    <div>
      <Hero />
      <Digitalization />
      <HowItWorks />
      <AdvantagesSection />
      <AdvantagesForClients />
      <Faqlawfirm />
    </div>
  );
};

export default page;
