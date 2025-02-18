import React from "react";
import BecomeNotary from "../Components/Become-Notary/BecomeNotary";
export const metadata = {
  title: "Become a notary",
  description: "Become a notary",
};
const page = () => {
  return (
    <div className="mt1">
      <BecomeNotary />
    </div>
  );
};

export default page;
