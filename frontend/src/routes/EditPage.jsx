// src/routes/EditPage.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchMemberById,
  updateMember,
  deleteMember,
} from "../api/service/memberService";
import MemberForm from "../components/MemberForm";

const EditPage = () => {
  const [memberData, setMemberData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMemberById(id)
      .then((response) => setMemberData(response.data))
      .catch((error) => console.error("Error fetching member:", error));
  }, [id]);

  const handleChange = (event) => {
    setMemberData({ ...memberData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMember(id, memberData)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error updating member:", error));
  };

  const handleDelete = () => {
    deleteMember(id)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error deleting member:", error));
  };

  // Since we are editing an existing member, isNewMember is set to false.
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold">Edit team member</h1>
        <p className="mb-6 text-gray-500">
          Edit contact info, location and role.
        </p>
        <MemberForm
          memberData={memberData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          isNewMember={false}
        />
      </div>
    </div>
  );
};

export default EditPage;
