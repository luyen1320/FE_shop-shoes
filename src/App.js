import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/UserDashboard/login/Login";
import Cart from "./pages/UserDashboard/cart/Cart";
import Register from "./pages/UserDashboard/register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AdminLayout,
  Home,
  ManageOrder,
  ManageProduct,
  CreateProduct,
  Supplier,
  ManageUser,
} from "./pages/AdminDashboard";
import ProductDetails from "./components/productDetails/productDetails";
import ProductPage from "./components/productDetails/ProductPage";
import ManageCustomer from "./pages/AdminDashboard/ManageCustomer";
import { Order } from "./components";
import InfoAccount from "./pages/UserDashboard/infoAccount/InfoAccount";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    // Kiểm tra xem có thông tin người dùng trong Local Storage không
    const storedUser = localStorage.getItem("user");

    // Nếu có, chuyển đổi chuỗi JSON thành đối tượng và cập nhật state
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/info-account" element={<InfoAccount />} />

          {/*ADMIN */}
          {/* {user && user.roleId !== "USER" ? ( */}
          <Route
            path="/admin"
            element={
              user.roleId !== "USER" ? <AdminLayout /> : <Navigate to="/" />
            }
          >
            <Route path="home" element={<Home />} />
            <Route path="manage-user" element={<ManageCustomer />} />
            <Route path="manage-order" element={<ManageOrder />} />
            <Route path="manage-product" element={<ManageProduct />} />
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="edit-product/:id" element={<CreateProduct />} />
            <Route path="manage-customer" element={<ManageUser />} />
            <Route path="supplier" element={<Supplier />} />
          </Route>
          {/* ) : (
            
          )} */}
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
