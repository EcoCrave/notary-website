// components/SignaturePadComponent.js

import React from "react";
import SignaturePad from "react-signature-canvas";

const SignaturePadComponent = ({ onSave }) => {
  let sigPadRef;

  return (
    <div className="border p-4 w-72">
      <p>Draw your signature:</p>
      <SignaturePad
        ref={(ref) => (sigPadRef = ref)}
        penColor="black"
        canvasProps={{ width: 200, height: 100, className: "border" }}
      />
      <button
        onClick={() => onSave(sigPadRef)}
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Save Signature
      </button>
    </div>
  );
};

export default SignaturePadComponent;
