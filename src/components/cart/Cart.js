import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import nike02 from "../../assets/images/nike02.jpeg";
import Navbar from "../layout/navbar/Navbar";

function Cart(props) {
  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div className="container">
          <div className="breadcrumb">
            <div className="breadcrumb-items flex">
              <li className="breadcrumb-item">
                <Link to="/">
                  <i className="fas fa-home"></i>
                  <span className="breadcrumb-separator">
                    <i className="fas fa-chevron-right"></i>
                  </span>
                </Link>
              </li>
              <li>Giỏ Hàng</li>
            </div>
          </div>
        </div>

        <div className="bg-ghost-white py-5">
          <div className="container">
            <div className="section-title bg-ghost-white">
              <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
                Giỏ hàng của tôi
              </h3>
            </div>
            <div className="cart-content">
              <div className="cart-left">
                <div className="cart-items grid">
                  <div className="cart-item grid">
                    <div className="cart-item-img">
                      <img src={nike02} alt="nike" />
                      <button
                        type="button"
                        className="btn-square rmv-from-cart-btn"
                      >
                        <span className="btn-square-icon">
                          <i className="fas fa-trash"></i>
                        </span>
                      </button>
                    </div>

                    <div className="cart-item-info">
                      <h5 className="cart-title">
                        Giày Nike Air Force 1 Chanel Chất 2023 Likeauth 1 Chanel
                        Chất 2023 Likeauth
                      </h5>
                      <div className="qty flex">
                        <span className="text-light-blue qty-text">
                          Số lượng:{" "}
                        </span>
                        <div className="qty-change flex">
                          <button type="button" className="qty-dec fs-14">
                            <i className="fas fa-minus text-light-blue"></i>
                          </button>
                          <span className="qty-value flex flex-center"></span>
                          <button
                            type="button"
                            className="qty-inc fs-14 text-light-blue"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="price flex flex-between">
                        <div className="text-pine-green fw-4 fs-15">
                          Giá : 1.000.000đ
                        </div>
                        <div className="sub-total fw-6 fs-18 text-regal-blue">
                          <span>Tổng: 1.000.000đ</span>
                          <span className=""></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cart-items grid">
                  <div className="cart-item grid">
                    <div className="cart-item-img">
                      <img src={nike02} alt="nike" />
                      <button
                        type="button"
                        className="btn-square rmv-from-cart-btn"
                      >
                        <span className="btn-square-icon">
                          <i className="fas fa-trash"></i>
                        </span>
                      </button>
                    </div>

                    <div className="cart-item-info">
                      <h5 className="cart-title">
                        Giày Nike Air Force 1 Chanel Chất 2023 Likeauth 1 Chanel
                        Chất 2023 Likeauth
                      </h5>
                      <div className="qty flex">
                        <span className="text-light-blue qty-text">
                          Số lượng:{" "}
                        </span>
                        <div className="qty-change flex">
                          <button type="button" className="qty-dec fs-14">
                            <i className="fas fa-minus text-light-blue"></i>
                          </button>
                          <span className="qty-value flex flex-center"></span>
                          <button
                            type="button"
                            className="qty-inc fs-14 text-light-blue"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="price flex flex-between">
                        <div className="text-pine-green fw-4 fs-15">
                          Giá : 1.000.000đ
                        </div>
                        <div className="sub-total fw-6 fs-18 text-regal-blue">
                          <span>Tổng: 1.000.000đ</span>
                          <span className=""></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cart-items grid">
                  <div className="cart-item grid">
                    <div className="cart-item-img">
                      <img src={nike02} alt="nike" />
                      <button
                        type="button"
                        className="btn-square rmv-from-cart-btn"
                      >
                        <span className="btn-square-icon">
                          <i className="fas fa-trash"></i>
                        </span>
                      </button>
                    </div>

                    <div className="cart-item-info">
                      <h5 className="cart-title">
                        Giày Nike Air Force 1 Chanel Chất 2023 Likeauth 1 Chanel
                        Chất 2023 Likeauth
                      </h5>
                      <div className="qty flex">
                        <span className="text-light-blue qty-text">
                          Số lượng:{" "}
                        </span>
                        <div className="qty-change flex">
                          <button type="button" className="qty-dec fs-14">
                            <i className="fas fa-minus text-light-blue"></i>
                          </button>
                          <span className="qty-value flex flex-center"></span>
                          <button
                            type="button"
                            className="qty-inc fs-14 text-light-blue"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="price flex flex-between">
                        <div className="text-pine-green fw-4 fs-15">
                          Giá : 1.000.000đ
                        </div>
                        <div className="sub-total fw-6 fs-18 text-regal-blue">
                          <span>Tổng: 1.000.000đ</span>
                          <span className=""></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cart-items grid">
                  <div className="cart-item grid">
                    <div className="cart-item-img">
                      <img src={nike02} alt="nike" />
                      <button
                        type="button"
                        className="btn-square rmv-from-cart-btn"
                      >
                        <span className="btn-square-icon">
                          <i className="fas fa-trash"></i>
                        </span>
                      </button>
                    </div>

                    <div className="cart-item-info">
                      <h5 className="cart-title">
                        Giày Nike Air Force 1 Chanel Chất 2023 Likeauth 1 Chanel
                        Chất 2023 Likeauth
                      </h5>
                      <div className="qty flex">
                        <span className="text-light-blue qty-text">
                          Số lượng:{" "}
                        </span>
                        <div className="qty-change flex">
                          <button type="button" className="qty-dec fs-14">
                            <i className="fas fa-minus text-light-blue"></i>
                          </button>
                          <span className="qty-value flex flex-center"></span>
                          <button
                            type="button"
                            className="qty-inc fs-14 text-light-blue"
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="price flex flex-between">
                        <div className="text-pine-green fw-4 fs-15">
                          Giá : 1.000.000đ
                        </div>
                        <div className="sub-total fw-6 fs-18 text-regal-blue">
                          <span>Tổng: 1.000.000đ</span>
                          <span className=""></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn-danger">
                  <span className="fs-16">Xóa hết</span>
                </button>
              </div>
              <div className="cart-right bg-white">
                <div className="cart-summary text-light-blue">
                  <div className="cart-summary-title">
                    <h6 className="fs-20 fw-5">Đặt hàng</h6>
                  </div>
                  <ul className="cart-summary-info">
                    <li className="flex flex-between">
                      <span className="fw-4">Giá</span>
                      <span className="fw-7"></span>
                    </li>
                    <li className="flex flex-between">
                      <span className="fw-4">Giảm giá</span>
                      <span className="fw-7">
                        <span className="fw-5 text-red">-&nbsp;</span>
                      </span>
                    </li>
                    <li className="flex flex-between">
                      <span className="fw-4">Chi phí giao hàng</span>
                      <span className="fw-7">
                        <span className="fw-5 text-gold">+&nbsp;</span>
                      </span>
                    </li>
                  </ul>
                  <div className="cart-summary-total flex flex-between fs-18">
                    <span className="fw-6">Tạm tính: </span>
                    <span className="fw-6"></span>
                  </div>
                  <div className="cart-summary-btn">
                    <button type="button" className="btn-secondary">
                      Thanh toán
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
