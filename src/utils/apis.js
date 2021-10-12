import axios from "axios";
import { api_token, BASE_URL } from "./constants";

export const getAllUsers = async () => {
  const res = await axios.get(`${BASE_URL}persons?api_token=${api_token}`);
  const data = res.data;
  return data;
};

export const addUser = async (user) => {
  const res = await axios.post(`${BASE_URL}persons?api_token=${api_token}`, user);
  const data = res.data;
  return data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(`${BASE_URL}persons/${id}?api_token=${api_token}`);
  const data = res.data;
  return data;
};