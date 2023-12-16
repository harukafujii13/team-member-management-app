import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchMemberById,
  updateMember,
  deleteMember,
} from "../api/service/memberService";

const EditPage = () => {
  const [memberData, setMemberData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMemberById(id)
      .then((response) => setMemberData(response.data))
      .catch((error) => console.error("Error fetching member:", error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMember(id, memberData)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error updating member:", error));
  };

  const handleChange = (event) => {
    setMemberData({ ...memberData, [event.target.name]: event.target.value });
  };

  const handleDelete = () => {
    deleteMember(id)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error deleting member:", error));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold">Edit team member</h1>
        <p className="mb-6 text-gray-500">
          Edit contact info, location and role.
        </p>
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
                placeholder="First name"
                className="mt-1 px-4 py-2 border rounded-lg w-full"
              />
              <input
                name="last_name"
                value={memberData.last_name || ""}
                onChange={handleChange}
                placeholder="Last name"
                className="mt-1 px-4 py-2 border rounded-lg w-full"
              />
              <input
                name="email"
                value={memberData.email || ""}
                onChange={handleChange}
                placeholder="Email"
                className="mt-1 px-4 py-2 border rounded-lg w-full"
              />
              <input
                name="phone_num"
                value={memberData.phone_num || ""}
                onChange={handleChange}
                placeholder="Phone number"
                className="mt-1 px-4 py-2 border rounded-lg w-full"
              />
            </div>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Role</label>
            <div className="flex items-center mt-1">
              <input
                type="radio"
                name="role"
                value="Regular"
                checked={memberData.role === "Regular"}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label className="ml-3 block text-sm font-medium">
                Regular - Can’t delete members
              </label>
            </div>
            <div className="flex items-center mt-1">
              <input
                type="radio"
                name="role"
                value="Admin"
                checked={memberData.role === "Admin"}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label className="ml-3 block text-sm font-medium">
                Admin - Can delete members
              </label>
            </div>
          </div>
          <div className="flex justify-between space-x-4">
            <button
              type="button"
              onClick={handleDelete}
              className="w-1/2 py-2 text-red-500 hover:text-white border border-gray-300 rounded-lg hover:bg-red-600 transition-colors">
              Delete
            </button>
            <button
              type="submit"
              className="w-1/2 py-2 text-blue-600 hover:text-white border border-gray-300 rounded-lg hover:bg-blue-700 transition-colors">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
