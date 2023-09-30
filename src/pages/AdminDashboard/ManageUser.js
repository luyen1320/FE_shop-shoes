import React from "react";
import Nav from "./Nav";
import "./ManageUser.scss";
import { Button, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit, BiMenuAltLeft } from "react-icons/bi";

const ManageUser = () => {
  return (
    <div className="manage-user auto">
      <Nav />
      <div className="content-user">
        <div className="title-user">
          <div className="add-user">
            <Button>
              <i className="fa-solid fa-circle-plus"></i> Tạo tài khoản
            </Button>
          </div>
          <div className="filter-user" style={{ color: "black" }}>
            Lọc
            <BiMenuAltLeft />
          </div>
        </div>
        <Table bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ Tên </th>
              <th>Email</th>
              <th>Phone</th>
              <th>Chức vụ</th>
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
              <td>Quản lý</td>
              <td>Online</td>
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
      </div>
    </div>
  );
};

export default ManageUser;
