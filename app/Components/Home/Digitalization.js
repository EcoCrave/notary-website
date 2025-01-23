import React from "react";

const Digitalization = () => {
  return (
    <main className=" py-16 ">
      <div className=" items-center flex gap-8 w-[90%] mx-auto space-y-4">
        <div className="w-1/2 relative">
          <img
            className="rounded-xl"
            src="https://Notary Blocks.com/wp-content/uploads/2023/04/notarity_website_17-1024x685.jpg.webp"
            alt=""
          />
        </div>

        <div className="w-1/2 space-y-6">
          <h1 className="text-6xl font-bold">
            On-demand notarization at scale <br /> within minutes
          </h1>
          <p>
            Over 17,000 certified online notaries performing on the
            blockchain-secured Notary Blocks platform.
          </p>
          <div className="gap-4 flex mx-auto">
            <button className="bg-green-800 px-4 py-2 rounded-md text-white">
              Arrange a demo appointment
            </button>
            <button className=" px-4 py-2 rounded-md text-black border border-2">
              Arrange a demo appointment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Digitalization;
