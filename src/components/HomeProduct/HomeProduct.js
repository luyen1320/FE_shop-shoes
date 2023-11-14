import React, { useEffect, useState } from "react";
import "./HomeProduct.scss";
import shoe1 from "../../assets/images/nike02.jpeg";
import { Link } from "react-router-dom";
import { getAllProduct } from "../../service/productService";
import { toast } from "react-toastify";
import { convertBase64ToImage } from "../../assets/data/image";

function HomeProduct(props) {
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
  return (
    <div className="product">
      <h2>Sản phẩm</h2>
      <div className="list">
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
                  {item?.discount > 0 ? (
                    <div>
                      <span className="price-new">
                        {(
                          parseInt(item?.price) *
                          ((100 - parseInt(item?.discount)) / 100)
                        ).toLocaleString("vi-VN")}
                        đ
                      </span>
                      <span className="price-old">
                        {parseInt(item?.price).toLocaleString("vi-VN")}đ
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="price-new">
                        {parseInt(item?.price).toLocaleString("vi-VN")}đ
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HomeProduct;
