import React from "react";
import Hero from "../Components/Online-Notary/Hero";
import Customers from "../Components/Online-Notary/Customers";
import NotarizeImage from "../Components/Online-Notary/NotarizeImage";
import Features from "../Components/Online-Notary/Features";
import FAQ from "../Components/Business/FAQbusiness";
import Services from "../Components/Online-Notary/Services";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const page = () => {
  return (
    <div>
      <Hero />
      <Customers />
      <Services />
      <NotarizeImage />
      <Features />
      <FAQ />
    </div>
  );
};

export default page;
