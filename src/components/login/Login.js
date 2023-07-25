import React, { useState } from "react";
import "./Login.scss";
import Navbar from "../layout/navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Validation from "../../assets/data/loginValidation";

function Login(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));

    // if (Object.keys(errors).length === 0) {
    //   // Your login logic goes here
    // }
  };
  return (
    <>
      <Navbar />
      <div className="login template d-flex justify-content-center align-items-center vh-100">
        <div className="form-container p-5 rounded bg-white">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center">Đăng Nhập</h3>
            <div className="mb-2">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="email"
                // value={email}
                onChange={handleChange}
                // placeholder="Nhập email"
                className="form-input"
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="password">MẬT KHẨU</label>
              <input
                type="password"
                // placeholder="VD: 1234"
                name="password"
                // value={password}
                onChange={handleChange}
                className="form-input"
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <div className="mb-2">
              <input
                type="checkbox"
                className="custom-control custom-checkbox"
                id="check"
              />
              <label htmlFor="checkbox" className="custom-input-label ms-2">
                Nhớ mật khẩu
              </label>
              <Link to="" style={{ fontSize: "14px", float: "right" }}>
                Quên mật khẩu
              </Link>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Đăng nhập
              </button>
            </div>
            <p className="text-end mt-2">
              Bạn chưa có tài khoản?
              <Link to="/register" className="ms-2">
                Đăng ký
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
