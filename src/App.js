import React from "react";
// import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart";
import Register from "./components/register/Register";
import ShoeJordan from "./components/PageProduct/ShoeJordan/ShoeJordan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/jordan" element={<ShoeJordan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
