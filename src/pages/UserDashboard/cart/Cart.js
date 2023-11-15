import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import {
  addToCart,
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

  useEffect(() => {
    sessionStorage.setItem("chooseProduct", JSON.stringify(chooseProduct));
  }, [chooseProduct]);

  const handleSetQuantity = async (number, id, size) => {
    const newArray = [...getProductCart];
    const updatedArray = newArray.map((item) => {
      if (
        item.quantity === 1 &&
        number === -1 &&
        item?.id === id &&
        item?.size === size
      ) {
        toast.warning("Số lượng sản phẩm không thể nhỏ hơn 1");
        return item;
      }
      if (item?.id === id && item?.size === size) {
        return { ...item, quantity: item.quantity + number };
      } else {
        return item;
      }
    });

    // Cập nhật chooseProduct dựa trên updatedArray
    const updatedChooseProduct = chooseProduct.map((item) => {
      // Kiểm tra sản phẩm đã tồn tại trong chooseProduct chưa
      if (item?.id === id && item?.size === size) {
        return { ...item, quantity: item.quantity + number };
      } else {
        return item;
      }
    });

    // Cập nhật state cho chooseProduct
    setChooseProduct(updatedChooseProduct);
    setGetProductCart(updatedArray);
    let res = await addToCart({
      userId: 8,
      productId: id,
      sizeId: size,
      quantity: number,
    });
    if (res && res.errCode === 0) {
    } else {
      toast.error(res.errMessage);
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
                                      (prd) =>
                                        prd.id !== item.id ||
                                        prd.size !== item.size
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
                              <button
                                type="button"
                                className="flex items-center justify-center qty-dec fs-14"
                                onClick={() => {
                                  handleSetQuantity(-1, item?.id, item?.size);
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 12h-15"
                                  />
                                </svg>
                              </button>
                              <span className="flex qty-value flex-center">
                                {item?.quantity}
                              </span>
                              <button
                                type="button"
                                className="flex items-center justify-center qty-inc fs-14"
                                onClick={() => {
                                  handleSetQuantity(1, item?.id, item?.size);
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="flex qty">
                            <span className="text-light-blue qty-text">
                              Size:{" "}
                            </span>
                            <div className="flex qty-change">{item?.size}</div>
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
                    <NavLink
                      to="/order"
                      className="flex items-center justify-center w-full h-full py-2 text-white bg-yellow-500 rounded-md"
                    >
                      Đặt hàng
                    </NavLink>
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
