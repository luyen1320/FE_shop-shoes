import React from "react";
import Navbar from "../navbar/Navbar";
import "./Sale.scss";
import { Link } from "react-router-dom";
import shoe1 from "../../assets/images/nike02.jpeg";
import nike from "../../assets/images/Giay-Air-Jordan-1-Retro-Hi-Premium-GS-Camo-822858-027.jpg";
import Footer from "../footer/Footer";
import ReactPaginate from "react-paginate";

const SaleProduct = () => {
  return (
    <>
      <Navbar />
      <div className="sale-product">
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
        <div className="paginate">
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            // onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={4}
            // pageCount={totalPages}
            previousLabel="< "
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SaleProduct;
