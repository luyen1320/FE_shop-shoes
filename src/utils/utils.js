import { setProducts } from "../redux/cartSlice";
import { getAllProductInCart } from "../service/productService";

// src/auth.js
export const login = (user) => {
  // Lưu thông tin người dùng vào Local Storage khi đăng nhập
  localStorage.setItem("user", JSON.stringify(user));
};

export const logout = () => {
  // Xóa thông tin người dùng khỏi Local Storage khi đăng xuất
  localStorage.removeItem("user");

  window.location.reload();
};

export const getAllProductsInCart = async (id, dispatch, toast) => {
  let res = await getAllProductInCart(id);
  if (res && res.errCode === 0) {
    dispatch(setProducts(res.DT));
  } else {
    console.log(res.errMessage);
    toast.error(res.errMessage);
  }
};
