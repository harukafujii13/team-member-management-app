import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const [memberData, setMemberData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/members/edit/${id}`)
      .then((response) => setMemberData(response.data))
      .catch((error) => console.error("Error fetching member:", error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Updating member:", memberData);
    axios
      .post(`http://localhost:8000/api/members/edit/${id}`, memberData)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error updating member:", error));
  };

  const handleChange = (event) => {
    setMemberData({ ...memberData, [event.target.name]: event.target.value });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/members/delete/${id}`)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error deleting member:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={memberData.firstName || ""}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="lastName"
        value={memberData.lastName || ""}
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
        name="phoneNum"
        value={memberData.phoneNum || ""}
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
