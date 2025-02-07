"use client";
import useFirebase from "@/app/Server/authentication/useFirebase";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import FileUpload from "../MultipleFileUpload/FileUpload";
import Booking from "../Booking/Booking";

const BookingForm = ({ appointment_title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle popup
  const [step, setStep] = useState(1);

  const [pages, setPages] = useState(1);
  const [price, setPrice] = useState(0);
  const totalPrice = pages * price;
  console.log("Total Price", totalPrice);
  // Form data state.............................

  const [formData, setFormData] = useState({
    assignedEmail: "",
    firstName: "",
    lastName: "",
    idType: "",
    service: "",
    phone: "",
    country: "",
    state: "",
    location: "",
    zipCode: "",
  });

  // Console Form data........................................

  console.log("Form Data", formData);

  // _--____------_______------______-------______------________

  const [files, setFiles] = useState({
    selfie: [],
    document: [],
    uploadedID: [],
    signature: [],
  });
  const handleDocumentChange = (newDocuments) => {
    setFiles((prev) => ({ ...prev, document: newDocuments }));
  };
  console.log("selfie", files.selfie);
  console.log("document", files.document);
  console.log("uploadedID", files.uploadedID);
  console.log("signature", files.signature);

  const { user, addFormData, uploadFile, submitSuccess, setSubmitSuccess } =
    useFirebase(); // Corrected usage of the custom hook

  // Handle form inputs--------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Pricing ....................................
    if (value == "Online Notary") {
      setPrice(25);
    }
    if (value == "Seal Document") {
      setPrice(20);
    }
    if (value == "Affidavit") {
      setPrice(40);
    }

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
    const files = Array.from(e.target.files);
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    const validFiles = files.filter((file) => allowedTypes.includes(file.type));

    if (validFiles.length !== files.length) {
      toast(
        "Some files were skipped. Only JPEG, PNG, or PDF files are allowed."
      );
    }

    setFiles((prev) => ({
      ...prev,
      [name]: [...(prev[name] || []), ...validFiles],
    }));
  };

  // -----------------------------------------------------

  const validateForm = () => {
    if (!formData.assignedEmail) {
      toast.success("Assigned Email and Adviser Email are required.");
      return false;
    }
    if (!files.selfie) {
      toast("Please upload your selfie with nid");
      return false;
    }
    if (!files.document) {
      toast("Please upload the files you want to notarize !");
      return false;
    }
    if (!files.signature) {
      toast("Please upload or create your eSign ");
      return false;
    }
    return true;
  };

  // Step Navigation----------------------------------------

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const uploadedSelfies =
        files.selfie.length > 0
          ? await uploadFile("selfies", files.selfie)
          : [];
      const uploadedIDs =
        files.uploadedID.length > 0
          ? await uploadFile("uploadedID", files.uploadedID)
          : [];
      const uploadedDocuments =
        files.document.length > 0
          ? await uploadFile("documents", files.document)
          : [];
      const uploadedSignatures =
        files.signature.length > 0
          ? await uploadFile("signatures", files.signature)
          : [];

      const finalData = {
        ...formData,
        userEmail: user.email,
        price: totalPrice,
        userId: user.uid,
        selfieURLs: uploadedSelfies,
        nidURLs: uploadedIDs,
        documentURLs: uploadedDocuments,
        signatureURLs: uploadedSignatures,
        totalPages: pages,
        totalCost: price,
        status: "In Progress",
        createdAt: new Date(),
      };

      await addFormData(finalData);
      toast.success("Form submitted successfully!");

      // Reset form data and files
      setFormData({
        assignedEmail: "",
        firstName: "",
        lastName: "",
        idType: "",
        service: "",
        phone: "",
        country: "",
        state: "",
        location: "",
        zipCode: "",
      });
      setFiles({ selfie: [], document: [], uploadedID: [], signature: [] });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return (
    <section>
      {/* Trigger Button */}
      <button
        onClick={() => {
          setIsModalOpen(true);
          setSubmitSuccess(true);
        }}
        className="px-6 py-3 text-white text-center font-bold rounded-md "
      >
        {appointment_title}
      </button>

      {/* Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-gray-50 max-h-[85vh] pb-7 relative overflow-y-scroll  rounded-lg shadow-lg md:max-w-lg ">
            <div className="flex sticky bg-gray-50 top-0 px-8 py-5 justify-between items-start ">
              <div className="">
                <h2 className="text-2xl text-start font-bold">
                  Book Appointment
                </h2>
                <p className="text-sm text-start text-green-800">
                  An online meeting with notary can take place within 24 hours
                </p>
              </div>
              <button
                className=" text-xl "
                onClick={() => setIsModalOpen(false)} // Close the modal
              >
                ✕
              </button>
            </div>

            {/* Step 1: File Uploads */}
            {step === 1 && (
              <form onSubmit={handleSubmit} className="text-left px-8">
                <div className="space-y-3">
                  <div className="bg-white p-4 shadow-sm rounded space-y-2">
                    <div className="w-full mb-3">
                      <p className="block text-md font-semibold mb-2">
                        Identity Verification (required) :
                      </p>

                      <select
                        name="idType"
                        value={formData.idType}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2"
                      >
                        <option value="">Select ID Type</option>
                        <option value="Driving License">Driving License</option>
                        <option value="NID Card">NID Card</option>
                        <option value="Passport">Passport</option>
                      </select>
                    </div>
                    <div className="py-2">
                      <label className="block text-green-900 text-sm font-semibold  mb-2">
                        ID (required) :
                      </label>
                      <input
                        type="file"
                        required
                        name="uploadedID"
                        multiple
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div>
                      <label className="block text-green-900 text-sm font-semibold  mb-2">
                        Selfie with ID (required) :
                      </label>
                      <input
                        type="file"
                        multiple
                        required
                        name="selfie"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm space-y-3 ">
                    <div>
                      <label className="block text-green-900 text-sm font-semibold  mb-2">
                        Upload Signature :
                      </label>
                      <input
                        type="file"
                        multiple
                        // required
                        name="signature"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>

                    {/* <div className="text-gray-400">
                      ---------- or create one ------------
                    </div> */}

                    <div> </div>
                  </div>
                  <div className="bg-white text-black p-4 rounded-md shadow-sm">
                    <p className="block text-green-900 text-sm font-semibold mb-2">
                      Total Pages :
                    </p>
                    <div className="flex space-x-5">
                      <li
                        onClick={() => setPages(1)}
                        className={`list-none cursor-pointer w-10 h-10 text-center flex items-center justify-center rounded-full shadow-md ${
                          pages == 1 && "bg-gray-900 text-white"
                        }`}
                      >
                        1
                      </li>
                      <li
                        onClick={() => setPages(2)}
                        className={`list-none cursor-pointer w-10 h-10 text-center flex items-center justify-center rounded-full shadow-md ${
                          pages == 2 && "bg-gray-900 text-white"
                        }`}
                      >
                        2
                      </li>
                      <li
                        onClick={() => setPages(3)}
                        className={`list-none cursor-pointer w-10 h-10 text-center flex items-center justify-center rounded-full shadow-md ${
                          pages == 3 && "bg-gray-900 text-white"
                        }`}
                      >
                        3
                      </li>
                      <li
                        onClick={() => setPages(4)}
                        className={`list-none cursor-pointer w-10 h-10 text-center flex items-center justify-center rounded-full shadow-md ${
                          pages == 4 && "bg-gray-900 text-white"
                        }`}
                      >
                        4
                      </li>
                      <li
                        onClick={() => setPages(5)}
                        className={`list-none cursor-pointer w-10 h-10 text-center flex items-center justify-center rounded-full shadow-md ${
                          pages == 5 && "bg-gray-900 text-white"
                        }`}
                      >
                        5
                      </li>
                      <li
                        onClick={() => setPages(6)}
                        className={`list-none cursor-pointer w-10 h-10 text-center flex items-center justify-center rounded-full shadow-md ${
                          pages == 6 && "bg-gray-900 text-white"
                        }`}
                      >
                        6
                      </li>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <p className="block text-green-900 text-sm font-semibold mb-1">
                      Service :
                    </p>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded p-2"
                    >
                      <option value="">Select a service</option>
                      <option value="Online Notary">Online Notary</option>
                      <option value="Seal Document">Seal Document</option>
                      <option value="Affidavit">Affidavit</option>
                    </select>
                  </div>

                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <FileUpload
                      text="Select the files you want to notarize"
                      onFileChange={handleDocumentChange}
                    />
                  </div>
                </div>
                {/* --------------------------------------------------- */}

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

            {/* Step 2: Personal Information */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="text-left px-8">
                <div className="bg-white shadow-sm rounded p-4">
                  <h2 className="block text-lg font-medium mb-5">
                    {" "}
                    Contact Information :
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        className="w-full outline-none border-b border-gray-300  p-2"
                      />
                    </div>
                    <div>
                      <input
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        className="w-full outline-none border-b border-gray-300  p-2"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <input
                      type="email"
                      required
                      name="assignedEmail"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full outline-none border-b border-gray-300  p-2"
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full outline-none border-b border-gray-300  p-2"
                    />
                  </div>
                </div>
                <div className="mt-4 shadow-sm  bg-white p-4 space-y-3 rounded">
                  <h2 className="block text-lg font-medium mb-5"> Address :</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Country"
                      className="w-full border-b outline-none border-gray-300  p-2"
                    />
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                      className="w-full border-b outline-none border-gray-300  p-2"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Location"
                      className="w-full border-b outline-none border-gray-300  p-2"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="Zip Code"
                      className="w-full border-b outline-none border-gray-300  p-2"
                    />
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
                    type="button"
                    onClick={nextStep}
                    className="px-4 py-2 bg-black text-white rounded"
                  >
                    Next
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: File Uploads */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="text-left px-8">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Contact Info</h3>
                    <li className="list-none">
                      Name : {formData.firstName} {""} {formData.lastName}{" "}
                    </li>
                    <li className="list-none">
                      Email : {formData.assignedEmail}{" "}
                    </li>
                    <li className="list-none">
                      Phone Number : {formData.phone}{" "}
                    </li>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Address</h3>
                    <li className="list-none">Country : {formData.country} </li>
                    <li className="list-none">State : {formData.state} </li>
                    <li className="list-none">
                      Location : {formData.location}
                    </li>
                    <li className="list-none">Zip Code : {formData.zipCode}</li>
                  </div>
                  {/* <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Identity Verification
                    </h3>
                    <li className="list-none">ID type : {formData.idType} </li>
                    <li className="list-none">ID image : File 1 </li>
                    <li className="list-none">Selfie with id : File 2</li>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Notary Files</h3>
                    <li className="list-none">File: 1 </li>
                    <li className="list-none">File: 2 </li>
                    <li className="list-none">File: 3 </li>
                  </div> */}
                  <div className="bg-gray-900 text-white p-4 flex justify-between items-center rounded-lg">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {formData.service}
                      </h3>
                      <p className="text-white text-sm">{pages} pages</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        $ {totalPrice}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* -------- + -  - + -- + -- + -- + -- + -- + -- + -- + -- + ------+------ */}
                <div className="mt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 bg-gray-200 text-black rounded"
                  >
                    Back
                  </button>
                  <div
                    type="submit"
                    className="text-white flex justify-center px-4 rounded-md bg-black"
                  >
                    {submitSuccess ? (
                      <Booking
                        onClick={handleSubmit}
                        type="submit"
                        setIsModalOpen={setIsModalOpen}
                        setPages={setPages}
                      />
                    ) : (
                      <button type="submit" onClick={handleSubmit}>
                        Confirm Data
                      </button>
                    )}
                  </div>
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
