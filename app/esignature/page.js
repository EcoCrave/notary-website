import React from "react";
import NotarizeImage from "../Components/Online-Notary/NotarizeImage";
import ReceiveDocument from "../Components/In-Person-Notarization/ReceiveDocument";
import FAQ from "../Components/Business/FAQ";
import SignBoard from "../Components/ESign/SignBorad";

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
