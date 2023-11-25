import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AdminLayout,
  Home,
  ManageOrder,
  ManageProduct,
  ManageUser,
  CreateProduct,
  Customer,
  Supplier,
} from "./pages/AdminDashboard";
import {
  ProductDetails,
  ProductPage,
  Order,
  SaleProduct,
  Accessory,
  Contact,
} from "./components";
import { Login, Cart, Register, InfoAccount } from "./pages/UserDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/info-account" element={<InfoAccount />} />
          <Route path="/sale-product" element={<SaleProduct />} />
          <Route path="/accessory" element={<Accessory />} />
          <Route path="/contact" element={<Contact />} />

          {/*ADMIN */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="manage-user" element={<ManageUser />} />
            <Route path="manage-order" element={<ManageOrder />} />
            <Route path="manage-product" element={<ManageProduct />} />
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="manage-customer" element={<Customer />} />
            <Route path="supplier" element={<Supplier />} />
          </Route>
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
