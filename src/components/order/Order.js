import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Order.scss";
import ProvinceDropdown from "../modal/Provinces/Provinces";
import DistrictDropDwon from "../modal/Provinces/District";
import WardDropdown from "../modal/Provinces/Ward";
import nike from "./../../assets/images/Giay-Air-Jordan-1-Retro-Hi-Premium-GS-Camo-822858-027.jpg";
import nike01 from "./../../assets/images/Giay-Air-Jordan-11-Retro-Gratitude-Defining-Moments-CT8012-170.jpg";
import { convertBase64ToImage } from "../../assets/data/image";
import { createOrder, getAllProductInCart } from "../../service/productService";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Order = () => {
  const [selectedProvinceCode, setSelectedProvinceCode] = useState("");
  const cartProducts = useSelector((state) => state.cart.cartProducts.data);
  const [orderProduct, setOrderProduct] = useState([]);
  const [selectedDistrictCode, setSelectedDistrictCode] = useState("");
  // const [storedValue, setStoredValue] = useState([]);
  const [detailOrder, setDetailOrder] = useState({
    username: "",
    email: "",
    phone: "",
    addressDetail: "",
    note: "",
    totalMoney: "",
    userId: "",
    paymentType: "COD",
    deliveryType: "STANDARD",
    province: "",
    district: "",
    ward: "",
  });
  console.log(detailOrder);
  useEffect(() => {
    // Kiểm tra xem có thông tin người dùng trong Local Storage không
    const chooseProduct = localStorage.getItem("chooseProduct");

    // Nếu có, chuyển đổi chuỗi JSON thành đối tượng và cập nhật state
    if (chooseProduct) {
      setOrderProduct([JSON.parse(chooseProduct)]);
    }
  }, []);
  const [user, setUser] = useState({});
  useEffect(() => {
    // Kiểm tra xem có thông tin người dùng trong Local Storage không
    const storedUser = localStorage.getItem("user");

    // Nếu có, chuyển đổi chuỗi JSON thành đối tượng và cập nhật state
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    return () => {
      // Xóa dữ liệu trong localStorage khi component unmount
      localStorage.removeItem("chooseProduct");
    };
  }, []);

  const handleProvinceChange = (event) => {
    const selectedOptions = event.target.selectedOptions;

    if (selectedOptions.length > 0) {
      // Lấy giá trị của thuộc tính 'value' và 'name' của option đầu tiên (nếu muốn lấy từ tất cả, bạn có thể lặp qua selectedOptions)
      const selectedProvinceCode = selectedOptions[0].value;
      const selectedProvinceName = selectedOptions[0].getAttribute("name");
      setSelectedProvinceCode(selectedProvinceCode);
      setDetailOrder({ ...detailOrder, province: selectedProvinceName });
    }
  };

  const handleDistrictChange = (event) => {
    const selectedOptions = event.target.selectedOptions;

    if (selectedOptions.length > 0) {
      // Lấy giá trị của thuộc tính 'value' và 'name' của option đầu tiên (nếu muốn lấy từ tất cả, bạn có thể lặp qua selectedOptions)
      const selectedDistrictCode = selectedOptions[0].value;
      const selectedDistrictName = selectedOptions[0].getAttribute("name");
      setSelectedDistrictCode(selectedDistrictCode);
      setDetailOrder({ ...detailOrder, district: selectedDistrictName });
    }
  };

  const handleWardChange = (event) => {
    const selectedOptions = event.target.selectedOptions;

    if (selectedOptions.length > 0) {
      // Lấy giá trị của thuộc tính 'value' và 'name' của option đầu tiên (nếu muốn lấy từ tất cả, bạn có thể lặp qua selectedOptions)
      const selectedWardName = selectedOptions[0].getAttribute("name");
      setDetailOrder({ ...detailOrder, ward: selectedWardName });
    }
  };

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    if (!detailOrder.username) {
      toast.error("Vui lòng nhập họ tên");
      return;
    }
    if (!detailOrder.email) {
      toast.error("Vui lòng nhập email");
      return;
    } else if (!detailOrder.email.includes("@")) {
      toast.error("Email không hợp lệ");
      return;
    }
    if (!detailOrder.phone) {
      toast.error("Vui lòng nhập số điện thoại");
      return;
    }
    if (!detailOrder.addressDetail) {
      toast.error("Vui lòng nhập địa chỉ");
      return;
    }
    if (!detailOrder.province) {
      toast.error("Vui lòng chọn tỉnh/thành phố");
      return;
    }
    if (!detailOrder.district) {
      toast.error("Vui lòng chọn quận/huyện");
      return;
    }
    if (!detailOrder.ward) {
      toast.error("Vui lòng chọn xã/phường");
      return;
    }
    if (!detailOrder.deliveryType) {
      toast.error("Vui lòng chọn hình thức giao hàng");
      return;
    }
    if (!detailOrder.paymentType) {
      toast.error("Vui lòng chọn hình thức thanh toán");
      return;
    }

    try {
      let res = await createOrder({
        ...detailOrder,
        listProduct: orderProduct?.length > 0 ? orderProduct : cartProducts,
      });
      if (res && res.errCode === 0) {
        toast.success("Đặt hàng thành công");
        localStorage.removeItem("chooseProduct");
        window.location.href = "/";
      } else {
        toast.error(res.errMessage);
      }
    } catch (e) {
      toast.error(e.errMessage);
      console.log(e);
    }
  };
  // useEffect(() => {
  //   console.log(user);
  //   setDetailOrder({
  //     ...detailOrder,

  //   });
  // }, [user]);

  useEffect(() => {
    const init = detailOrder?.deliveryType === "FAST" ? 65000 : 45000;
    if (orderProduct?.length > 0) {
      console.log(123);
      setDetailOrder({
        ...detailOrder,
        userId: user?.id,
        username: user?.username,
        email: user?.email,
        phone: user?.phone,
        addressDetail: user?.addressDetails,
        totalMoney:
          parseInt(orderProduct[0]?.price) *
            (orderProduct[0]?.discount
              ? (100 - parseInt(orderProduct[0]?.discount)) / 100
              : 1) *
            parseInt(orderProduct[0]?.quantity) +
          init,
      });
      return;
    } else {
      setDetailOrder({
        ...detailOrder,
        userId: user?.id,
        username: user?.username,
        email: user?.email,
        phone: user?.phone,
        addressDetail: user?.addressDetails,
        totalMoney: cartProducts?.reduce(
          (accumulator, currentValue) =>
            accumulator +
            parseInt(currentValue?.price) *
              ((100 - parseInt(currentValue?.discount)) / 100) *
              currentValue?.quantity,
          init
        ),
      });
    }
  }, [detailOrder.deliveryType, orderProduct, cartProducts, user]);
  console.log(cartProducts);
  return (
    <>
      <Navbar />
      <div className="order">
        <h2 className="title">Đăt hàng</h2>
        <div className="content-order">
          <div className="content-left">
            <form className="row g-3 needs-validation">
              <div className="col-md-12">
                <label className="form-label">Người nhận</label>
                <input
                  type="text"
                  className="form-input"
                  value={detailOrder?.username}
                  onChange={(e) => {
                    setDetailOrder({
                      ...detailOrder,
                      username: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="col-md-12">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={detailOrder?.email}
                  onChange={(e) => {
                    setDetailOrder({ ...detailOrder, email: e.target.value });
                  }}
                />
              </div>

              <div className="col-md-12">
                <label className="form-label">Điện thoại</label>
                <input
                  type="text"
                  className="form-input"
                  value={detailOrder?.phone}
                  onChange={(e) => {
                    setDetailOrder({ ...detailOrder, phone: e.target.value });
                  }}
                />
              </div>

              <div className="col-md-12">
                <label className="form-label">Địa chỉ</label>
                <input
                  type="text"
                  className="form-input"
                  value={detailOrder?.addressDetail}
                  onChange={(e) => {
                    setDetailOrder({
                      ...detailOrder,
                      addressDetail: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Tỉnh/Thành phố</label>
                <ProvinceDropdown onChange={handleProvinceChange} />
              </div>

              <div className="col-md-4">
                <label className="form-label">Quận/Huyện</label>
                <DistrictDropDwon
                  provinceCode={selectedProvinceCode}
                  onChange={handleDistrictChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Xã/Phường</label>
                <WardDropdown
                  districtCode={selectedDistrictCode}
                  onChange={handleWardChange}
                />
              </div>

              <div className="col-md-12">
                <label className="form-label">Ghi chú</label>
                <textarea
                  name="description"
                  id="description"
                  rows="6"
                  className="p-2 border w-100"
                  onChange={(e) =>
                    setDetailOrder({ ...detailOrder, note: e.target.value })
                  }
                ></textarea>
              </div>
            </form>
          </div>
          <div className="middle-content">
            <label className="form-label">Giao hàng</label>
            <div className="delivery">
              <ul>
                <li>
                  <input
                    type="radio"
                    name="selected"
                    value="65000"
                    onChange={(e) =>
                      setDetailOrder({
                        ...detailOrder,
                        deliveryType: "FAST",
                      })
                    }
                  />
                  <label>
                    Giao hàng nhanh trong ngày:
                    <span>65.000đ</span>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="selected"
                    value="45000"
                    defaultChecked
                    onChange={(e) =>
                      setDetailOrder({
                        ...detailOrder,
                        deliveryType: "STANDARD",
                      })
                    }
                  />
                  <label>
                    Giao hàng tiêu chuẩn(3-5 ngày toàn quốc):
                    <span>45.000đ</span>
                  </label>
                </li>
              </ul>
            </div>

            <label className="form-label">Thanh toán</label>
            <div className="delivery">
              <ul>
                <li>
                  <input
                    type="radio"
                    name="paied"
                    defaultChecked
                    onChange={() =>
                      setDetailOrder({
                        ...detailOrder,
                        paymentType: "COD",
                      })
                    }
                  />
                  <label>Thanh toán khi nhận hàng (COD)</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="paied"
                    onChange={() =>
                      setDetailOrder({
                        ...detailOrder,
                        paymentType: "BANK",
                      })
                    }
                  />
                  <label>Chuyển khoản ngân hàng</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-right">
            <label className="form-label">Đơn hàng của bạn</label>
            <tbody className="order-review">
              {orderProduct?.length > 0 ? (
                <tr className="cart-item">
                  <td className="product-name">
                    <div className="p-1 product-thumbnail">
                      <img
                        src={convertBase64ToImage(orderProduct[0]?.image)}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="product-desc">
                      <span>{orderProduct[0]?.productName}&nbsp;</span>
                      <strong className="product-quantity">
                        &nbsp;× {orderProduct[0]?.quantity}
                      </strong>
                      <dl className="variation-price">
                        <dt className="variation">
                          Size:{" "}
                          {orderProduct[0]?.sizeId === 1
                            ? "38"
                            : orderProduct[0]?.sizeId === 2
                            ? "39"
                            : orderProduct[0]?.sizeId === 3
                            ? "40"
                            : orderProduct[0]?.sizeId === 4
                            ? "41"
                            : orderProduct[0]?.sizeId === 5
                            ? "42"
                            : orderProduct[0]?.sizeId === 6
                            ? "43"
                            : "44"}
                        </dt>
                        <dd className="price" style={{ float: "right" }}>
                          <bdi>
                            {Math.round(
                              parseInt(orderProduct[0]?.price) *
                                parseInt(orderProduct[0]?.quantity) *
                                (orderProduct[0]?.discount
                                  ? (100 -
                                      parseInt(orderProduct[0]?.discount)) /
                                    100
                                  : 1)
                            ).toLocaleString("vi-VN")}
                            ₫
                          </bdi>
                        </dd>
                      </dl>
                    </div>
                  </td>
                </tr>
              ) : (
                cartProducts.map((item, key) => (
                  <tr className="cart-item" key={key}>
                    <td className="product-name">
                      <div className="p-1 product-thumbnail">
                        <img
                          src={convertBase64ToImage(item?.image)}
                          alt=""
                          className="w-[100%] h-[100%] object-cover"
                        />
                      </div>
                      <div className="product-desc">
                        <span>{item?.productName}&nbsp;</span>
                        <strong className="product-quantity">
                          &nbsp;× {item?.quantity}
                        </strong>
                        <dl className="variation-price">
                          <dt className="variation">Size: {item?.size}</dt>
                          <dd className="price" style={{ float: "right" }}>
                            <bdi>
                              {Math.round(
                                parseInt(item?.price) *
                                  parseInt(item?.quantity) *
                                  (item?.discount
                                    ? (100 - parseInt(item?.discount)) / 100
                                    : 1)
                              ).toLocaleString("vi-VN")}
                              ₫
                            </bdi>
                          </dd>
                        </dl>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

            <div className="order-total">
              Phí ship:{" "}
              {detailOrder?.deliveryType === "FAST" ? (
                <span>65.000đ</span>
              ) : (
                <span>45.000đ</span>
              )}
            </div>
            <div className="text-lg font-semibold order-total">
              Tổng:{" "}
              {Math.round(detailOrder?.totalMoney)?.toLocaleString("vi-VN")}₫
            </div>
            <div className="payment">
              <button
                onClick={(e) => {
                  handleCreateOrder(e);
                }}
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
