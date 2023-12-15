import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddPage = () => {
  const [memberData, setMemberData] = useState({ role: "Regular" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/members/create", memberData)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error adding member:", error));
  };

  const handleChange = (event) => {
    setMemberData({ ...memberData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="lastName"
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="phoneNum"
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <select
        name="role"
        onChange={handleChange}
        defaultValue="Regular">
        <option value="Regular">Regular</option>
        <option value="Admin">Admin</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default AddPage;
