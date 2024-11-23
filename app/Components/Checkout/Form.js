"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Form() {
  const { register, handleSubmit, watch, reset } = useForm();
  const [dob, setDob] = useState(null);
  const [appointment, setAppointment] = useState(null);

  const onSubmit = (data) => {
    data.dob = dob;
    data.appointment = appointment;
    console.log(data);
    reset();
  };

  return (
    <div className="max-[90%] bg-gray-50 bg mx-auto p-6 ">
      <h2 className="text-4xl space-y-3 text-center font-bold mb-4">
        Service Request Form
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white shadow-md rounded p-10 mx-auto max-w-4xl"
      >
        {/* Name */}
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Your Email"
          />
        </div>

        {/* Date of Birth */}
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">
            Date of Birth
          </label>
          <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            className="w-full px-3 py-2 border rounded"
            placeholderText="Select Date of Birth"
          />
        </div>

        {/* Address */}
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">Country</label>
          <input
            {...register("country", { required: true })}
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Country"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">State</label>
          <input
            {...register("state", { required: true })}
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="State"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">Zip Code</label>
          <input
            {...register("zipcode", { required: true })}
            type="text"
            className="w-full px-3 py-2 border rounded"
            placeholder="Zip Code"
          />
        </div>

        {/* Services */}
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">
            Choose Services
          </label>
          <div className="flex flex-wrap gap-2">
            {["Digital Sign", "Notarize", "Affidavit"].map((service) => (
              <label key={service} className="flex items-center space-x-2">
                <input
                  {...register("services")}
                  type="checkbox"
                  value={service}
                  className="h-4 w-4"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Advisor Email */}
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">
            Advisor Email
          </label>
          <input
            {...register("advisor_email", { required: true })}
            type="email"
            className="w-full px-3 py-2 border rounded"
            placeholder="Advisor Email"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">Phone Number</label>
          <input
            {...register("phone", { required: true })}
            type="tel"
            className="w-full px-3 py-2 border rounded"
            placeholder="Phone Number"
          />
        </div>

        {/* ID Type */}
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">ID Type</label>
          <select
            {...register("id_type", { required: true })}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select</option>
            <option value="NID">NID</option>
            <option value="Passport">Passport</option>
            <option value="Driving License">Driving License</option>
          </select>
        </div>

        {/* Upload ID Card Photo */}
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">
            Upload ID Card Photo
          </label>
          <input
            {...register("id_card_photo", { required: true })}
            type="file"
            className="w-full"
          />
        </div>

        {/* Upload eSignature */}
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">
            Upload eSignature
          </label>
          <input
            {...register("esignature", { required: true })}
            type="file"
            className="w-full"
          />
        </div>

        {/* Upload file's Photo */}
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">Upload Files</label>
          <input
            {...register("id_card_photo", { required: true })}
            type="file"
            className="w-full"
          />
        </div>

        {/* Calendar Time Picker */}
        <div className="space-y-1">
          <label className="block text-lg font-medium mb-1">
            Appointment Time
          </label>
          <DatePicker
            selected={appointment}
            onChange={(date) => setAppointment(date)}
            showTimeSelect
            dateFormat="Pp"
            className="w-full px-3 py-2 border rounded"
            placeholderText="Select Appointment Time"
          />
        </div>

        {/* Submit Button */}
        <div className="space-y-1">
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
