"use client";
import useFirebase from "@/app/Server/authentication/useFirebase";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const BookingForm = ({ appointment_title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle popup
  const [step, setStep] = useState(1);
  const f_name = useRef();
  const l_name = useRef();

  // Form data state.............................

  const [formData, setFormData] = useState({
    assignedEmail: "",
    phone: "",
    state: "",
    service: "",
    idType: "",
  });

  const [files, setFiles] = useState({
    selfie: null,
    document: null,
    signature: null,
  });
  const { user, addFormData, uploadFile } = useFirebase(); // Corrected usage of the custom hook

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const keys = name.split(".");
      if (keys.length > 1) {
        const [outerKey, innerKey] = keys;
        return {
          ...prev,
          [outerKey]: {
            ...prev[outerKey],
            [innerKey]: value,
          },
        };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (file && !allowedTypes.includes(file.type)) {
      toast("Invalid file type. Please upload a JPEG, PNG, or PDF.");
      return;
    }

    setFiles((prev) => ({ ...prev, [name]: file }));
  };

  const validateForm = () => {
    if (!formData.assignedEmail) {
      toast.success("Assigned Email and Adviser Email are required.");
      return false;
    }
    if (!files.selfie || !files.document || !files.signature) {
      toast("Please upload requred files");
      return false;
    }
    return true;
  };

  // Step Navigation
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const uploadedSelfie = files.selfie
        ? await uploadFile("selfies", files.selfie)
        : null;
      const uploadedDocument = files.document
        ? await uploadFile("documents", files.document)
        : null;
      const uploadedSignature = files.signature
        ? await uploadFile("signatures", files.signature)
        : null;

      const finalData = {
        ...formData,
        userEmail: user.email,
        userId: user.uid,
        selfieURL: uploadedSelfie,
        documentURL: uploadedDocument,
        signatureURL: uploadedSignature,
        createdAt: new Date(),
      };

      await addFormData(finalData);
      toast.success("Form submitted successfully!");

      setFormData({
        assignedEmail: "",
        phone: "",
        state: "",
        service: "",
        idType: "",
      });
      setFiles({ selfie: null, document: null, signature: null });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return (
    <section>
      {/* Trigger Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 text-white text-center font-bold rounded-md"
      >
        {appointment_title}
      </button>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-md ">
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
              <form onSubmit={handleSubmit} className="text-left">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      ref={f_name}
                      name="f_name"
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
                      required
                      type="text"
                      ref={l_name}
                      name="l_name"
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
                    required
                    name="assignedEmail"
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
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="123 Main St, City, State, ZIP"
                    className="w-full border border-gray-300 rounded p-2"
                  />
                </div>
                <div className="w-full mt-4 mb-3">
                  <p className="block text-sm font-medium mb-1">
                    Type of service :
                  </p>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded p-2"
                  >
                    <option value="" key="">
                      Online Notary
                    </option>
                    <option value="" key="">
                      Seal Document
                    </option>
                    <option value="" key="">
                      Affidevait
                    </option>
                  </select>
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
              <form onSubmit={handleSubmit} className="text-left">
                <div className="space-y-6">
                  <div>
                    <div className="w-full mb-3">
                      <p className="block text-sm font-medium mb-2">
                        Select id type (required) :
                      </p>

                      <select
                        name="idType"
                        value={formData.idType}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2"
                      >
                        <option value="" key="">
                          Driving License
                        </option>
                        <option value="" key="">
                          NID Card
                        </option>
                        <option value="" key="">
                          Passport
                        </option>
                      </select>
                    </div>
                    <label className="block text-sm font-medium mb-2">
                      ID (required) :
                    </label>
                    <div className="border-dashed border-2 border-gray-300 bg-white rounded p-4 text-center">
                      <input
                        type="file"
                        required
                        name="selfie"
                        multiple
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Selfie with ID (required) :
                    </label>
                    <div className="border-dashed border-2 bg-white border-gray-300 rounded p-4 text-center">
                      <input
                        type="file"
                        multiple
                        required
                        name="document"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      E-Signature
                    </label>
                    <div className="border-dashed border-2 bg-white border-gray-300 rounded p-4 text-center">
                      <input
                        type="file"
                        multiple
                        name="signature"
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                      />
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
    </section>
  );
};

export default BookingForm;
