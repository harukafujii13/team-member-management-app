import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllMembers } from "../api/service/memberService"; // Adjust the path as necessary

const ListPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchAllMembers()
      .then((response) => setMembers(response.data))
      .catch((error) => console.error("Error fetching members:", error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">Team Members</h1>
      <p>Number of members: {members.length}</p>
      <ul>
        {Array.isArray(members) &&
          members.map((member) => (
            <li key={member.member_id}>
              {member.first_name} {member.last_name}
              {member.role === "Admin" && " (Admin)"}
              <Link to={`/edit/${member.member_id}`}>Edit</Link>
            </li>
          ))}
      </ul>
      <Link to="/add">+</Link>
    </div>
  );
};

export default ListPage;

// import React from "react";
// import { FaPlus } from "react-icons/fa";

// const ListPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-200">
//       <div className="p-2 bg-white shadow-lg w-96 md:w-2/3 lg:w-1/4">
//         <div className="text-xl text-blue-500 flex justify-end">
//           <FaPlus />
//         </div>
//         <div className="text-xl">Team members</div>
//         <span className="text-sm text-gray-400">You have 3 team members</span>
//       </div>
//     </div>
//   );
// };

// export default ListPage;
