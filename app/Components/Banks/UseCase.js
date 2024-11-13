import Image from "next/image";
import React from "react";

const UseCase = () => {
  return (
    <main className=" py-16 ">
      <div className=" items-center md:grid grid-cols-2 gap-10 justify-center w-[87%] mx-auto space-y-4">
        <div className=" relative flex justify-center">
          <Image
            className="rounded-xl items-center w-[60%]"
            width={600}
            height={600}
            src="/img/useCase.webp"
            alt=""
          />
        </div>

        <div className=" space-y-8 md:pr-40">
          <h1 className="text-4xl font-bold">Use cases for banks</h1>
          <div className="space-y-3">
            <p className="text-lg">
              There are many authentication requirements in a lending bank.
              These concern in many cases :
            </p>
            <li className="m-5">The certification of pledge documents</li>
            <li className="m-5">The certification of pledge documents</li>

            <p className="text-lg">
              There are many authentication requirements in a lending bank.
              These concern in many cases :
            </p>
          </div>
          <div className="gap-4 flex mx-auto">
            <button className="bg-green-800 px-4 py-2 rounded-md text-white">
              Arrange a demo appointment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UseCase;
