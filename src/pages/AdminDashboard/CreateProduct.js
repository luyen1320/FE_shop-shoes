import React, { useEffect, useState } from "react";
import "./CreateProduct.scss";
import Nav from "./Nav";
import MarkDown from "../../components/markdown/MarkDown";
import { getBase64 } from "../../assets/data/image";
import Dropzone from "react-dropzone";
import { fetchSizeShoes } from "../../service/userService";
import { toast } from "react-toastify";
import _, { values } from "lodash";

const CreateProduct = () => {
  // const [productName, setProductName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [description, setDescription] = useState("");
  // const [size, setSize] = useState("");
  // const [discount, setDiscount] = useState(0);
  // const [image, setImage] = useState();

  const [singleImagePreview, setSingleImagePreview] = useState(null);
  const [multiImagesPreview, setMultiImagesPreview] = useState([]);
  const [selectItems, setSelectedItems] = useState([]);

  const [shoeSize, setShoeSize] = useState([]);

  const defaultDataProduct = {
    nameProduct: "",
    singleImage: "",
    multipleImage: "",
    description: "",
    price: null,
    discount: null,
    supplier: "",
  };

  const [product, setProduct] = useState(defaultDataProduct);

  const handleSingleImage = async (files) => {
    const base64Image = await getBase64(files[0]);
    setSingleImagePreview(base64Image);
    console.log("check image: ", base64Image);
  };

  const handleMultiImages = async (files) => {
    const base64Images = await Promise.all(
      files.map((file) => getBase64(file))
    );
    setMultiImagesPreview(base64Images);
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
    }
  };

  const handleOnchangeProduct = (value, name) => {
    let _dataProduct = _.cloneDeep(product);
    _dataProduct[name] = value;
    setProduct(_dataProduct);
  };

  const handleSubmitProduct = (e) => {
    // const productData = { productName, price, description, size };
    // const productData = {}
    // console.log("check data: ", productData);
    console.log(e);
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
              value={product.nameProduct}
              onChange={(e) =>
                handleOnchangeProduct(e.target.value, "nameProduct")
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
            <select className="form-select">
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
            {/* <MarkDown /> */}
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
                    <input type="number" />
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
                  {singleImagePreview ? (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                      src={singleImagePreview}
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
                  {multiImagesPreview.length > 0 ? (
                    multiImagesPreview.map((base64Image) => (
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
              onClick={() => handleSubmitProduct()}
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
