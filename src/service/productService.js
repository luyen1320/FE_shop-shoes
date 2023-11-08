import axios from "../axios";

const createProduct = (data) => {
  return axios.post("/api/v1/product/create", data, {
    withCredentials: true,
  });
};
const getAllProduct = () => {
  return axios.get("api/v1/product", {
    withCredentials: true,
  });
};

export { createProduct, getAllProduct };
