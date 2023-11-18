import React from "react";
import { Navbar } from "../../../components";
import "./Info.scss";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Table } from "react-bootstrap";

const InfoAccount = () => {
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
                        <tr>
                          <td>1</td>
                          <td>Nike</td>
                          <td>nike one 12</td>
                          <td>1.200.000đ</td>
                          <td>40</td>
                          <td>1</td>
                        </tr>
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
