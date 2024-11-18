import React from "react";
import Hero from "../Components/In-Person-Notarization/Hero";
import Customers from "../Components/Online-Notary/Customers";
import NotarizeImage from "../Components/Online-Notary/NotarizeImage";
import Features from "../Components/Online-Notary/Features";
import Service from "../Components/Business/Service";
import ReceiveDocument from "../Components/In-Person-Notarization/ReceiveDocument";
import FAQ from "../Components/Business/FAQ";

const page = () => {
  return (
    <div>
      <Hero />
      <Customers />
      <Service />
      <NotarizeImage />
      <Features />
      <ReceiveDocument />
      <FAQ />
    </div>
  );
};

export default page;
