"use client";

import useFirebase from "@/app/Server/authentication/useFirebase";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Login = () => {
  const [loginTrigered, setLoginTrigered] = useState(true);
  const {
    handleSignIn,
    handleFacebookSignIn,
    handleGoogleSignIn,
    handleSignUp,
    emailRef,
    f_nameRef,
    l_nameRef,
    repasswordRef,
    passwordRef,
    handleResetPassword,
    error,
  } = useFirebase();
  return (
    <div className="bg-gray-100">
      <div className="w-[85%] py-10 mx-auto ">
        <div className="lg:flex items-center py-10 w-full justify-between">
          <div className="space-y-5 md:w-1/2 mb-8">
            <span className="text-xl font-semibold text-gray-600">
              Remote Online Notarization
            </span>
            <h1 className="lg:text-5xl text-4xl font-bold">
              {" "}
              <span className="text-green-800">notarize</span> documents from
              anywhere. <br /> anytime.
            </h1>
            <p className="text-xl pt-4">
              notarity makes working with notaries a breeze.
            </p>
          </div>
          <div className="lg:w-1/2 p-10 space-y-8 rounded bg-white">
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
                Register
              </button>
            </div>

            {/*-------------------------------- Login form --------------------------------- */}

            {loginTrigered ? (
              <form className="p-10 pb-0" onSubmit={handleSignIn}>
                <div className="space-y-5">
                  <input
                    required
                    ref={emailRef}
                    type="email"
                    className="border-b-2 w-full p-2"
                    placeholder="Email address"
                  />
                  <div>
                    <input
                      required
                      ref={passwordRef}
                      type="password"
                      placeholder="Password"
                      className="border-b-2 w-full p-2"
                    />
                  </div>
                  <p className="text-right">
                    <button onClick={handleResetPassword}>
                      {" "}
                      Forgot Password ?
                    </button>
                  </p>
                  <input
                    className="w-full bg-green-900 rounded mt-10 text-white font-semibold p-2"
                    type="submit"
                    value="Log in"
                  />
                </div>
              </form>
            ) : (
              <form className="p-10 pb-0" onSubmit={handleSignUp}>
                <div className="space-y-5">
                  <div className="flex gap-10">
                    <input
                      type="text"
                      required
                      className="border-b-2 w-full p-2"
                      placeholder="First Name"
                      ref={f_nameRef}
                    />
                    <input
                      type="text"
                      required
                      className="border-b-2 w-full p-2"
                      placeholder="Last Name"
                      ref={l_nameRef}
                    />
                  </div>
                  <input
                    type="email"
                    required
                    className="border-b-2 w-full p-2"
                    placeholder="Email address"
                    ref={emailRef}
                  />
                  <div>
                    <input
                      required
                      type="password"
                      placeholder="Password (more then 6 charecters)"
                      className="border-b-2 w-full p-2"
                      ref={passwordRef}
                    />
                  </div>
                  <div>
                    <input
                      required
                      type="password"
                      placeholder="Confirm Password"
                      ref={repasswordRef}
                      className="border-b-2 w-full p-2"
                    />
                    {/* <p>password should be at least 6 chareters long</p> */}
                  </div>

                  <input
                    className="w-full rounded bg-green-900 mt-10 text-white font-semibold p-2"
                    type="submit"
                    value="Register Now"
                  />
                </div>
              </form>
            )}
            <div className="w-full mt-20 text-center space-y-5">
              <p className="text-center font-semibold">
                ----------Or----------
              </p>
              <div className="flex justify-center items-center space-x-10">
                <FcGoogle
                  onClick={handleGoogleSignIn}
                  className="text-4xl cursor-pointer"
                />
                <FaSquareFacebook
                  onClick={handleFacebookSignIn}
                  className="text-4xl cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
