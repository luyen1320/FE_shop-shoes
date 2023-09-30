import React from "react";
import Nav from "./Nav";
import "./Customer.scss";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Customer = () => {
  return (
    <div className="manage-customer auto">
      <Nav />
      <div className="content-customer">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ Tên </th>
              <th>Email</th>
              <th>Phone</th>
              <th>Ngày Đặt</th>
              <th>Trạng Thái</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
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

export default Customer;
