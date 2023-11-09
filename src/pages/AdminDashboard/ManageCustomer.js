import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./ManageUser.scss";
import { Button, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit, BiMenuAltLeft } from "react-icons/bi";
import { toast } from "react-toastify";
import {
  createCustomer,
  deleteUser,
  editCustomer,
  getCustomer,
  getOneCustomer,
} from "../../service/userService";
import Swal from "sweetalert2";

const ManageCustomer = () => {
  const [edit, setEdit] = useState(false); // [1
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    id: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    roleId: "STAFF",
  });

  const [getAllCustomer, setGetAllCustomer] = useState([]);
  const getAllCustomers = async () => {
    let res = await getCustomer();
    if (res && res.errCode === 0) {
      setGetAllCustomer(res.DT);
    } else {
      toast.error(res.errMessage);
    }
  };

  useEffect(() => {
    getAllCustomers();
  }, [show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value.trim() });
  };

  const getOneStaff = async (id) => {
    let res = await getOneCustomer(id);
    if (res && res.errCode === 0) {
      setValues(res.DT);
    } else {
      toast.error(res.errMessage);
    }
  };
  console.log(values);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = !edit
        ? await createCustomer(values)
        : await editCustomer(values);
      console.log(res);
      if (res && res.errCode === 0) {
        toast.success("Thành công");
      } else {
        toast.error(res.errMessage);
      }
      setShow(false);
      setValues({
        username: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        roleId: "STAFF",
      });
    } catch (error) {
      console.log("error: ", error);
      toast.error("Thất bại");
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
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
          await deleteUser(id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          setGetAllCustomer(
            getAllCustomer.filter((customer) => customer.id !== id)
          );
        } catch (e) {
          Swal.fire("Error", e, "error");
        }
      }
    });
  };
  return (
    <div className="manage-user auto">
      <div
        className={`${
          show ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50`}
        onClick={() => setShow(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-[50%] h-[50%] text-black rounded-md flex items-center justify-center"
        >
          <div className="grid grid-cols-2 gap-[5%] px-[5%] w-full">
            <input
              type="text"
              className="col-span-1 px-3 py-1 border border-[#cccc] rounded-md"
              name="username"
              value={values?.username}
              placeholder="Nhập username..."
              onChange={handleChange}
            />
            <input
              type="text"
              className="w-full px-3 py-1 border border-[#cccc] rounded-md"
              name="email"
              value={values?.email}
              placeholder="Nhập email..."
              onChange={handleChange}
            />
            <input
              type="text"
              className="w-full px-3 py-1 border border-[#cccc] rounded-md"
              name="phone"
              value={values?.phone}
              placeholder="Nhập numberPhone..."
              onChange={handleChange}
            />
            <input
              type="text"
              className="w-full px-3 py-1 border border-[#cccc] rounded-md"
              name="address"
              value={values?.address}
              placeholder="Nhập Address..."
              onChange={handleChange}
            />
            <input
              type="text"
              className="w-full px-3 py-1 border border-[#cccc] rounded-md"
              name="password"
              disabled={edit}
              value={values.password}
              placeholder="Nhập password..."
              onChange={handleChange}
            />
            <select
              name="roleId"
              id="roleId"
              defaultChecked={values.roleId}
              className="w-full px-3 py-1 border border-[#cccc] rounded-md"
              value={"STAFF"}
              onChange={handleChange}
            >
              <option value="STAFF">Nhân viên</option>
              <option value="ADMIN">Admin</option>
            </select>
            <div className="col-span-2 flex mt-3 items-center justify-center">
              <button
                className="px-6 py-2 rounded-lg bg-blue-500 text-white"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                {edit ? "Sửa" : "Thêm"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Nav />
      <div className="content-user">
        <div className="title-user">
          <div
            onClick={() => {
              setValues({
                username: "",
                email: "",
                phone: "",
                address: "",
                password: "",
                roleId: "STAFF",
              });
              setShow(true);
              setEdit(false);
            }}
            className="add-user"
          >
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
            {getAllCustomer?.length > 0 &&
              getAllCustomer?.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item?.id}</td>
                    <td>{item?.username}</td>
                    <td>{item?.email}</td>
                    <td>{item?.phone}</td>
                    <td>{item?.roleId}</td>
                    <td>{item?.status}</td>
                    <td>
                      <button
                        className="btn btn-primary mx-3"
                        onClick={() => {
                          getOneStaff(item?.id);
                          setShow(true);
                          setEdit(true);
                        }}
                      >
                        <BiEdit />
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(item?.id);
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
      </div>
    </div>
  );
};

export default ManageCustomer;
