import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/members";

export const fetchAllMembers = () => {
  return axios.get(`${API_BASE_URL}/all`);
};

export const fetchMemberById = (id) => {
  return axios.get(`${API_BASE_URL}/edit/${id}`);
};

export const createMember = (memberData) => {
  return axios.post(`${API_BASE_URL}/create`, memberData);
};

export const updateMember = (id, memberData) => {
  return axios.post(`${API_BASE_URL}/edit/${id}`, memberData);
};

export const deleteMember = (id) => {
  return axios.delete(`${API_BASE_URL}/delete/${id}`);
};
