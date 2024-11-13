import React from "react";

const ReadyToGo = () => {
  return (
    <div className="w-[87%] my-10 mb-24 bg-gray-900 mx-auto text-center rounded-lg p-5 space-y-10 py-10">
      <h1 className="text-white text-5xl font-bold">Ready to go ?</h1>
      <form className="">
        <input
          type="email"
          className="px-5 py-2 w-96 outline-none"
          placeholder="email..."
        />
        <input
          className="text-white bg-green-900 px-5 py-2  hover:bg-black cursor-pointer"
          type="submit"
          value="STATY THE ENGINE -->"
        />
      </form>
    </div>
  );
};

export default ReadyToGo;
