import React, { useEffect, useState } from "react";
import "./Register.scss";
import Navbar from "../layout/navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Validation from "../../assets/data/registerValidation";

function Register(props) {
  // const [password, setPassword] = useState("");
  // const [isShowPassword, setIsShowPassword] = useState(false);
  const [values, setValues] = useState({
    username: "",
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
      <div className="signup template d-flex justify-content-center align-items-center vh-100">
        <div className="form-container p-5 rounded bg-white">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center">Đăng ký</h3>
            <div className="mb-2">
              <label htmlFor="text">HỌ TÊN</label>
              <input
                type="text"
                name="username"
                // value={formValues.username}
                onChange={handleChange}
                // placeholder="Họ tên"
                className="form-input"
              />
              {errors.username && (
                <span className="text-danger">{errors.username}</span>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="email"
                // value={formValues.email}
                onChange={handleChange}
                // placeholder="Nhập email"
                className="form-input outline-0"
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="password">MẬT KHẨU</label>
              <input
                // type={isShowPassword === true ? "text" : "password"}
                type="password"
                name="password"
                onChange={handleChange}
                // value={password}
                // placeholder="VD: 1234"
                className="form-input"
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
              {/* <i
                className={
                  isShowPassword === true
                    ? "fa-solid fa-eye"
                    : "fa-solid fa-eye-slash"
                }
                onClick={() => setIsShowPassword(!isShowPassword)}
              ></i> */}
            </div>
            <div className="d-grid">
              <button className="btn btn-primary">Đăng Ký</button>
            </div>
            <p className="text-end mt-2">
              Bạn đã có tài khoản?
              <Link to="/login" className="ms-2">
                Đăng Nhập
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
