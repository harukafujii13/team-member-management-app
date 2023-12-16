import React from "react";
import { FaUser } from "react-icons/fa";

const MemberList = ({ members, onEdit }) => {
  return (
    <div className="space-y-4">
      {members.map((member) => (
        <div
          key={member.member_id}
          className="flex items-center p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-50"
          onClick={() => onEdit(member.member_id)}>
          <div className="flex-shrink-0">
            <FaUser className="h-12 w-12 text-gray-300" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium">
              {member.first_name} {member.last_name}{" "}
              {member.role === "Admin" && (
                <span className="text-xs font-semibold">(admin)</span>
              )}
            </div>
            <div className="text-sm text-gray-500">{member.email}</div>
            <div className="text-sm text-gray-500">{member.phone_num}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberList;
