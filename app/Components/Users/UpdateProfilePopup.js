import useFirebase from "@/app/Server/authentication/useFirebase";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const UpdateProfilePopup = ({ isOpen, onClose, onUpdate, user }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    photoURL: "",
  });
  const { uploadFile } = useFirebase(); // Hook to upload files

  // Pre-fill the form with existing user data
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      ...user, // Populate formData with existing data
    }));
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png"];

    if (file && !allowedTypes.includes(file.type)) {
      toast.error("Invalid file type. Please upload a JPEG or PNG image.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      photoURL: file, // Temporarily store the file in formData
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let uploadedPhotoURL = user.photoURL; // Default to existing photoURL

      // Upload the file if a new file is selected
      if (formData.photoURL instanceof File) {
        uploadedPhotoURL = await uploadFile(
          "profilePictures",
          formData.photoURL
        );
      }

      // Merge existing data with updated non-empty form data
      const updatedData = {
        fullName: formData.fullName || user.fullName, // Preserve previous data if empty
        email: formData.email || user.email,
        phoneNumber: formData.phoneNumber || user.phoneNumber,
        photoURL: uploadedPhotoURL, // Use uploaded URL or fallback to existing
      };

      // Debugging: Log the final data to ensure it looks correct
      console.log("Updated Data:", updatedData);

      // Call the parent onUpdate function
      await onUpdate(updatedData);

      toast.success("Profile updated successfully!");
      onClose(); // Close the popup
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-96 p-6">
        <h2 className="text-xl font-bold mb-4">Update Profile</h2>
        <form onSubmit={handleSubmit}>
          {/* File Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Change Profile Picture:
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName || ""}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="Your Full Name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="Your Email"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber || ""}
              onChange={handleChange}
              className="w-full border rounded p-2"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePopup;
