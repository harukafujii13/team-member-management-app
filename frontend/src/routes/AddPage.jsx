import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMember } from "../api/service/memberService"; // Adjust the path as necessary

const AddPage = () => {
  const [memberData, setMemberData] = useState({ role: "Regular" });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    createMember(memberData)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error adding member:", error));
  };

  const handleChange = (event) => {
    setMemberData({ ...memberData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="first_name"
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="last_name"
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="phone_num"
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
