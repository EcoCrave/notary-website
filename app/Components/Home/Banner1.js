import React from "react";

const Banner1 = () => {
  return (
    <main className=" bg-gray-900  py-10 pb-16">
      <div className="text-center space-y-8 m-auto w-[87%]">
        <h2 className="text-3xl text-white font-bold">
          Trusted by over 3,000 law firms, title agencies and businesses.
        </h2>
        <div className="flex w-full overflow-x-scroll banner-scroll gap-5">
          <img
            className="w-40 rounded"
            src="https://bluenotary.us/assets/clients/img-1.webp"
            alt=""
          />
          <img
            className="w-40"
            src="https://bluenotary.us/assets/clients/img-2.webp"
            alt=""
          />
          <img
            className="w-40"
            src="https://bluenotary.us/assets/clients/img-1.webp"
            alt=""
          />
          <img
            className="w-40"
            src="https://bluenotary.us/assets/clients/img-3.webp"
            alt=""
          />
          <img
            className="w-40"
            src="https://bluenotary.us/assets/clients/img-4.webp"
            alt=""
          />
          <img
            className="w-40"
            src="https://bluenotary.us/assets/clients/img-5.webp"
            alt=""
          />
          <img
            className="w-40"
            src="https://bluenotary.us/assets/clients/img-1.webp"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Banner1;
