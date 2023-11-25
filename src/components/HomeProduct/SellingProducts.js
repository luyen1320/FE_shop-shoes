import React from "react";
import "./Selling.scss";
import Slider from "react-slick";
import nike from "../../assets/images/Giay-Air-Jordan-1-Retro-Hi-Premium-GS-Camo-822858-027.jpg";
import { Link } from "react-router-dom";

var settings = {
  // dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  // initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SellingProducts = () => {
  return (
    <div className="sell-products">
      <div className="slide-product">
        <Slider {...settings}>
          <div className="list">
            <div className="list-item">
              <div className="cart-shopping">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="image">
                <Link to="">
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
          </div>

          <div className="list">
            <div className="list-item">
              <div className="cart-shopping">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="image">
                <Link to="">
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
          </div>

          <div className="list">
            <div className="list-item">
              <div className="cart-shopping">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="image">
                <Link to="">
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
          </div>

          <div className="list">
            <div className="list-item">
              <div className="cart-shopping">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="image">
                <Link to="">
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
          </div>

          <div className="list">
            <div className="list-item">
              <div className="cart-shopping">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="image">
                <Link to="">
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
          </div>

          <div className="list">
            <div className="list-item">
              <div className="cart-shopping">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="image">
                <Link to="">
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
          </div>

          <div className="list">
            <div className="list-item">
              <div className="cart-shopping">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="image">
                <Link to="">
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
          </div>

          <div className="list">
            <div className="list-item">
              <div className="cart-shopping">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="image">
                <Link to="">
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
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SellingProducts;
