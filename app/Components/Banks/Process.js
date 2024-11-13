import Image from "next/image";
import React from "react";

const Process = () => {
  return (
    <main className=" py-16 ">
      <div className=" items-center md:grid grid-cols-2 gap-10 justify-center w-[87%] mx-auto space-y-4">
        <div className=" relative flex justify-center">
          <Image
            className="rounded-xl items-center w-[60%]"
            width={600}
            height={600}
            src="/img/code.webp"
            alt=""
          />
        </div>

        <div className=" space-y-8 md:pr-40">
          <h1 className="text-4xl font-bold">
            Smooth processes through interface automation
          </h1>
          <div className="space-y-3">
            <p className="text-lg">
              Via interfaces, documents to be signed can be transferred directly
              to notarity and certified documents are automatically returned to
              the bank's system. It is no longer necessary to run errands or
              send documents by post or e-mail.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Process;
