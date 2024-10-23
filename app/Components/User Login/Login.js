import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Login = () => {
  return (
    <div className="bg-gray-100">
      <div className="container m-auto ">
        <div className="flex py-10 w-full justify-between">
          <div className="space-y-8 w-1/2 ">
            <span className="text-xl">Remote Online Notarization</span>
            <h1 className="text-6xl font-bold">
              {" "}
              <span className="text-green-800">notarize</span> documents from
              anywhere. <br /> anytime.
            </h1>
            <p className="text-xl pt-4">
              notarity makes working with notaries a breeze.
            </p>
            <img
              src="https://app.notarity.com/decorations/ic-prozesse.svg"
              alt=""
            />
          </div>
          <div className="w-1/2 p-10 space-y-8 rounded bg-white">
            <div className="flex justify-around gap-5 text-xl font-semibold">
              <button className="border-b-green-900 border-b-2  w-1/2 pb-3">
                Login
              </button>
              <button className="border-b-green-900 border-b-2  w-1/2 pb-3">
                Register
              </button>
            </div>

            {/*-------------------------------- Login form ----------------------------------- */}
            <form className="p-10 pb-0">
              <div className="space-y-5">
                <input
                  type="email"
                  className="border-b-2 w-full p-2"
                  placeholder="Email address"
                />
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="border-b-2 w-full p-2"
                  />
                </div>
                <p className="text-right">Forget Password ?</p>
                <input
                  className="w-full bg-green-900 mt-10 text-white font-semibold p-2"
                  type="submit"
                  value="Log in"
                />
              </div>
            </form>

            {/*---------------------------- Register form ------------- */}

            <form className="p-10 pb-0">
              <div className="space-y-5">
                <input
                  type="email"
                  className="border-b-2 w-full p-2"
                  placeholder="Email address"
                />
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="border-b-2 w-full p-2"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border-b-2 w-full p-2"
                  />
                </div>

                <input
                  className="w-full bg-green-900 mt-10 text-white font-semibold p-2"
                  type="submit"
                  value="Register Now"
                />
              </div>
            </form>

            <div className="w-full mt-20 text-center space-y-5">
              <p className="text-center font-semibold">
                --------------Or------------
              </p>
              <div className="flex justify-around">
                <FcGoogle className="text-4xl" />
                <FaSquareFacebook className="text-4xl" />
                <FaXTwitter className="text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
