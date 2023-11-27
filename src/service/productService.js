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
const removeproductcart = (data) => {
  console.log(data);
  return axios.delete(
    `/api/v1/removeproductcart?userId=${data?.userId}&productId=${data?.productId}&sizeId=${data?.sizeId}`,
    {
      withCredentials: true,
    }
  );
};

const createOrder = (data) => {
  return axios.post("/api/v1/createOrder", data, {
    withCredentials: true,
  });
};

const updateOrder = (id, data) => {
  return axios.put(`/api/v1/updateorder/${id}`, data, {
    withCredentials: true,
  });
};
const getAllProduct = (
  page,
  limit,
  supplierName = "",
  minPrice = "",
  maxPrice = "",
  sizes = "1,2,3,4,5,6,7"
) => {
  return axios.get(
    `/api/v1/product?page=${page}&limit=${limit}&supplierName=${supplierName}&minPrice=${minPrice}&maxPrice=${maxPrice}&sizes=${sizes}`,
    {
      withCredentials: true,
    }
  );
};
const getAllOrder = () => {
  return axios.get("/api/v1/getallorder", {
    withCredentials: true,
  });
};
const getOrderById = (id) => {
  return axios.get(`/api/v1/getorder/${id}`, {
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

const getReviews = (id) => {
  return axios.get(`/api/v1/review/${id}`, {
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
  updateOrder,
  removeproductcart,
  getReviews,
  getOrderById,
};
