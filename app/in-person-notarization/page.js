import React from "react";
import Hero from "../Components/In-Person-Notarization/Hero";
import Customers from "../Components/Online-Notary/Customers";
// import NotarizeImage from "../Components/Online-Notary/NotarizeImage";
import Features from "../Components/Online-Notary/Features";
import Service from "../Components/Business/Service";
import ReceiveDocument from "../Components/In-Person-Notarization/ReceiveDocument";
import FAQ from "../Components/Business/FAQbusiness";
export const metadata = {
  title: "Business page",
  description:
    "This is the business page where we can talk about how we can help you to grow your business",
};

const page = () => {
  return (
    <div>
      <Hero />
      <Customers />
      <Service />
      {/* <NotarizeImage /> */}
      <Features />
      <ReceiveDocument />
      <FAQ />
    </div>
  );
};

export default page;
