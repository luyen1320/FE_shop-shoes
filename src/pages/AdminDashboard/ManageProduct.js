import React, { useEffect, useState } from "react";
import "./ManageProduct.scss";
import Nav from "./Nav";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { getAllProduct } from "../../service/productService";
import { toast } from "react-toastify";
import { convertBase64ToImage } from "../../assets/data/image";

const ManageProduct = () => {
  const [getProduct, setGetProduct] = useState([]);
  const getSizeShoes = async () => {
    let res = await getAllProduct();
    if (res && res.errCode === 0) {
      setGetProduct(res.DT);
    } else {
      toast.error(res.errMessage);
    }
  };

  useEffect(() => {
    getSizeShoes();
  }, []);
  console.log(getProduct);
  return (
    <div className="manage-product auto">
      <Nav />
      <div className="content-product">
        <Table bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên </th>
              <th>Ảnh</th>
              <th>Giá</th>
              <th>Giảm giá(%)</th>
              <th>Số lượng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {getProduct?.length > 0 &&
              getProduct?.map((item, index) => {
                return (
                  <tr key={item?.id}>
                    <td>{item?.id}</td>
                    <td>{item?.productName}</td>
                    <td>
                      <img
                        src={convertBase64ToImage(item?.image)}
                        alt=""
                        style={{
                          height: "100px",
                          width: "150px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{item?.price}đ</td>
                    <td>{item?.discount}</td>
                    <td>
                      {item?.inventories?.reduce(
                        (accumulator, currentValue) => {
                          return (
                            accumulator + parseInt(currentValue.quantityInStock)
                          );
                        },
                        0
                      )}
                    </td>
                    <td>
                      <button className="btn btn-primary mx-3">
                        <BiEdit />
                      </button>
                      <button className="btn btn-danger">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            {/* <tr>
              <td>1</td>
              <td>Đinh Ngọc Luyện</td>
              <td>luyendinh1320@gmail.com</td>
              <td>0336909524</td>
              <td>9/4/2023</td>
              <td>Xác nhận</td>
              <td>
                <button className="btn btn-primary mx-3">
                  <BiEdit />
                </button>
                <button className="btn btn-danger">
                  <AiFillDelete />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Đinh Ngọc Luyện</td>
              <td>luyendinh1320@gmail.com</td>
              <td>0336909524</td>
              <td>9/4/2023</td>
              <td>Xác nhận</td>
              <td>
                <button className="btn btn-primary mx-3">
                  <BiEdit />
                </button>
                <button className="btn btn-danger">
                  <AiFillDelete />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Đinh Ngọc Luyện</td>
              <td>luyendinh1320@gmail.com</td>
              <td>0336909524</td>
              <td>9/4/2023</td>
              <td>Xác nhận</td>
              <td>
                <button className="btn btn-primary mx-3">
                  <BiEdit />
                </button>
                <button className="btn btn-danger">
                  <AiFillDelete />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Đinh Ngọc Luyện</td>
              <td>luyendinh1320@gmail.com</td>
              <td>0336909524</td>
              <td>9/4/2023</td>
              <td>Xác nhận</td>
              <td>
                <button className="btn btn-primary mx-3">
                  <BiEdit />
                </button>
                <button className="btn btn-danger">
                  <AiFillDelete />
                </button>
              </td>
            </tr> */}
          </tbody>
        </Table>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          // onPageChange={handlePageClick}
          pageRangeDisplayed={5}
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
  );
};

export default ManageProduct;
