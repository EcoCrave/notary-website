// components/NotarySeal.js

import React from "react";

const NotarySeal = ({ onSealUpload }) => (
  <div className="border p-4 w-72">
    <p>Upload Notary Seal:</p>
    <input type="file" accept="image/*" onChange={onSealUpload} />
  </div>
);

export default NotarySeal;
