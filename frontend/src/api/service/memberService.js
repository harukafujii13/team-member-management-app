import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/`;

export const fetchAllMembers = () => {
  return axios.get(`${API_BASE_URL}/all`);
};

export const fetchMemberById = (id) => {
  return axios.get(`${API_BASE_URL}/edit/${id}`);
};

export const createMember = async (memberData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, memberData);
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
  return axios.post(`${API_BASE_URL}/edit/${id}`, memberData);
};

export const deleteMember = (id) => {
  return axios.delete(`${API_BASE_URL}/delete/${id}`);
};
