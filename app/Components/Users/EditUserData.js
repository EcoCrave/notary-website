import React, { useState } from "react";

const EditUserData = ({ initialData, onClose, onSave }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Pass updated data back to parent
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-lg font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Remaining Fields */}
          {[
            "zipcode",
            "adviserEmail",
            "assignedEmail",
            "bookedDate",
            "bookedTime",
            "dateOfBirth",
            "phoneNumber",
            "userEmail",
            "userId",
          ].map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-gray-700 font-medium">
                {field
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^\w/, (c) => c.toUpperCase())}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          {/* Actions */}
          <div className="flex justify-end space-x-2 sticky bottom-0 bg-white pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserData;
