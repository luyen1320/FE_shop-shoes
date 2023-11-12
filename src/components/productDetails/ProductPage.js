import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./ProductPage.scss";
import { Link } from "react-router-dom";
import shoe1 from "../../assets/images/nike02.jpeg";
import ReactPaginate from "react-paginate";
import Footer from "../footer/Footer";
import Input from "../../assets/Input";
import { Swiper, SwiperSlide } from "swiper/react";
import shoe01 from "../../assets/images/sieu-sale-4.4-cata-1140x500.png";
import shoe02 from "../../assets/images/banner02.jpg";
import shoe03 from "../../assets/images/banner03.jpg";
import shoe04 from "../../assets/images/banner04.jpg";
import Checkbox from "../../assets/Checkbox";
import { getAllProduct } from "../../service/productService";
import { toast } from "react-toastify";
import { convertBase64ToImage } from "../../assets/data/image";

const ProductPage = () => {
  const [getProduct, setGetProduct] = useState([]);
  const getAllProducts = async () => {
    let res = await getAllProduct();
    if (res && res.errCode === 0) {
      setGetProduct(res.DT);
    } else {
      toast.error(res.errMessage);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  console.log(getProduct);
  return (
    <>
      <Navbar />
      <div div className="product-page">
        <div className="page">
          <div className="page-left">
            <div className="category">
              <h4>THƯƠNG HIỆU</h4>
              <ul>
                <li>Converse</li>
                <li>Nike</li>
                <li>Sneakers</li>
                <li>Adidas</li>
                <li>Jordan</li>
                <li>Vans</li>
              </ul>
            </div>
            <div className="price">
              <h4>GIÁ</h4>
              <ul>
                <Input value={500} title="500.000₫" name="price" />
                <Input
                  value={1000}
                  title="500.000₫ - 1.000.000₫"
                  name="price"
                />
                <Input
                  value={2000}
                  title="1.000.000₫ - 2.000.000₫"
                  name="price"
                />
                <Input
                  value={3000}
                  title="2.000.000₫ - 3.000.000₫"
                  name="price"
                />
                <Input
                  value={4000}
                  title="3.000.000₫ - 4.000.000₫"
                  name="price"
                />
              </ul>
            </div>
            <div className="size">
              <h4>SIZE</h4>
              <ul>
                <li>
                  <input type="checkbox" />
                  38
                </li>
                <li>
                  <input type="checkbox" />
                  39
                </li>
                <li>
                  <input type="checkbox" />
                  40
                </li>
                <li>
                  <input type="checkbox" />
                  41
                </li>
              </ul>
            </div>
          </div>
          <div className="page-right">
            <div className="banner">
              <Swiper>
                <SwiperSlide>
                  <img src={shoe01} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={shoe02} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={shoe03} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={shoe04} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="product-list">
              {getProduct?.length > 0 &&
                getProduct?.map((item, index) => {
                  return (
                    <div className="list-item" key={index}>
                      <div className="image">
                        <Link to={`/product-details/${item?.id}`}>
                          <img
                            src={convertBase64ToImage(item?.image)}
                            alt=""
                            className="aspect-[14/15]"
                          />
                        </Link>
                      </div>
                      <div className="list-desc">
                        <p>{item.productName}</p>
                      </div>
                      <div className="price">
                        <div>
                          <span className="price-new">
                            {parseInt(item?.price).toLocaleString("vi-VN")}đ
                          </span>
                          <span className="price-old">
                            {(parseInt(item?.price) * 1.2).toLocaleString(
                              "vi-VN"
                            )}
                            đ
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
