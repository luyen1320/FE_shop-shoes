// import axios from "../axios";
import axios from "axios";

const createNewUser = (username, email, password) => {
  return axios.post("http://localhost:6868/api/v1/create-new-user", {
    username,
    email,
    password,
  });
};

const loginUser = (valueLogin, password) => {
  return axios.post("http://localhost:6868/api/v1/login", {
    valueLogin,
    password,
  });
};

export { createNewUser, loginUser };
