"use client";

import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
export default function FileUpload({ text }) {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const removeFile = (fileToRemove) => {
    setFiles(files.filter((file) => file !== fileToRemove));
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();
    switch (extension) {
      case "pdf":
        return "Pdf";
      case "doc":
      case "docx":
        return "Docx";
      default:
        return "File";
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">{text}</h2>

      {/* Upload Area */}
      <div
        className="border-2 border-dashed border-green-700 rounded-lg p-8 mb-4 text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          onChange={handleFileUpload}
          className="hidden"
          id="fileInput"
          multiple
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer flex flex-col items-center"
        >
          <FaUpload className="w-12 h-12 text-green-800 mb-2" />
          <span className="text-green-500">Click To Upload</span>
        </label>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="text-gray-600 mb-2">Uploaded Documents</h3>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white rounded-lg p-2 shadow-sm"
              >
                <div className="flex items-center">
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded">
                    {getFileIcon(file.name)}
                  </span>
                  <span className="ml-2 text-sm text-gray-600">
                    {file.name}
                  </span>
                </div>
                <button
                  onClick={() => removeFile(file)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <IoCloseSharp className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
