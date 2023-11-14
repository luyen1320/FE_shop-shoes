import axios from "../axios";

const createProduct = (data) => {
  return axios.post("/api/v1/product/create", data, {
    withCredentials: true,
  });
};

const editProduct = (data) => {
  return axios.put("/api/v1/product/update", data, {
    withCredentials: true,
  });
};
const deleteProduct = (id) => {
  return axios.delete(`/api/v1/product/${id}`, {
    withCredentials: true,
  });
};

const addToCart = (data) => {
  return axios.post("/api/v1/addtocart", data, {
    withCredentials: true,
  });
};

const createOrder = (data) => {
  return axios.post("/api/v1/createOrder", data, {
    withCredentials: true,
  });
};
const getAllProduct = () => {
  return axios.get("/api/v1/product", {
    withCredentials: true,
  });
};
const getAllOrder = () => {
  return axios.get("/api/v1/getallorder", {
    withCredentials: true,
  });
};

const getAllProductInCart = (id) => {
  return axios.get(`/api/v1/getproductincart/${id}`, {
    withCredentials: true,
  });
};

const getOneProduct = (id) => {
  return axios.get(`/api/v1/product/${id}`, {
    withCredentials: true,
  });
};

export {
  createProduct,
  getAllProduct,
  getOneProduct,
  addToCart,
  getAllProductInCart,
  createOrder,
  getAllOrder,
  deleteProduct,
  editProduct,
};
