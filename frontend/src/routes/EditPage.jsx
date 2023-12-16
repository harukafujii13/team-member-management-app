import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchMemberById,
  updateMember,
  deleteMember,
} from "../api/service/memberService"; // Adjust the path as necessary

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
    <form onSubmit={handleSubmit}>
      <input
        name="first_name"
        value={memberData.first_name || ""}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="last_name"
        value={memberData.last_name || ""}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        name="email"
        value={memberData.email || ""}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="phone_num"
        value={memberData.phone_num || ""}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <select
        name="role"
        onChange={handleChange}
        value={memberData.role || "Regular"}>
        <option value="Regular">Regular</option>
        <option value="Admin">Admin</option>
      </select>
      <button type="submit">Save</button>
      <button
        type="button"
        onClick={handleDelete}>
        Delete
      </button>
    </form>
  );
};

export default EditPage;
