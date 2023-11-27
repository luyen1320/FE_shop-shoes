import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components";
import "./Info.scss";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { getOrderById } from "../../../service/productService";

const InfoAccount = () => {
  const [user, setUser] = useState({});
  const [listOrder, setListOrder] = useState([]);
  useEffect(() => {
    // Kiểm tra xem có thông tin người dùng trong Local Storage không
    const storedUser = localStorage.getItem("user");

    // Nếu có, chuyển đổi chuỗi JSON thành đối tượng và cập nhật state
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const getAllOrderById = async (id) => {
    let res = await getOrderById(id);
    if (res && res.errCode === 0) {
      setListOrder(res.DT);
    } else {
      console.log(res.errMessage);
      toast.error(res.errMessage);
    }
  };

  useEffect(() => {
    getAllOrderById(user?.id);
  }, [user?.id]);

  console.log(user);
  return (
    <>
      <Navbar />
      <div className="info-account">
        <h2>Thông tin tài khoản</h2>

        <div className="list-group">
          {/* <div className="bloc-tabs">
            <div className="tabs">Tài Khoản</div>
            <div className="tabs">Danh sách đặt hàng</div>
            <div className="tabs">Đổi mật khẩu</div>
          </div>

          <div className="content-tabs">
            <div className="content-t ac">dfhdfgdfdgd</div>
          </div> */}
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tài khoản</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Danh sách đặt hàng</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="account">
                      <form className="row g-3 needs-validation">
                        <div className="col-md-6">
                          <label className="form-label">Tên</label>
                          <input type="text" className="form-input" />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Email</label>
                          <input type="text" className="form-input" />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Điện thoại</label>
                          <input type="text" className="form-input" />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Địa chỉ</label>
                          <input type="text" className="form-input" />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Tỉnh/Thành phố</label>
                          <input type="text" className="form-input" />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Quận/Huyện</label>
                          <input type="text" className="form-input" />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Xã/Phường</label>
                          <input type="text" className="form-input" />
                        </div>

                        <div className="col-12">
                          <button className="btn btn-primary" type="submit">
                            Cập nhật
                          </button>
                        </div>
                      </form>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Table bordered hover>
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Sản phẩm</th>
                          <th>Giá</th>
                          <th>Tổng tiền</th>
                          <th>Ngày đặt</th>
                          <th>Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        {listOrder?.length > 0 &&
                          listOrder.map((item, index) => {
                            const createdAtDate = new Date(item?.createdAt);
                            const formattedDate = `${createdAtDate.getDate()}/${
                              createdAtDate.getMonth() + 1
                            }/${createdAtDate.getFullYear()} ${createdAtDate.getHours()}:${
                              createdAtDate.getMinutes() < 10
                                ? "0" + createdAtDate.getMinutes()
                                : createdAtDate.getMinutes()
                            }`;
                            return (
                              <tr key={index}>
                                <td>1</td>
                                <td>
                                  {item?.orderDetail?.length > 0 &&
                                    item?.orderDetail?.map((product, i) => (
                                      <p key={i}>
                                        {product?.product?.productName}
                                      </p>
                                    ))}
                                </td>
                                <td>
                                  {item?.orderDetail?.length > 0 &&
                                    item?.orderDetail?.map((product, i) => (
                                      <p key={i}>
                                        {parseInt(
                                          product?.price
                                        ).toLocaleString()}
                                      </p>
                                    ))}
                                </td>
                                <td>
                                  {parseInt(item?.totalMoney).toLocaleString()}
                                </td>
                                <td>{formattedDate}</td>
                                <td>{item?.status}</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </Table>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export default InfoAccount;
