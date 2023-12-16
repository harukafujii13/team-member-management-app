// src/routes/ListPage.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchAllMembers } from "../api/service/memberService";
import MemberList from "../components/MemberList";
import { FiPlus } from "react-icons/fi";

const ListPage = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllMembers()
      .then((response) => setMembers(response.data))
      .catch((error) => console.error("Error fetching members:", error));
  }, []);

  const handleEdit = (memberId) => {
    navigate(`/edit/${memberId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Team Members</h1>
          <Link
            to="/add"
            className="text-blue-500 p-2 rounded-full bg-blue-100 hover:bg-blue-200">
            <FiPlus className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-gray-600 mb-4">
          You have {members.length} team members.
        </p>
        <MemberList
          members={members}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default ListPage;
