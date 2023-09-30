import React from "react";
import "./ManageProduct.scss";
import Nav from "./Nav";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const ManageProduct = () => {
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
            <tr>
              <td>1</td>
              <td>Nike</td>
              <td>nike one 12</td>
              <td>1.200.000đ</td>
              <td>40</td>
              <td>1</td>
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
