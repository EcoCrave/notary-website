import Image from "next/image";
import React from "react";

const ReceiveDocument = () => {
  return (
    <div className="bg-gray-900 py-16 ">
      <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="lg:text-5xl text-4xl font-bold text-white leading-snug">
            Receive your documents instantly after meeting with your client in
            real time.
          </h1>
        </div>

        {/* Images */}

        <div className="w-full ">
          <Image
            src="/img/acknowledge.svg"
            width={600}
            height={600}
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default ReceiveDocument;
