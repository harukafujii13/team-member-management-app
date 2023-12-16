import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchAllMembers } from "../api/service/memberService";
import { FaUser } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const ListPage = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllMembers()
      .then((response) => setMembers(response.data))
      .catch((error) => console.error("Error fetching members:", error));
  }, []);

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
        <p className="text-gray-500 mb-4">
          You have {members.length} team members.
        </p>
        <div className="space-y-4">
          {members.map((member) => (
            <div
              key={member.member_id}
              className="flex items-center p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/edit/${member.member_id}`)}>
              <div className="flex-shrink-0">
                <FaUser className="h-12 w-12 text-gray-300" />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium">
                  {member.first_name} {member.last_name}
                  {member.role === "Admin" && (
                    <span className="text-xs font-semibold">(admin)</span>
                  )}
                </div>
                <div className="text-sm text-gray-500">{member.phone_num}</div>
                <div className="text-sm text-gray-500">{member.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
