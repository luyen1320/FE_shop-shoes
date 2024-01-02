import React, { useState } from "react";
import Nav from "./Nav";
import "./ManageNotification.scss";
import { Table } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { ModalNotification } from "../../components";

const ManageNotification = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="manage-notification">
      <Nav />
      <div className="content">
        {" "}
        <Table bordered hover>
          <thead>
            <tr>
              <th>Khách hàng</th>
              <th>Nội dung</th>
              <th>Ngày hủy</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>Hải</li>
                  <li>hai123@gmail.com</li>
                  <li>SĐT: 12334654754</li>
                </ul>
              </td>
              <td>
                hủy đơn hàng Giày Nike Court Royale SL Black/White 844802-010
                size: 38 slg: 1
              </td>
              <td>1/1/2024 10:30</td>
              <td>
                <button
                  className="mx-3 btn btn-primary"
                  onClick={() => setShowModal(true)}
                >
                  <BiEdit />
                </button>
                <button className="btn btn-danger">
                  <AiFillDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <ModalNotification show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default ManageNotification;
