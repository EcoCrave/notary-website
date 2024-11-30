import React from "react";

const ReadyToGo = () => {
  return (
    <div className="w-[85%] my-10 mb-24 bg-gray-900 mx-auto text-center rounded-lg p-5 space-y-4 py-10">
      <h1 className="text-white text-5xl font-bold">Ready to go ?</h1>
      <p className="text-white font-semibold">Book your appointment now !</p>
      <form className="flex flex-col justify-center text-center mx-auto space-y-2 w-1/2">
        <input
          type="email"
          className="px-5 py-2 rounded outline-none"
          placeholder="email..."
        />
        <input
          className="text-white rounded bg-green-900 px-5 py-2  hover:bg-black cursor-pointer "
          type="submit"
          value="STATY THE ENGINE >"
        />
      </form>
    </div>
  );
};

export default ReadyToGo;
