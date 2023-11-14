import React, { useEffect, useState } from "react";
import "./ManageProduct.scss";
import Nav from "./Nav";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { deleteProduct, getAllProduct } from "../../service/productService";
import { toast } from "react-toastify";
import { convertBase64ToImage } from "../../assets/data/image";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const ManageProduct = () => {
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

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          setGetProduct(getProduct.filter((product) => product.id !== id));
        } catch (e) {
          Swal.fire("Error", e, "error");
        }
      }
    });
  };
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
                      <NavLink
                        to={`/admin/edit-product/${item?.id}`}
                        className="mx-3 btn btn-primary"
                      >
                        <BiEdit />
                      </NavLink>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDeleteProduct(item?.id);
                        }}
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
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
