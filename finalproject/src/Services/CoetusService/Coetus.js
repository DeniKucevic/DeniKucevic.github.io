import axios from "axios";
const BASE_URL = "https://coetus.herokuapp.com/api/users";

const registerUser = async (name, surname, username, password, email) => {
  return await axios.put(`${BASE_URL}`, {
    name,
    surname,
    username,
    password,
    email
  });
};

const loginUser = async (username, password) => {
  return await axios.post(`${BASE_URL}`, { username, password });
};

const getUsers = async () => {
  return await axios.get(`${BASE_URL}`);
};

const getUserInfo = async user_id => {
  return await axios.get(`${BASE_URL}/${user_id}`);
};

export { registerUser, loginUser, getUsers, getUserInfo };
