import React, { useEffect, useState } from "react";
import "./CreateProduct.scss";
import Nav from "./Nav";
import MarkDown from "../../components/markdown/MarkDown";
import { getBase64 } from "../../assets/data/image";
import Dropzone from "react-dropzone";
import { fetchSizeShoes } from "../../service/userService";
import { toast } from "react-toastify";
import _, { set, values } from "lodash";
import { createProduct } from "../../service/productService";

const CreateProduct = () => {
  const [selectItems, setSelectedItems] = useState([]);
  const [quantityInStock, setquantityInStock] = useState([]);

  const [shoeSize, setShoeSize] = useState([]);

  const [product, setProduct] = useState({
    userId: 1,
    productName: "",
    image: "",
    images: "",
    description: "",
    discount: null,
    supplier: null,
    price: "",
  });

  const handleSingleImage = async (files) => {
    const base64Image = await getBase64(files[0]);
    setProduct({ ...product, image: base64Image });
    console.log("check image: ", base64Image);
  };

  const handleMultiImages = async (files) => {
    const base64Images = await Promise.all(
      files.map((file) => getBase64(file))
    );
    setProduct({ ...product, images: base64Images });
    console.log("check images: ", base64Images);
  };

  useEffect(() => {
    getSizeShoes();
  }, []);

  const getSizeShoes = async () => {
    let res = await fetchSizeShoes();
    if (res && res.errCode === 0) {
      setShoeSize(res.DT);
    } else {
      toast.error(res.errMessage);
    }
  };

  const checkboxHandler = (e) => {
    let isSelected = e.target.checked;
    let value = parseInt(e.target.value);

    if (isSelected) {
      setSelectedItems([...selectItems, value]);
    } else {
      setSelectedItems((prevData) => {
        return prevData.filter((id) => {
          return id !== value;
        });
      });
      setquantityInStock((prevData) => {
        return prevData.filter((item) => {
          return item.sizeId !== value;
        });
      });
    }
  };

  const handleOnchangeProduct = (value, name) => {
    let _dataProduct = _.cloneDeep(product);
    _dataProduct[name] = value;
    setProduct(_dataProduct);
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    // const productData = { productName, price, description, size };
    // const productData = {}
    let productData = { ...product, inventory: quantityInStock };

    try {
      const res = await createProduct(productData);
      console.log(res);
      if (res && res.errCode === 0) {
        toast.success("Tạo sản phẩm thành công");
      } else {
        toast.error(res.errMessage);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error("Tạo sản phẩm thất bại");
    }
    // console.log("check data: ", productData);
  };

  return (
    <div className="create-product auto">
      <Nav />
      <div className="add-product p-4">
        <form className="row g-3 needs-validation">
          <div className="col-md-12">
            <label className="form-label" style={{ color: "black" }}>
              Tên sản phẩm
            </label>
            <input
              type="text"
              className="form-input"
              value={product.productName}
              onChange={(e) =>
                handleOnchangeProduct(e.target.value, "productName")
              }
            />
          </div>

          <div className="col-md-4">
            <label className="form-label" style={{ color: "black" }}>
              Giá
            </label>
            <input
              type="text"
              className="form-input"
              value={product.price}
              onChange={(e) => handleOnchangeProduct(e.target.value, "price")}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label" style={{ color: "black" }}>
              Giảm giá (%)
            </label>
            <input
              type="text"
              className="form-input"
              value={product.discount}
              onChange={(e) =>
                handleOnchangeProduct(e.target.value, "discount")
              }
            />
          </div>
          <div className="col-md-4">
            <label className="form-label" style={{ color: "black" }}>
              Nhà cung cấp
            </label>
            <select
              className="form-select"
              onChange={(e) =>
                handleOnchangeProduct(e.target.value, "supplier")
              }
            >
              <option>--- chọn ---</option>
              <option>Nike</option>
              <option>Adidas</option>
              <option>Jordan</option>
              <option>bitis hunter</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label" style={{ color: "black" }}>
              Mô tả
            </label>
            <textarea
              name="description"
              id="description"
              rows="6"
              className="w-100 p-2"
              onChange={(e) =>
                handleOnchangeProduct(e.target.value, "description")
              }
            ></textarea>
          </div>

          <div className="col-md-6">
            <label className="form-label" style={{ color: "black" }}>
              Size và số lượng
            </label>
            <div className="size-shoes" style={{ color: "black" }}>
              {shoeSize.map((item, index) => {
                return (
                  <div className="check-size" key={index}>
                    <input
                      type="checkbox"
                      checked={selectItems.includes(item.id)}
                      value={item.id}
                      onChange={checkboxHandler}
                    />
                    Size {item.sizeShoes}:
                    <input
                      type="number"
                      onChange={(e) => {
                        setquantityInStock((prevQuantityInStock) => {
                          const existingItemIndex =
                            prevQuantityInStock.findIndex(
                              (itemInStock) => itemInStock.sizeId === item.id
                            );

                          if (existingItemIndex !== -1) {
                            // Nếu item.id đã tồn tại trong mảng, cập nhật giá trị
                            prevQuantityInStock[
                              existingItemIndex
                            ].quantityInStock = e.target.value;
                            return [...prevQuantityInStock]; // Trả về mảng hiện tại
                          } else {
                            // Nếu item.id chưa tồn tại trong mảng, thêm một phần tử mới
                            return [
                              ...prevQuantityInStock,
                              {
                                sizeId: item.id,
                                quantityInStock: e.target.value,
                              },
                            ];
                          }
                        });
                      }}
                      disabled={!selectItems.includes(item.id)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label" style={{ color: "black" }}>
              Ảnh <i className="fas fa-upload"></i>
            </label>
            <Dropzone
              onDrop={handleSingleImage}
              accept={{
                images: ["image/png", "image/gif", "image/jpeg"],
              }}
              maxFiles={1}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="signle-image">
                  <input {...getInputProps()} />
                  {product?.image ? (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                      src={product?.image}
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                      alt="Selected Image"
                      value={product.singleImage}
                      onChange={(e) =>
                        handleOnchangeProduct(e.target.value, "singleImage")
                      }
                    />
                  ) : (
                    <p>Kéo và thả ảnh hoặc click để chọn ảnh</p>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
          <div className="col-md-6">
            <label className="form-label" style={{ color: "black" }}>
              Tải ảnh của sản phẩm <i className="fas fa-upload"></i>
            </label>

            <Dropzone
              onDrop={handleMultiImages}
              accept={{
                images: ["image/png", "image/gif", "image/jpeg"],
              }}
              multiple
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="multiple-image">
                  <input {...getInputProps()} />
                  {product?.images.length > 0 ? (
                    product?.images.map((base64Image) => (
                      // eslint-disable-next-line jsx-a11y/img-redundant-alt
                      <img
                        key={base64Image}
                        src={base64Image}
                        alt="Selected Image"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                          margin: "6px",
                        }}
                        value={product.multipleImage}
                        onChange={(e) =>
                          handleOnchangeProduct(e.target.value, "multipleImage")
                        }
                      />
                    ))
                  ) : (
                    <p>Kéo và thả ảnh hoặc click để chọn ảnh</p>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={(e) => handleSubmitProduct(e)}
            >
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
