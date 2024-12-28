import React from "react";

const Admin = () => {
  return (
    <div className="mt-10 ">
      <div className="w-[85%] mx-auto">
        <div className="text-4xl font-bold">User's Data</div>
        <div>
          <div className="grid grid-cols-4 bg-gray-900 p-3 px-5 my-6 text-lg font-semibold text-white justify-between">
            <li className="list-none">User's email </li>
            <li className="list-none">Meeting Date </li>
            <li className="list-none">Status </li>
            <li className="list-none">View Details </li>
          </div>
          <div className="grid grid-cols-4 bg-white shadow-md p-5  my-2 text-lg font-semibol justify-between">
            <li className="list-none">mehedi@gmail.com </li>
            <li className="list-none">Meeting Date </li>
            <li className="list-none">Status </li>
            <li className="list-none">View Details </li>
          </div>
          <div className="grid grid-cols-4 bg-white shadow-md p-5  my-2 text-lg font-semibol justify-between">
            <li className="list-none">mehedi@gmail.com </li>
            <li className="list-none">Meeting Date </li>
            <li className="list-none">Status </li>
            <li className="list-none">View Details </li>
          </div>
          <div className="grid grid-cols-4 bg-white shadow-md p-5  my-2 text-lg font-semibol justify-between">
            <li className="list-none">mehedi@gmail.com </li>
            <li className="list-none">Meeting Date </li>
            <li className="list-none">Status </li>
            <li className="list-none">View Details </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
