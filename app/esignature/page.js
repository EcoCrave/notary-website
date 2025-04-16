import React from "react";
// import NotarizeImage from "../Components/Online-Notary/NotarizeImage";
import ReceiveDocument from "../Components/In-Person-Notarization/ReceiveDocument";
import FAQ from "../Components/Business/FAQbusiness";
import SignBoard from "../Components/ESign/SignBorad";
export const metadata = {
  title: "eSignature Services for Secure Online Document Signing",
  description:
    "eSignature simplifies notarizing documents with secure, remote, and legally recognized digital services—accessible anytime, anywhere with full compliance.",
};

const page = () => {
  return (
    <div>
      <SignBoard />
      {/* <NotarizeImage /> */}
      <ReceiveDocument />
      <FAQ />
    </div>
  );
};

export default page;
