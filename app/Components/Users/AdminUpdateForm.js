"use client";

import { useState } from "react";
import useFirebase from "@/app/Server/authentication/useFirebase";
import FileUpload from "../MultipleFileUpload/FileUpload";
import { toast } from "react-toastify";

const AdminUpdateForm = ({ data, id }) => {
  const [formData, setFormData] = useState({
    status: data.status || "",
    paymentStatus: data.paymentStatus || "",
    meetingLink: data.meetingLink || "",
    meetingDate: data.meetingDate || "",
    meetingTime: data.meetingTime || "",
  });

  const [files, setFiles] = useState([]);

  const { updateFormData, uploadFile } = useFirebase();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (newFiles) => {
    setFiles(newFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateFormData(id, formData);
      toast.success("Form data updated successfully");
    } catch (error) {
      console.error("Error updating form data:", error);
      toast.error("Failed to update form data");
    }
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      toast.error("Please select files to upload");
      return;
    }
    try {
      const uploadedFiles = await uploadFile("notarizedDocuments", files);
      await updateFormData(id, { notarizedDocuments: uploadedFiles });
      toast.success("Files uploaded successfully");
      setFiles([]);
    } catch (error) {
      console.error("Error uploading files:", error);
      toast.error("Failed to upload files");
    }
  };

  return (
    <div>
      <h1 className="my-6 font-bold text-2xl">
        Only Admin/Notary Is allowed to fill the input
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-between w-full items-center gap-5">
          <div className="space-y-2">
            <span className=""> Order Status : </span>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">Select Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Approved">Approved</option>
              <option value="Finished">Finished</option>
            </select>
          </div>
          <div className="space-y-2">
            <span className=""> Payment Status : </span>
            <select
              name="paymentStatus"
              value={formData.paymentStatus}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">Select Status</option>
              <option value="Not Paid">Not Paid</option>
              <option value="Paid">Paid</option>
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label>Meeting Link</label>
            <input
              type="text"
              name="meetingLink"
              value={formData.meetingLink}
              onChange={handleChange}
              className="border p-1"
            />
          </div>
          <div className="">
            <label>Meeting Date</label>
            <input
              type="text"
              name="meetingDate"
              value={formData.meetingDate}
              onChange={handleChange}
              placeholder="12th jun, 2025"
              className="border p-1"
            />
          </div>
          <div className="">
            <label>Meeting Time</label>
            <input
              type="text"
              name="meetingTime"
              value={formData.meetingTime}
              onChange={handleChange}
              placeholder="12.30pm"
              className="border p-1"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-fit p-2 bg-black text-white mt-5 px-8"
        >
          Submit
        </button>
      </form>
      <form onSubmit={handleFileSubmit} className="text-center mt-5">
        <FileUpload
          text="Upload Notarized Documents"
          onFileChange={handleFileChange}
        />
        <button type="submit" className="bg-green-700 text-white p-2 px-8 mt-3">
          Submit Files
        </button>
      </form>
    </div>
  );
};

export default AdminUpdateForm;
