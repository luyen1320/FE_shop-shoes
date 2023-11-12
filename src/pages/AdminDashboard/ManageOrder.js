import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./ManageOrder.scss";
import { Table } from "react-bootstrap";
import { FaMoneyBillAlt } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { BiEdit, BiMenuAltLeft } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { ModalOrder } from "../../components";
import { getAllOrder } from "../../service/productService";
import { toast } from "react-toastify";

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

  const [getOrders, setGetOrders] = useState([]);
  const getAllOrders = async () => {
    let res = await getAllOrder();
    if (res && res.errCode === 0) {
      setGetOrders(res.DT);
    } else {
      toast.error(res.errMessage);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);
  console.log(getOrders);
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
              {getOrders?.length > 0 &&
                getOrders?.map((item, index) => (
                  <tr key={index}>
                    <td className="code-order">
                      <button onClick={handleClick}>#{item?.id}</button>
                    </td>
                    <td>{item?.username}</td>
                    <td>{item?.email}</td>
                    <td>{item?.phone}</td>
                    <td>9/4/2023</td>
                    <td>
                      <select
                        name="status"
                        id="status"
                        className="w-full h-[100%] border-none outline-none"
                        value={item?.status}
                      >
                        <option value="CONFIRM">Chờ xử lý</option>
                        <option value="PENDING">Xác nhận</option>
                        <option value="SUCCESS">Đã giao</option>
                      </select>
                    </td>
                    <td>
                      <button
                        className="mx-3 btn btn-primary"
                        onClick={() => handleEditOrder()}
                      >
                        <BiEdit />
                      </button>
                      <button className="btn btn-danger">
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                ))}
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
