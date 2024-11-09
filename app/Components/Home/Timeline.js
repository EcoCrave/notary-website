import React from "react";
import { MdOutlineDoneAll } from "react-icons/md";

const Timeline = () => {
  return (
    <div className="w-[90% ] md:w-[80%] mx-auto pt-10 md:grid md:grid-cols-2 ">
      <ol className="relative border-l border-gray-700 md:ml-10">
        <li className="mb-10 ml-6 ">
          <span className="absolute flex items-center  justify-center w-10 h-10  rounded-full -left-5 ring-1 ring-black bg-white ">
            <MdOutlineDoneAll className="" />
          </span>
          <div className=" text-left px-5 space-y-2">
            <h2 className="text-green-900 font-bold text-xl">Hello</h2>
            <p className=" ">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project. All of the pages and components are first designed in
              Figma and we keep a parity between the two versions even as we
              update the project.
            </p>
          </div>
        </li>
      </ol>
      <ol className="relative border-l border-gray-700 md:ml-10 m-0">
        <li className="mb-10 ml-6 ">
          <span className="absolute flex items-center  justify-center w-10 h-10  rounded-full -left-5 ring-1 ring-black bg-white ">
            <MdOutlineDoneAll className="" />
          </span>

          <div className=" text-left px-5 space-y-2">
            <h2 className="text-green-900 font-bold text-xl">Hello</h2>
            <p className=" ">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project. All of the pages and components are first designed in
              Figma and we keep a parity between the two versions even as we
              update the project.
            </p>
          </div>
        </li>
      </ol>
      <ol className="relative border-l border-gray-700 md:ml-10 md:border-white m-0">
        <li className="mb-10 ml-6 ">
          <span className="absolute flex items-center  justify-center w-10 h-10  rounded-full -left-5 ring-1 ring-black bg-white ">
            <MdOutlineDoneAll className="" />
          </span>

          <div className=" text-left px-5 space-y-2">
            <h2 className="text-green-900 font-bold text-xl">Hello</h2>
            <p className=" ">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project. All of the pages and components are first designed in
              Figma and we keep a parity between the two versions even as we
              update the project.
            </p>
          </div>
        </li>
      </ol>
      <ol className="relative border-l border-gray-700 md:ml-10 md:border-white m-0">
        <li className="mb-10 ml-6 ">
          <span className="absolute flex items-center  justify-center w-10 h-10  rounded-full -left-5 ring-1 ring-black bg-white ">
            <MdOutlineDoneAll className="" />
          </span>

          <div className=" text-left px-5 space-y-2">
            <h2 className=" font-bold text-xl text-green-900">Hello</h2>
            <p className=" ">
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project. All of the pages and components are first designed in
              Figma and we keep a parity between the two versions even as we
              update the project.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Timeline;
