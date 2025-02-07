"use client";

import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export default function FileUpload({ text, onFileChange, initialFiles = [] }) {
  const [files, setFiles] = useState(initialFiles);

  const handleFileUpload = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.target.files || []);
    updateFiles([...files, ...newFiles]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    updateFiles([...files, ...newFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const removeFile = (fileToRemove) => {
    updateFiles(files.filter((file) => file !== fileToRemove));
  };

  const updateFiles = (newFiles) => {
    setFiles(newFiles);
    onFileChange(newFiles);
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
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
    <div className="mx-auto">
      <h2 className="text-lg text-center my-2 font-semibold mb-4">{text}</h2>

      <div
        className="text-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="rounded-md w-fit mx-auto bg-green-900 py-1 px-5 text-white font-semibold text-center">
          <input
            type="file"
            onChange={handleFileUpload}
            className="hidden"
            id="fileInput"
            multiple
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex space-x-2 items-center"
          >
            <FaUpload className="text-white mb-2" />
            <span>Upload files</span>
          </label>
        </div>
        <span>-or-</span>
        <p>Drag and drop</p>
      </div>

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
