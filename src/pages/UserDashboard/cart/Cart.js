import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import nike02 from "../../../assets/images/nike02.jpeg";
import Navbar from "../../../components/navbar/Navbar";
import {
  createOrder,
  getAllProductInCart,
} from "../../../service/productService";
import { toast } from "react-toastify";
import { convertBase64ToImage } from "../../../assets/data/image";

function Cart(props) {
  const [chooseProduct, setChooseProduct] = useState([]);
  const [getProductCart, setGetProductCart] = useState([]);
  const getAllProductsInCart = async () => {
    let res = await getAllProductInCart(8);
    if (res && res.errCode === 0) {
      setGetProductCart(res.DT);
    } else {
      toast.error(res.errMessage);
    }
  };

  useEffect(() => {
    getAllProductsInCart();
  }, []);

  const handleCreateOrder = async () => {
    try {
      let res = await createOrder({
        userId: 8,
        note: "",
        totalMoney: chooseProduct?.reduce(
          (accumulator, currentValue) =>
            accumulator + parseInt(currentValue.price) * currentValue.quantity,
          0
        ),
        listProduct: chooseProduct,
      });
      if (res && res.errCode === 0) {
        toast.success("Đặt hàng thành công");
        // history.push("/cart");
      } else {
        toast.error(res.errMessage);
      }
      getAllProductsInCart();
    } catch (e) {
      toast.error(e.errMessage);
      console.log(e);
    }
  };
  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div className="container">
          <div className="breadcrumb">
            <div className="flex breadcrumb-items">
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

        <div className="py-5 bg-ghost-white">
          <div className="container">
            <div className="section-title bg-ghost-white">
              <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
                Giỏ hàng của tôi
              </h3>
            </div>
            <div className="cart-content">
              <div className="cart-left">
                {getProductCart?.length > 0 &&
                  getProductCart?.map((item, index) => (
                    <div className="grid cart-items" key={index}>
                      <div className="grid cart-item">
                        <div className="cart-item-img">
                          <img
                            src={convertBase64ToImage(item?.image)}
                            alt="nike"
                          />
                          {/* <button
                            type="button"
                            className="btn-square rmv-from-cart-btn"
                          >
                            <span className="btn-square-icon">
                              <i className="fas fa-trash"></i>
                            </span>
                          </button> */}
                          <button
                            type="button"
                            className="mt-2 rmv-from-cart-btn"
                          >
                            <input
                              type="checkbox"
                              className="w-5 h-5"
                              onChange={(e) => {
                                if (e.target.checked === true) {
                                  setChooseProduct([
                                    ...chooseProduct,
                                    { ...getProductCart[index] },
                                  ]);
                                }
                                if (e.target.checked === false) {
                                  setChooseProduct(
                                    chooseProduct.filter(
                                      (prd) => prd.id !== item.id
                                    )
                                  );
                                }
                              }}
                            />
                          </button>
                        </div>

                        <div className="cart-item-info">
                          <h5 className="cart-title">{item?.productName}</h5>
                          <div className="flex qty">
                            <span className="text-light-blue qty-text">
                              Số lượng:{" "}
                            </span>
                            <div className="flex qty-change">
                              <button type="button" className="qty-dec fs-14">
                                <i className="fas fa-minus text-light-blue">
                                  {item?.quantity}
                                </i>
                              </button>
                              <span className="flex qty-value flex-center"></span>
                              <button
                                type="button"
                                className="qty-inc fs-14 text-light-blue"
                              >
                                <i className="fas fa-plus">{item?.size}</i>
                              </button>
                            </div>
                          </div>
                          <div className="flex price flex-between">
                            <div className="text-pine-green fw-4 fs-15">
                              Giá : {parseInt(item?.price).toLocaleString()}đ
                            </div>
                            <div className="sub-total fw-6 fs-18 text-regal-blue">
                              <span>
                                Tổng:{" "}
                                {(
                                  parseInt(item?.price) * item?.quantity
                                ).toLocaleString()}
                                đ
                              </span>
                              <span className=""></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                <button type="button" className="btn-danger">
                  <span className="fs-16">Xóa hết</span>
                </button>
              </div>
              <div className="bg-white cart-right">
                <div className="cart-summary text-light-blue">
                  <div className="cart-summary-title">
                    <h6 className="fs-20 fw-5">Đặt hàng</h6>
                  </div>
                  <ul className="cart-summary-info">
                    <li className="flex flex-between">
                      <span className="fw-4">Giá</span>
                      <span className="fw-7">
                        {(chooseProduct?.length === 0
                          ? "0"
                          : chooseProduct?.reduce(
                              (accumulator, currentValue) =>
                                accumulator +
                                parseInt(currentValue.price) *
                                  currentValue.quantity,
                              0
                            )
                        ).toLocaleString()}
                      </span>
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
                  <div className="flex cart-summary-total flex-between fs-18">
                    <span className="fw-6">Tạm tính: </span>
                    <span className="fw-6"></span>
                  </div>
                  <div className="cart-summary-btn">
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        handleCreateOrder();
                      }}
                    >
                      Đặt hàng
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
