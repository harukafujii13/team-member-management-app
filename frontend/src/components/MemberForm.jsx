import React, { useState } from "react";
import ValidateMemberData from "./ValidateMemberData";

const MemberForm = ({
  memberData,
  handleChange: originalHandleChange,
  handleSubmit: originalHandleSubmit,
  handleDelete,
  isNewMember,
}) => {
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    originalHandleChange(event);
    const newErrors = ValidateMemberData({ ...memberData, [name]: value });
    setErrors(newErrors);
  };

  const handleSubmit = (event) => {
    const newErrors = ValidateMemberData(memberData);
    if (Object.keys(newErrors).length > 0) {
      event.preventDefault();
      setErrors(newErrors);
      return;
    }
    originalHandleSubmit(event);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4">
      <div>
        <label className="block text-lg font-medium mb-2">Info</label>
        <div className="flex flex-col gap-2 text-gray-600">
          <input
            name="first_name"
            value={memberData.first_name || ""}
            onChange={handleChange}
            placeholder="First Name"
            className={`mt-1 px-4 py-2 border rounded-lg w-full ${
              errors.first_name ? "border-red-500" : ""
            }`}
          />
          {errors.first_name && (
            <p className="text-red-500 text-xs">{errors.first_name}</p>
          )}

          <input
            name="last_name"
            value={memberData.last_name || ""}
            onChange={handleChange}
            placeholder="Last Name"
            className={`mt-1 px-4 py-2 border rounded-lg w-full ${
              errors.last_name ? "border-red-500" : ""
            }`}
          />
          {errors.last_name && (
            <p className="text-red-500 text-xs">{errors.last_name}</p>
          )}

          <input
            name="email"
            value={memberData.email || ""}
            onChange={handleChange}
            placeholder="Email"
            className={`mt-1 px-4 py-2 border rounded-lg w-full ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}

          <input
            name="phone_num"
            value={memberData.phone_num || ""}
            onChange={handleChange}
            placeholder="Phone Number"
            className={`mt-1 px-4 py-2 border rounded-lg w-full ${
              errors.phone_num ? "border-red-500" : ""
            }`}
          />
          {errors.phone_num && (
            <p className="text-red-500 text-xs">{errors.phone_num}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Role</label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="role"
            value="Regular"
            checked={memberData.role === "Regular"}
            onChange={handleChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">Regular - Can't delete members</span>
        </label>
        <label className="inline-flex items-center mt-2">
          <input
            type="radio"
            name="role"
            value="Admin"
            checked={memberData.role === "Admin"}
            onChange={handleChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2">Admin - Can delete members</span>
        </label>
      </div>
      <div className="flex gap-4">
        {!isNewMember && (
          <button
            type="button"
            onClick={handleDelete}
            className="flex-1 py-2 text-red-500 hover:text-white border border-gray-300 rounded-lg hover:bg-red-600 transition-colors">
            Delete
          </button>
        )}
        <button
          type="submit"
          className="flex-1 py-2 text-blue-600 hover:text-white border border-gray-300 rounded-lg hover:bg-blue-700 transition-colors">
          Save
        </button>
      </div>
    </form>
  );
};

export default MemberForm;
