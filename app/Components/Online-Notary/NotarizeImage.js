import Image from "next/image";
import React from "react";

const NotarizeImage = () => {
  return (
    <div className="py-10">
      <div className="w-[85%] space-y-12 mx-auto lg:text-center">
        <h2 className="text-4xl lg:text-5xl font-bold lg:w-[60%] mx-auto ">
          The painless way to notarize docs on the blockchain.
        </h2>
        <div className="relative">
          <Image
            src="/img/notarize-img.svg"
            width={650}
            alt=""
            height={650}
            className=" lg:w-[100%]"
          />
          <Image
            src="/img/hand.png"
            width={450}
            height={450}
            alt=""
            className="mx-auto w-[30%] absolute right-[20%] -bottom-20"
          />
        </div>
      </div>
    </div>
  );
};

export default NotarizeImage;
