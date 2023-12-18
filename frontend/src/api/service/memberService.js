import axios from "axios";
import { toast } from "react-toastify";

export const fetchAllMembers = () => {
  return axios.get(`${import.meta.env.VITE_API_BASE_URL}/all`);
};

console.log("hihihi", import.meta.env.VITE_API_BASE_URL);

export const fetchMemberById = (id) => {
  return axios.get(`${import.meta.env.VITE_API_BASE_URL}/edit/${id}`);
};

export const createMember = async (memberData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/create`,
      memberData
    );
    toast.success("Member created successfully!");
    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      toast.error("This email or phone number already exists!");
    } else {
      toast.error("Network error!");
    }
    throw error;
  }
};

export const updateMember = (id, memberData) => {
  return axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/edit/${id}`,
    memberData
  );
};

export const deleteMember = (id) => {
  return axios.delete(`${import.meta.env.VITE_API_BASE_URL}/delete/${id}`);
};
