import Image from "next/image";
import React from "react";

const WorryFreeBusiness = () => {
  return (
    <main className=" py-16 ">
      <div className=" items-center md:flex gap-28 justify-center w-[87%] mx-auto ">
        <div className=" relative md:order-2">
          <Image
            className="rounded-xl "
            width={600}
            height={600}
            src="/img/digitalize.webp"
            alt=""
          />
        </div>

        <div className="w-1/2 md:order-1 space-y-6">
          <h1 className="text-4xl font-bold">
            The future is digital.
            <br /> Are you too?
          </h1>
          <p>
            We have developed a free product especially for law firms that
            allows you to utilise the full potential of notarity. With
            personalised booking links, you can present yourself to your clients
            in a modern way. <br /> We would be happy to present this offer to
            you personally in a joint appointment and show you all the
            advantages of notarity.
          </p>
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

export default WorryFreeBusiness;
