"use client";
import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { motion } from "framer-motion";
import { fadeIn, fadeInAnimationVariants } from "@/variants";
import BookingForm from "../Checkout/BookingForm";
const SignBoard = () => {
  const canvasRef = useRef(null); // Reference for SignatureCanvas
  const [result, setResult] = useState(null); // Store the signature data URL
  const [brushColor, setBrushColor] = useState("black");

  const handleDraw = () => {
    // Check if the canvas has been drawn on
    if (canvasRef.current && !canvasRef.current.isEmpty()) {
      const dataUrl = canvasRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      setResult(dataUrl); // Update result state with the current canvas content
    }
  };

  const clearHandler = () => {
    if (canvasRef.current) {
      canvasRef.current.clear(); // Clear the canvas
      setResult(null); // Hide the download button
    }
  };

  return (
    <div className="space-y-24 bg-gradient-to-t from-blue-50 to-white">
      <div className="mx-auto w-[85%] pb-20 flex justify-center text-center  ">
        {/* Signature Canvas */}
        <div className="space-y-3">
          <motion.h1
            variants={fadeIn("up", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="md:text-5xl text-4xl pt-10 font-bold leading-[60px]"
          >
            Use our eSign service <br /> 100% FREE
          </motion.h1>
          <motion.h2
            variants={fadeIn("up", 0, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="md:text-3xl text-2xl font-semibold pb-4 text-gray-700"
          >
            Draw your eSignature
          </motion.h2>
          <motion.div
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="border mx-auto w-[1000px] bg-white rounded"
          >
            <SignatureCanvas
              ref={canvasRef}
              onEnd={handleDraw} // Trigger handleDraw when the user finishes drawing
              penColor={brushColor}
              maxWidth={3}
              canvasProps={{ width: 1000, height: 400, className: "sigCanvas" }}
              className="border w-full border-red-500"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0, 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            className="mt-4 flex items-center justify-between"
          >
            <div className="flex space-x-2">
              <div
                onClick={() => {
                  canvasRef.current.clear(); // Clear the canvas
                  setResult(null); // Hide the download button
                  setBrushColor("black");
                }}
                className="w-5 bg-black h-5 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => {
                  canvasRef.current.clear(); // Clear the canvas
                  setResult(null); // Hide the download button
                  setBrushColor("red");
                }}
                className="w-5 bg-red-700 h-5 rounded-full cursor-pointer"
              ></div>
              <div
                onClick={() => {
                  canvasRef.current.clear(); // Clear the canvas
                  setResult(null); // Hide the download button
                  setBrushColor("green");
                }}
                className="w-5 bg-green-700 h-5 rounded-full cursor-pointer"
              ></div>
            </div>
            <button
              onClick={clearHandler}
              className="px-4 py-2 bg-white border hover:shadow-lg hover:text-white hover:bg-red-600 bg"
            >
              Clear & Draw Again
            </button>
          </motion.div>

          <div>
            {/* Conditional Download Link */}
            {result && (
              <motion.div
                variants={fadeIn("down", 0, 0.7)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                className="mt-4 space-y-3 bg-gray-900 rounded p-10 "
              >
                <a
                  href={result}
                  download="signature.png"
                  className="text-2xl border-b-2 border-gray-500 hover:text-green-600 hover:border-green-900  text-gray-200 font-semibold  "
                >
                  Download Your Signature
                </a>
                <h2 className="text-3xl text-white font-bold">
                  Need to esign your document?
                </h2>
                <p className="text-white">
                  Simply enter your email address and get started.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border p-2 w-2/3 text-center outline-none"
                  />
                  <div
                    type=""
                    value=""
                    className="rounded-md  w-fit mx-auto bg-green-800 hover:bg-green-900 cursor-pointer outline-none"
                  >
                    <BookingForm appointment_title="eSign My Document" />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignBoard;
