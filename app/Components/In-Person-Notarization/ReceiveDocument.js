import Image from "next/image";
import React from "react";

const ReceiveDocument = () => {
  return (
    <section className="bg-gray-900 py-16 px-8">
      <div className="container w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-white leading-snug">
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
    </section>
  );
};

export default ReceiveDocument;
