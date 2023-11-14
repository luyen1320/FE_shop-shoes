import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Order.scss";
import ProvinceDropdown from "../modal/Provinces/Provinces";
import DistrictDropDwon from "../modal/Provinces/District";
import WardDropdown from "../modal/Provinces/Ward";
import nike from "./../../assets/images/Giay-Air-Jordan-1-Retro-Hi-Premium-GS-Camo-822858-027.jpg";
import nike01 from "./../../assets/images/Giay-Air-Jordan-11-Retro-Gratitude-Defining-Moments-CT8012-170.jpg";

const Order = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selected, setSelected] = useState();
  const [paied, setPaied] = useState();

  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    setSelectedProvince(selectedProvince);
    console.log("Selected provinces:", selectedProvince);
  };

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    setSelectedDistrict(selectedDistrict);
    console.log("Selected district:", selectedDistrict);
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
                <input type="text" className="form-input" />
              </div>

              <div className="col-md-12">
                <label className="form-label">Email</label>
                <input type="text" className="form-input" />
              </div>

              <div className="col-md-12">
                <label className="form-label">Điện thoại</label>
                <input type="text" className="form-input" />
              </div>

              <div className="col-md-12">
                <label className="form-label">Địa chỉ</label>
                <input type="text" className="form-input" />
              </div>

              <div className="col-md-4">
                <label className="form-label">Tỉnh/Thành phố</label>
                <ProvinceDropdown onChange={handleProvinceChange} />
              </div>

              <div className="col-md-4">
                <label className="form-label">Quận/Huyện</label>
                <DistrictDropDwon
                  provinceCode={selectedProvince}
                  onChange={handleDistrictChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Xã/Phường</label>
                <WardDropdown districtCode={selectedDistrict} />
              </div>

              <div className="col-md-12">
                <label className="form-label">Ghi chú</label>
                <textarea
                  name="description"
                  id="description"
                  rows="6"
                  className="w-100 p-2"
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
                    onChange={(e) => setSelected(e.target.value)}
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
                    onChange={(e) => setSelected(e.target.value)}
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
                    onChange={(e) => setPaied(e.target.value)}
                  />
                  <label>Thanh toán khi nhận hàng (COD)</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="paied"
                    onChange={(e) => setPaied(e.target.value)}
                  />
                  <label>Chuyển khoản ngân hàng</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-right">
            <label className="form-label">Đơn hàng của bạn</label>
            <tbody className="order-review">
              <tr className="cart-item">
                <td className="product-name">
                  <div className="product-thumbnail">
                    <img src={nike} alt="" width={50} height={50} />
                  </div>
                  <div className="product-desc">
                    <span>
                      Giày Air Jordan 1 Retro Hi Premium GS 'Camo'
                      822858-027&nbsp;
                    </span>
                    <strong className="product-quantity">&nbsp;× 1</strong>
                    <dl className="variation-price">
                      <dt className="variation">Size: 40</dt>
                      <dd className="price" style={{ float: "right" }}>
                        <bdi>4.990.000₫</bdi>
                      </dd>
                    </dl>
                  </div>
                </td>
              </tr>
              {/* <tr className="cart-item">
                <td className="product-name">
                  <div className="product-thumbnail">
                    <img src={nike01} alt="" width={50} height={50} />
                  </div>
                  <div className="product-desc">
                    <span>
                      Giày Air Jordan 11 Retro 'Gratitude / Defining Moments'
                      CT8012-170&nbsp;
                    </span>
                    <strong className="product-quantity">&nbsp;× 1</strong>
                    <dl className="variation-price">
                      <dt className="variation">Size: 40</dt>
                      <dd className="price" style={{ float: "right" }}>
                        <bdi>7.490.000₫</bdi>
                      </dd>
                    </dl>
                  </div>
                </td>
              </tr> */}
            </tbody>

            <div className="order-total">Tổng: 12.480.000₫</div>
            <div className="payment">
              <button>Thanh toán</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
