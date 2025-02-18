"use client";
import useFirebase from "@/app/Server/authentication/useFirebase";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const BecomeNotary = () => {
  const [loginTrigered, setLoginTrigered] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmRegisterPassword, setShowConfirmRegisterPassword] =
    useState(false);
  const {
    handleSignUpNotary,
    handleSignIn,
    handleResetPassword,
    f_nameRef,
    l_nameRef,
    emailRef,
    passwordRef,
    repasswordRef,
  } = useFirebase();
  return (
    <div className=" bg-gray-50  md:w-[50%] mt-32 mb-32 py-20 px-10  mx-auto">
      <div className="flex justify-around gap-5 text-xl font-semibold">
        <button
          onClick={() => setLoginTrigered(true)}
          className={` border-b-2  w-1/2 pb-3 ${
            loginTrigered ? "border-b-green-900" : "border-b-gray-100"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setLoginTrigered(false)}
          className={` border-b-2  w-1/2 pb-3 ${
            loginTrigered ? "border-b-gray-100" : "border-b-green-900"
          }`}
        >
          Apply
        </button>
      </div>
      {loginTrigered ? (
        <form onSubmit={handleSignIn} className="p-10 pb-0">
          <div className="space-y-5">
            <input
              required
              ref={emailRef}
              type="email"
              className="border-b-2 w-full p-2 outline-none"
              placeholder="Email address"
            />
            <div className="flex items-center">
              <input
                required
                ref={passwordRef}
                type={showLoginPassword ? "text" : "password"}
                placeholder="Password"
                className="border-b-2 w-full p-2 outline-none"
              />

              {showLoginPassword ? (
                <FaRegEye
                  className="cursor-pointer"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                />
              ) : (
                <FaRegEyeSlash
                  className="cursor-pointer"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                />
              )}
            </div>
            <div className="text-right ">
              <button type="button " onClick={handleResetPassword}>
                Forgot Password ?
              </button>
            </div>
            <input
              className="w-full outline-none cursor-pointer bg-green-900 rounded mt-10 text-white font-semibold p-2"
              type="submit"
              value="Log in"
            />
          </div>
        </form>
      ) : (
        <form className="p-10 pb-0" onSubmit={handleSignUpNotary}>
          <div className="space-y-5">
            <div className="flex gap-10">
              <input
                type="text"
                required
                className="border-b-2 w-full p-2 outline-none"
                placeholder="First Name"
                ref={f_nameRef}
              />
              <input
                type="text"
                required
                className="border-b-2 w-full outline-none p-2"
                placeholder="Last Name"
                ref={l_nameRef}
              />
            </div>
            <input
              type="email"
              required
              className="border-b-2 w-full outline-none p-2"
              placeholder="Email address"
              ref={emailRef}
            />
            <div className="flex items-center">
              <input
                required
                type={showRegisterPassword ? "text" : "password"}
                placeholder="Password (more then 6 charecters)"
                className="border-b-2 outline-none w-full p-2"
                ref={passwordRef}
              />
              {showRegisterPassword ? (
                <FaRegEye
                  className="cursor-pointer"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                />
              ) : (
                <FaRegEyeSlash
                  className="cursor-pointer"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                />
              )}
            </div>
            <div className="flex items-center">
              <input
                required
                type={showConfirmRegisterPassword ? "text" : "password"}
                placeholder="Confirm Password"
                ref={repasswordRef}
                className="border-b-2 outline-none w-full p-2"
              />
              {showConfirmRegisterPassword ? (
                <FaRegEye
                  className="cursor-pointer"
                  onClick={() =>
                    setShowConfirmRegisterPassword(!showConfirmRegisterPassword)
                  }
                />
              ) : (
                <FaRegEyeSlash
                  className="cursor-pointer"
                  onClick={() =>
                    setShowConfirmRegisterPassword(!showConfirmRegisterPassword)
                  }
                />
              )}
              {/* <p>password should be at least 6 chareters long</p> */}
            </div>

            <input
              className="w-full outline-none cursor-pointer rounded bg-green-900 mt-10 text-white font-semibold p-2"
              type="submit"
              value="Apply Now"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default BecomeNotary;
