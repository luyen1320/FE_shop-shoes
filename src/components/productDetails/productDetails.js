import React, { useState } from "react";
import "./product.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ProductSlider from "./productSlider/productSlider";
import { productImages } from "../../assets/data/slider";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Review from "./Tabs/Review";
import ReviewComments from "./Tabs/ReviewComments";

const ProductDetails = () => {
  const [active, setActive] = useState(1);

  const handleToggleClick = (id) => {
    setActive(id);
  };
  return (
    <>
      <Navbar />
      <div className="slider-product">
        <div className="product-content">
          <div className="slide-left">
            <div className="product-img">
              <ProductSlider images={productImages} />
            </div>
          </div>
          <div className="slide-right">
            <div className="product-content-right-name">
              <h2>
                Giày Nike Air Jordan 1 Retro High OG GS ‘Chicago Lost & Found’
                FD1437-612
              </h2>
              <p>Mã: FD1437-612</p>
            </div>

            <div className="product-content-right-price">
              <p>
                1.200.000<sup>đ</sup>
              </p>
            </div>

            <div className="product-content-right-size">
              <p style={{ fontWeight: "bold" }}>Size:</p>
              <div className="size">
                <span>36</span>
                <span>37</span>
                <span>38</span>
                <span>39</span>
                <span>40</span>
                <span>41</span>
                <span>42</span>
              </div>
            </div>

            <div className="quantity">
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Số lượng:
              </p>
              &nbsp;
              <input type="number" />
            </div>

            <div className="product-content-right-button">
              <button className="btn btn-lg button-cart add-cart">
                Thêm vào giỏ hàng
              </button>
              <button className="btn btn-lg button-cart buy-now">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="desc col-12">
        <ul className="tabs">
          <li onClick={() => handleToggleClick(1)}>Description</li>
          <li onClick={() => handleToggleClick(2)}>Đánh giá</li>
        </ul>
      </div>

      <div className="content">
        <div
          className={
            active === 1 ? "content-desc content-active" : "content-none"
          }
        >
          Phiên bản năm 2023 của Air Jordan 11 Retro ‘Gratitude / Defining
          Moments’, còn được gọi là ‘DMP’, mang lại một cách phối màu đáng thèm
          muốn của mẫu cũ, ban đầu được kết hợp với Air Jordan 6 như một nửa của
          ‘Gói khoảnh khắc xác định’ ‘ từ năm 2006. Lấy cảm hứng từ phối màu OG
          ‘Concord’, hình dáng của giải vô địch có phần trên bằng da lộn màu
          trắng với các lỗ dây vải cùng màu và tấm chắn bùn bằng da sáng chế màu
          đen. Các điểm nhấn màu vàng kim loại xuất hiện trên các yếu tố thương
          hiệu của giày, bao gồm logo Jumpman được dập nổi ở mắt cá chân bên và
          con số ’23’ được đóng dấu trên tab gót chân. Giày thể thao chạy trên
          đế giữa Phylon, được hỗ trợ bởi tấm đế bằng sợi carbon và đế ngoài
          bằng cao su mờ.
        </div>

        <div
          className={
            active === 2 ? "content-review content-active" : "content-none"
          }
        >
          <Review />
          <ReviewComments />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
