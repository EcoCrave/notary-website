"use client";
import React, { useState } from "react";

const BookingForm = ({ appointment_title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle popup
  const [step, setStep] = useState(1);

  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    governmentID: null,
    selfieWithID: null,
    eSignature: null,
  });

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file uploads
  const handleFileUpload = (e, field) => {
    setFormData({ ...formData, [field]: e.target.files[0] });
  };

  // Step Navigation
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-green-800 text-white font-bold rounded-md"
      >
        {appointment_title}
      </button>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                Schedule Notary Appointment
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(false)} // Close the modal
              >
                ✕
              </button>
            </div>

            {/* Step 1: Personal Information */}
            {step === 1 && (
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full border border-gray-300 rounded p-2"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, City, State, ZIP"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-4 py-2 bg-black text-white rounded"
                  >
                    Next
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: File Uploads */}
            {step === 2 && (
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Government ID
                    </label>
                    <div className="border-dashed border-2 border-gray-300 rounded p-4 text-center">
                      <input
                        type="file"
                        multiple
                        accept="image/*,.pdf"
                        onChange={(e) => handleFileUpload(e, "governmentID")}
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Drag and drop your file here, or browse <br />
                        Supported formats: image/*, .pdf
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Selfie with ID
                    </label>
                    <div className="border-dashed border-2 border-gray-300 rounded p-4 text-center">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, "selfieWithID")}
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Drag and drop your file here, or browse <br />
                        Supported formats: image/*
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      E-Signature
                    </label>
                    <div className="border-dashed border-2 border-gray-300 rounded p-4 text-center">
                      <input
                        type="file"
                        multiple
                        accept="image/*,.pdf"
                        onChange={(e) => handleFileUpload(e, "eSignature")}
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Drag and drop your file here, or browse <br />
                        Supported formats: image/*, .pdf
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 bg-gray-200 text-black rounded"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
