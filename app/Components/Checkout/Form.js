"use client";
import { useState } from "react";
import useFirebase from "../../Server/authentication/useFirebase.js";
export default function Form() {
  const [formData, setFormData] = useState({
    assignedEmail: " ",
    address: { country: " ", street: " ", zipcode: " " },
    chosenServices: [],
    adviserEmail: " ",
    dateOfBirth: " ",
    phoneNumber: " ",
    idCardType: " ",
    idCardNumber: " ",
    bookedDate: " ",
    bookedTime: " ",
  });

  const [files, setFiles] = useState({
    selfie: null,
    document: null,
    signature: null,
  });

  const { user, addFormData, uploadFile } = useFirebase(); // Corrected usage of the custom hook

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
      alert("Invalid file type. Please upload a JPEG, PNG, or PDF.");
      return;
    }

    setFiles((prev) => ({ ...prev, [name]: file }));
  };

  const validateForm = () => {
    if (!formData.assignedEmail || !formData.adviserEmail) {
      alert("Assigned Email and Adviser Email are required.");
      return false;
    }
    if (!files.selfie || !files.document || !files.signature) {
      alert("All files are required.");
      return false;
    }
    return true;
  };

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
      console.log("Final Data", finalData);
      await addFormData(finalData);
      alert("Form submitted successfully!");

      setFormData({
        assignedEmail: "",
        state: { country: "", street: "", zipcode: "" },
        chosenServices: [],
        adviserEmail: "",
        dateOfBirth: "",
        phoneNumber: "",
        idCardType: "",
        idCardNumber: "",
        bookedDate: "",
        bookedTime: "",
      });
      setFiles({ selfie: null, document: null, signature: null });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex my-16 flex-col gap-5 justify-center bg-gray-50 w-[85%] mx-auto p-10"
    >
      <h2 className="text-5xl font-bold">Submit Your Details</h2>

      <input
        className="p-3"
        type="email"
        name="assignedEmail"
        placeholder="Assigned Email"
        onChange={handleChange}
      />

      <input
        className="p-3"
        type="text"
        name="address.street"
        placeholder="Street Address"
        onChange={handleChange}
      />
      <input
        className="p-3"
        type="text"
        name="address.country"
        placeholder="Country"
        onChange={handleChange}
      />
      <input
        className="p-3"
        type="text"
        name="address.zipcode"
        placeholder="Zipcode"
        onChange={handleChange}
      />

      <input
        className="p-3"
        type="text"
        name="adviserEmail"
        placeholder="Adviser Email"
        onChange={handleChange}
      />

      <input
        className="p-3"
        type="date"
        name="dateOfBirth"
        placeholder="Date of Birth"
        onChange={handleChange}
      />

      <input
        className="p-3"
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={handleChange}
      />

      <input
        className="p-3"
        type="text"
        name="idCardType"
        placeholder="ID Card Type"
        onChange={handleChange}
      />
      <input
        className="p-3"
        type="text"
        name="idCardNumber"
        placeholder="ID Card Number"
        onChange={handleChange}
      />

      <input
        className="p-3"
        type="date"
        name="bookedDate"
        placeholder="Booked Date"
        onChange={handleChange}
      />
      <input
        className="p-3"
        type="time"
        name="bookedTime"
        placeholder="Booked Time"
        onChange={handleChange}
      />

      <label>Selfie with ID Card:</label>
      <input
        className="p-3"
        type="file"
        name="selfie"
        onChange={handleFileChange}
      />

      <label>Upload Document (PDF/DOC):</label>
      <input
        className="p-3"
        type="file"
        name="document"
        onChange={handleFileChange}
      />

      <label>Upload Signature:</label>
      <input
        className="p-3"
        type="file"
        name="signature"
        onChange={handleFileChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
