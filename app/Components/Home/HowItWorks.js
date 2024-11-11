import React from "react";
import Image from "next/image";
export default function NotarySection() {
  return (
    <div className=" w-[90%] pb-10 mx-auto min-h-screen flex flex-col items-center ">
      <div className="mt-10 pl-10 w-full gap-16 justify-center items-center grid grid-cols-2 ">
        <div className="flex flex-col space-y-8">
          <div className="text-center mt-10">
            <h1 className="text-5xl spac text-left font-bold text-gray-900">
              Upload. <br />
              Verify ID. <br /> Meet Online
            </h1>
          </div>
          <Step
            number="1"
            title="Create an User Account"
            description="Quickly upload your document in any file form."
          />
          <Step
            number="2"
            title="Upload Your Documents"
            description="Quickly upload your document in any file form."
          />
          <Step
            number="3"
            title="Verify Your Identity"
            description="Check Signer's ID through Biometrics, KBA, or even Credible Witness."
          />
          <Step
            number="4"
            title="Meet The Notary"
            description="Sign, seal, and send to whomever needs it after meeting the notary public agent in a live video/audio session."
          />
        </div>
        <div className="flex flex-col md:flex-row items-center mt-16 space-y-8 md:space-y-0 md:space-x-12">
          <Image
            src="/img/how-it-works.png"
            width={500}
            height={500}
            alt="How it works"
          />
        </div>
      </div>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="space-y-2">
      <h3 className="text-gray-500 text-sm font-semibold">STEP {number}.</h3>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <hr className="mt-4 border-gray-200" />
    </div>
  );
}

function ImageCard({ label, imageSrc }) {
  return (
    <div className="relative w-72 h-40 rounded-xl overflow-hidden shadow-lg border border-gray-200">
      <img src={imageSrc} alt={label} className="w-full h-full object-cover" />
      <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-md text-sm">
        {label}
      </div>
    </div>
  );
}
