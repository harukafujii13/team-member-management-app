// src/routes/AddPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMember } from "../api/service/memberService";
import MemberForm from "../components/MemberForm";

const AddPage = () => {
  const [memberData, setMemberData] = useState({
    role: "Regular",
    first_name: "",
    last_name: "",
    email: "",
    phone_num: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setMemberData({ ...memberData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createMember(memberData)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error adding member:", error));
  };

  // No delete functionality needed on the AddPage, so we don't pass a handleDelete or isNewMember prop.
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold">Add a team member</h1>
        <p className="mb-6 text-gray-500">Set email, location and role.</p>
        <MemberForm
          memberData={memberData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isNewMember={true}
        />
      </div>
    </div>
  );
};

export default AddPage;
