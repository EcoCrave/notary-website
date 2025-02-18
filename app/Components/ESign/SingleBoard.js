"use client";
import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SingleBoard = ({ setResult, setCanOpen, canOpen }) => {
  const [signatureDataUrl, setSignatureDataUrl] = useState(null); // Stores drawn signature
  const canvasRef = useRef(null); // SignatureCanvas reference

  // Convert drawing to an image and store it
  const handleUpload = () => {
    if (canvasRef.current && !canvasRef.current.isEmpty()) {
      const dataUrl = canvasRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");

      // Convert Data URL to Blob
      fetch(dataUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "signature.png", { type: "image/png" });

          setSignatureDataUrl(dataUrl); // Store preview
          setResult(file); // Send file to parent component (if needed)
        });
    }
  };

  // Clear the canvas
  const clearHandler = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
    }
    setSignatureDataUrl(null);
    setResult(null);
  };

  return (
    <div className="mt-3">
      {!canOpen ? (
        <span
          onClick={() => {
            setCanOpen(true);
          }}
          className="text-green-800 cursor-pointer text-md border-b-gray-300 border-b-[1px] pb-1"
        >
          Draw One
        </span>
      ) : (
        <span
          className="text-green-800 text-md cursor-pointer border-b-gray-300 border-b-[1px] pb-1"
          onClick={() => {
            setCanOpen(false);
          }}
        >
          Upload from device
        </span>
      )}
      {canOpen ? (
        <div className="flex flex-col mt-3  text-center space-y-3">
          {/* Signature Preview */}
          {signatureDataUrl && (
            <img
              src={signatureDataUrl}
              alt="Signature Preview"
              className="w-full max-w-xs border border-gray-300 rounded shadow-sm"
            />
          )}

          {/* Signature Canvas */}
          <div className="w-full  h-60 border border-gray-300 bg-gray-50 rounded shadow-sm p-4 flex justify-center items-center">
            <SignatureCanvas
              ref={canvasRef}
              penColor="black"
              maxWidth={3}
              canvasProps={{ className: "w-full h-full" }}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <span
              onClick={handleUpload}
              className="px-4 cursor-pointer py-2 bg-green-800 text-white rounded shadow-md hover:bg-green-900"
            >
              Upload Sign
            </span>
            <span
              onClick={clearHandler}
              className="px-4 cursor-pointer py-2 bg-red-600 text-white rounded shadow-md hover:bg-red-700"
            >
              Clear
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleBoard;
