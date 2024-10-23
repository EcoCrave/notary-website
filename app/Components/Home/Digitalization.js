import React from "react";

const Digitalization = () => {
  return (
    <main className=" py-16 ">
      <div className=" items-center flex gap-8 w-[90%] mx-auto space-y-4">
        <div className="w-1/2 relative">
          <img
            className=""
            src="https://notarity.com/wp-content/uploads/2023/04/notarity_website_17-1024x685.jpg.webp"
            alt=""
          />
        </div>

        <div className="w-1/2 space-y-6">
          <h1 className="text-3xl font-bold">
            The future is digital. Are you too?
          </h1>
          <p>
            We have developed a free product especially for law firms that
            allows you to utilise the full potential of notarity. With
            personalised booking links, you can present yourself to your clients
            in a modern way. <br />
            <br /> We would be happy to present this offer to you personally in
            a joint appointment and show you all the advantages of notarity.
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

export default Digitalization;
