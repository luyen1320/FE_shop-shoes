import React, { useState } from "react";
import "./Login.scss";
import Navbar from "../layout/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import { toast } from "react-toastify";
import { loginUser } from "../../service/userService";

function Login(props) {
  const navigate = useNavigate();
  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");
  const defaultValidInput = {
    isValidValueLogin: true,
    isValidPassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

  const handleLogin = async () => {
    setObjCheckInput(defaultValidInput);

    if (!valueLogin) {
      setObjCheckInput({ ...defaultValidInput, isValidValueLogin: false });
      toast.error("Vui lòng nhập email hoặc tài khoản của bạn");
      return;
    }

    if (!password) {
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
      toast.error("Vui lòng nhập mật khẩu");
    }

    let response = await loginUser(valueLogin, password);

    if (response && response.data && +response.data.errCode === 0) {
      //success
      navigate("/");
      //redux
    }

    if (response && response.data && +response.data.errCode !== 0) {
      //error
      toast.error(response.data.errMessage);
    }
    console.log(">> check response: ", response);
  };

  return (
    <>
      <Navbar />
      <div className="login template d-flex justify-content-center align-items-center vh-100">
        <div className="form-container p-5 rounded bg-white">
          <form>
            <h3 className="text-center">Đăng Nhập</h3>
            <div className="mb-2">
              <label htmlFor="email">EMAIL</label>
              <input
                type="text"
                name="email"
                value={valueLogin}
                onChange={(event) => {
                  setValueLogin(event.target.value);
                }}
                className={
                  objCheckInput.isValidValueLogin
                    ? "form-control"
                    : "is-invalid form-control"
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">MẬT KHẨU</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className={
                  objCheckInput.isValidPassword
                    ? "form-control"
                    : "is-invalid form-control"
                }
              />
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
          </form>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleLogin()}
            >
              Đăng nhập
            </button>
          </div>
          <p className="text-end mt-2">
            Bạn chưa có tài khoản?
            <Link to="/register" className="ms-2">
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
