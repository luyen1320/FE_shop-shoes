import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Order.scss";
import ProvinceDropdown from "../modal/Provinces/Provinces";
import DistrictDropDwon from "../modal/Provinces/District";
import WardDropdown from "../modal/Provinces/Ward";
import nike from "./../../assets/images/Giay-Air-Jordan-1-Retro-Hi-Premium-GS-Camo-822858-027.jpg";
import nike01 from "./../../assets/images/Giay-Air-Jordan-11-Retro-Gratitude-Defining-Moments-CT8012-170.jpg";
import { convertBase64ToImage } from "../../assets/data/image";
import { createOrder } from "../../service/productService";
import { toast } from "react-toastify";

const Order = () => {
  const [selectedProvinceCode, setSelectedProvinceCode] = useState("");
  const [selectedDistrictCode, setSelectedDistrictCode] = useState("");
  const [storedValue, setStoredValue] = useState([]);
  const [detailOrder, setDetailOrder] = useState({
    username: "",
    email: "",
    phone: "",
    addressDetail: "",
    note: "",
    totalMoney: "",
    userId: "",
    paymentType: "",
    deliveryType: "",
    province: "",
    district: "",
    ward: "",
  });
  useEffect(() => {
    const dataStorage = JSON.parse(sessionStorage.getItem("chooseProduct"));

    setStoredValue(dataStorage);
    if (dataStorage?.length === 0) {
      window.location.href = "/";
    }
  }, []);
  useEffect(() => {
    const init = detailOrder?.deliveryType === "FAST" ? 65000 : 45000;
    setDetailOrder({
      ...detailOrder,
      totalMoney: storedValue?.reduce(
        (accumulator, currentValue) =>
          accumulator + parseInt(currentValue?.price) * currentValue?.quantity,
        init
      ),
    });
  }, [detailOrder.deliveryType]);
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
    console.log(detailOrder);
    try {
      let res = await createOrder({
        ...detailOrder,
        listProduct: storedValue,
      });
      if (res && res.errCode === 0) {
        toast.success("Đặt hàng thành công");
        // history.push("/cart");
      } else {
        toast.error(res.errMessage);
      }
    } catch (e) {
      toast.error(e.errMessage);
      console.log(e);
    }
  };

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
                  type="text"
                  className="form-input"
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
              {storedValue?.length > 0 &&
                storedValue.map((item, key) => (
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
                              {(
                                parseInt(item?.price) * parseInt(item?.quantity)
                              ).toLocaleString()}
                              ₫
                            </bdi>
                          </dd>
                        </dl>
                      </div>
                    </td>
                  </tr>
                ))}
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
              {detailOrder?.deliveryType === "FAST" ? (
                <span>
                  {storedValue
                    ?.reduce(
                      (accumulator, currentValue) =>
                        accumulator +
                        parseInt(currentValue?.price) *
                          parseInt(currentValue?.quantity),
                      65000
                    )
                    .toLocaleString()}
                </span>
              ) : (
                <span>
                  {storedValue
                    ?.reduce(
                      (accumulator, currentValue) =>
                        accumulator +
                        parseInt(currentValue?.price) *
                          parseInt(currentValue?.quantity),
                      45000
                    )
                    .toLocaleString()}
                </span>
              )}
              ₫
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
