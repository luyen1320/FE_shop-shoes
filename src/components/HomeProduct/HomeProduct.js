import React from "react";
import "./HomeProduct.scss";
import shoe1 from "../../assets/images/nike02.jpeg";
import nike from "../../assets/images/Giay-Air-Jordan-1-Retro-Hi-Premium-GS-Camo-822858-027.jpg";
import { Link } from "react-router-dom";
import logoSGV from "../../assets/images/next-link.svg";
import SellingProducts from "./SellingProducts";

function HomeProduct(props) {
  return (
    <div className="product">
      <h2>SẢN PHẨM BÁN CHẠY</h2>
      <SellingProducts />

      <h2>GIẦY NIKE</h2>
      <div className="list">
        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <Link to="/jordan">
              <img src={shoe1} alt="" />
            </Link>
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>
      </div>

      <div className="next-category">
        <Link>
          Xem thêm giầy...&nbsp;
          <span className="animated">
            <img src={logoSGV} alt="" height={20} width={20} />
          </span>
        </Link>
      </div>

      <h2>GIẦY ADIDAS</h2>
      <div className="list">
        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <Link to="/jordan">
              <img src={nike} alt="" />
            </Link>
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>

        <div className="list-item">
          <div className="cart-shopping">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="image">
            <img src={shoe1} alt="" />
          </div>
          <div className="list-desc">
            <p>
              Giày Nike Off-White x Air Jordan 1 Retro High OG 'Chicago' //
              AA3834-101
            </p>
          </div>
          <div className="price">
            {/* <p>
              <del>1.200.000đ</del> - 1.000.000₫
            </p> */}
            <div>
              <span className="price-new">1.000.000₫</span>
              <span className="price-old">1.200.000₫</span>
            </div>
          </div>
        </div>
      </div>

      <div className="next-category">
        <Link>
          Xem thêm giầy...&nbsp;
          <span className="animated">
            <img src={logoSGV} alt="" height={20} width={20} />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default HomeProduct;
