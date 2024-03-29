import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, normalizedUser);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/users`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const editUser = async (userId, normalizeUser) => {
  try {
    const { data } = await axios.put(
      `${apiUrl}/users/${userId}`,
      normalizeUser
    );
    console.log(data);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getUserFromServer = async (userId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/users${userId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
