import React, { useEffect, useState } from "react";
import "./HomeProduct.scss";
import shoe1 from "../../assets/images/nike02.jpeg";
import nike from "../../assets/images/Giay-Air-Jordan-1-Retro-Hi-Premium-GS-Camo-822858-027.jpg";
import { Link } from "react-router-dom";
import { getAllProduct } from "../../service/productService";
import { toast } from "react-toastify";
import { convertBase64ToImage } from "../../assets/data/image";
import logoSGV from "../../assets/images/next-link.svg";
import ItemProductCart from "../card/ItemProductCart";
import SellingProducts from "./SellingProducts";

function HomeProduct(props) {
  const [getProductByNike, setGetProductByNike] = useState([]);
  const [getProductByAdidas, setGetProductByAdidas] = useState([]);
  const getAllProductsByNike = async () => {
    let res = await getAllProduct(1, 8, "nike");
    if (res && res.errCode === 0) {
      setGetProductByNike(res?.DT?.suppliers);
    } else {
      toast.error(res.errMessage);
    }
  };
  const getAllProductsByAdidas = async () => {
    let res = await getAllProduct(1, 8, "adidas");
    if (res && res.errCode === 0) {
      setGetProductByAdidas(res?.DT?.suppliers);
    } else {
      toast.error(res.errMessage);
    }
  };

  useEffect(() => {
    getAllProductsByNike();
    getAllProductsByAdidas();
  }, []);
  return (
    <div className="product">
      <h2>SẢN PHẨM BÁN CHẠY</h2>
      {/* <div className="list">
        {getProduct?.length > 0 &&
          getProduct?.map((item, index) => {
            return <ItemProductCart item={item} key={index}></ItemProductCart>;
          })}
      </div>

      <div className="flex items-center justify-center next-category">
        <Link className="flex items-center justify-center">
          <span className="text-center ">Xem thêm giầy...&nbsp;</span>
          <img src={logoSGV} alt="" height={20} width={20} />
        </Link>
      </div> */}
      <SellingProducts />

      <h2 className="uppercase">GIẦY Nike</h2>
      <div className="list">
        {getProductByNike?.length > 0 &&
          getProductByNike?.map((item, index) => {
            return <ItemProductCart item={item} key={index}></ItemProductCart>;
          })}
      </div>

      <div className="flex items-center justify-center next-category">
        <Link
          to={"/product-page/nike"}
          className="flex items-center justify-center"
        >
          <span className="text-center ">Xem thêm giầy...&nbsp;</span>
          <img src={logoSGV} alt="" height={20} width={20} />
        </Link>
      </div>

      <h2>GIẦY ADIDAS</h2>
      <div className="list">
        {getProductByAdidas?.length > 0 &&
          getProductByAdidas?.map((item, index) => {
            return <ItemProductCart item={item} key={index}></ItemProductCart>;
          })}
      </div>

      <div className="flex items-center justify-center mb-3 next-category">
        <Link
          to={"/product-page/adidas"}
          className="flex items-center justify-center"
        >
          <span className="text-center ">Xem thêm giầy...&nbsp;</span>
          <img src={logoSGV} alt="" height={20} width={20} />
        </Link>
      </div>
    </div>
  );
}

export default HomeProduct;
