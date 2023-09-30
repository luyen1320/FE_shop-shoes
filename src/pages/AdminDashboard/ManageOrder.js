import React, { useState } from "react";
import Nav from "./Nav";
import "./ManageOrder.scss";
import { Table } from "react-bootstrap";
import { FaMoneyBillAlt } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { BiEdit, BiMenuAltLeft } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { ModalOrder } from "../../components";

const ManageOrder = () => {
  const [isShowModalOrder, setIsShowModalOrder] = useState(false);

  const handleEditOrder = () => {
    setIsShowModalOrder(true);
  };

  const handleClose = () => {
    setIsShowModalOrder(false);
  };

  const handleClick = () => {
    alert("Mã đơn hàng");
  };
  return (
    <div className="manage-order">
      <Nav />
      <div className="main-order">
        <div className="main-card">
          <div className="card">
            <div className="card-inner">
              <h3>Tổng doanh thu</h3>
              <FaMoneyBillAlt className="card_icon" />
            </div>
            <h1>20.000.000đ</h1>
          </div>

          <div className="card">
            <div className="card-inner">
              <h3>Tổng doanh thu</h3>
              <FaMoneyBillAlt className="card_icon" />
            </div>
            <h1>20.000.000đ</h1>
          </div>
        </div>
        <div className="content-order">
          <div className="title-order">
            <h3>Đơn hàng đang xử lý</h3>
            <div className="filter-order">
              Lọc
              <BiMenuAltLeft />
            </div>
          </div>

          <Table bordered hover>
            <thead>
              <tr>
                <th>Mã</th>
                <th>Khách hàng</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Ngày Đặt</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="code-order">
                  <button onClick={handleClick}>#M1</button>
                </td>
                <td>Đinh Ngọc Luyện</td>
                <td>luyendinh1320@gmail.com</td>
                <td>0336909524</td>
                <td>9/4/2023</td>
                <td>Chờ xử lý</td>
                <td>
                  <button
                    className="btn btn-primary mx-3"
                    onClick={() => handleEditOrder()}
                  >
                    <BiEdit />
                  </button>
                  <button className="btn btn-danger">
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
              <tr>
                <td>#M214542</td>
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
                <td>#M214542</td>
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
                <td>#M214542</td>
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
                <td>#M214542</td>
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
        <ModalOrder show={isShowModalOrder} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default ManageOrder;
