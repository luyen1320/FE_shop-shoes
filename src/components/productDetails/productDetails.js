import React, { useEffect, useState } from "react";
import "./product.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ProductSlider from "./productSlider/productSlider";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { addToCart, getOneProduct } from "../../service/productService";
import { toast } from "react-toastify";
import { convertBase64ToImage } from "../../assets/data/image";

const ProductDetails = () => {
  const { id } = useParams();
  // const [showModal, setShowModal] = useState(false);
  const [getProduct, setGetProduct] = useState([]);
  const [listImage, setListImage] = useState([]);
  const [product, setProduct] = useState({
    userId: 8,
    productId: "",
    // productName: "",
    sizeId: null,
    // price: "",
    quantity: 0,
    // status: "PENDING",
    // total_money: 0,
    // note: "",
    // address: "",
    // email: "",
    // phone: "",
    // fullname: "",
  });

  console.log(getProduct);
  const getOnePrd = async () => {
    let res = await getOneProduct(id);
    if (res && res.errCode === 0) {
      setGetProduct(res.DT);
      setProduct({
        ...product,
        productId: parseInt(id),
        userId: 8,
        // productName: res.DT.productName,
        // price: res.DT.price,
      });
    } else {
      toast.error(res.errMessage);
    }
  };

  useEffect(() => {
    let list = [];
    list.push(convertBase64ToImage(getProduct?.image));
    getProduct?.images?.map((item) => {
      list.push(convertBase64ToImage(item));
    });
    setListImage(list);
  }, [getProduct]);

  useEffect(() => {
    getOnePrd();
  }, [id]);

  const handleAddToCart = async () => {
    if (product?.quantity <= 0) {
      toast.error("Số lượng không hợp lệ");
      return;
    }
    if (product?.sizeId === null) {
      toast.error("Vui lòng chọn size");
      return;
    }
    console.log(product);
    let res = await addToCart(product);
    if (res && res.errCode === 0) {
      toast.success("Thêm vào giỏ hàng thành công");
    } else {
      toast.error(res.errMessage);
    }
  };

  return (
    <>
      <Navbar />
      <div className="slider-product">
        <div className="product-content">
          <div className="slide-left">
            <div className="product-img">
              <ProductSlider images={listImage} />
            </div>
          </div>
          <div className="slide-right">
            <div className="product-content-right-name">
              <h2>{getProduct?.productName}</h2>
              <p>
                Còn:{" "}
                {getProduct?.inventory?.reduce((accumulator, currentValue) => {
                  return accumulator + parseInt(currentValue.quantityInStock);
                }, 0)}
              </p>
            </div>

            <div className="product-content-right-price">
              <p>
                {parseInt(getProduct?.price).toLocaleString("vi-VN")}
                <sup>đ</sup>
              </p>
            </div>

            <div className="product-content-right-size">
              <p style={{ fontWeight: "bold" }}>Size:</p>
              <div className="size">
                {getProduct?.inventory
                  ?.sort((a, b) => a.sizeId - b.sizeId)
                  ?.map((item, index) => (
                    <span
                      key={index}
                      onClick={() => {
                        setProduct({ ...product, sizeId: item?.sizeId });
                      }}
                      className={`border  ${
                        product?.sizeId === item?.sizeId
                          ? "border-black"
                          : "border-gray-400"
                      }`}
                    >
                      {item?.sizeId === 1
                        ? "38"
                        : item?.sizeId === 2
                        ? "39"
                        : item?.sizeId === 3
                        ? "40"
                        : item?.sizeId === 4
                        ? "41"
                        : item?.sizeId === 5
                        ? "42"
                        : item?.sizeId === 6
                        ? "43"
                        : "44"}
                    </span>
                  ))}
              </div>
            </div>

            <div className="quantity">
              <p style={{ fontWeight: "bold", marginBottom: "0px" }}>
                Số lượng:
              </p>
              &nbsp;
              <input
                type="number"
                onChange={(e) => {
                  setProduct({
                    ...product,
                    total_money: e.target.value * parseInt(getProduct.price),
                    quantity: e.target.value,
                  });
                }}
                name="quantity"
                className="border border-gray-400"
              />
            </div>

            <div className="product-content-right-button">
              <button
                className="btn btn-lg button-cart add-cart"
                onClick={() => {
                  handleAddToCart();
                }}
              >
                Thêm vào giỏ hàng
              </button>
              <button
                className="btn btn-lg button-cart buy-now"
                // onClick={() => {
                //   handleShowModal();
                // }}
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
