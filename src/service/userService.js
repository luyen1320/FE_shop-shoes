import axios from "../axios";

const createNewUser = (data) => {
  return axios.post("/api/create-new-user", data);
};

export { createNewUser };
