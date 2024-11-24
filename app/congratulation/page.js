"use client";

import React from "react";
import Lottie from "lottie-react";
import Congratulate from "./congratulate.json";

const page = () => {
  return (
    <div>
      <h1 className="text-center text-5xl mt-20 font-bold">
        Congratulaitons !
      </h1>
      <Lottie
        animationData={Congratulate}
        loop={true}
        className="max-w-4xl mx-auto"
      />
      <h4 className="text-center font-bold mx-auto text-3xl">
        Thank you for taking our service
      </h4>
      <h4 className="text-center font-semibold mx-auto text-2xl">
        We will contact with you soon
      </h4>
    </div>
  );
};

export default page;
