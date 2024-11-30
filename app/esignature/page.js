import React from "react";
import NotarizeImage from "../Components/Online-Notary/NotarizeImage";
import ReceiveDocument from "../Components/In-Person-Notarization/ReceiveDocument";
import FAQ from "../Components/Business/FAQ";
import SignBoard from "../Components/ESign/SignBorad";
export const metadata = {
  title: "Business page",
  description:
    "This is the business page where we can talk about how we can help you to grow your business",
};

const page = () => {
  return (
    <div>
      <SignBoard />
      <NotarizeImage />
      <ReceiveDocument />
      <FAQ />
    </div>
  );
};

export default page;
