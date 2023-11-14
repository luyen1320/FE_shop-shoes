import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalOrder.scss";
import { Table } from "react-bootstrap";
import { FaMoneyBillAlt } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { BiEdit, BiMenuAltLeft } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ModalOrder = (props) => {
  const { show, handleClose } = props;
  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl" className="modal-order">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Chi tiết đơn hàng
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="order-detail">
            <div className="info">
              <div className="info-ncc">
                <h5>Người gửi</h5>
                <ul>
                  <li>
                    Cửa hàng: <b>Shopshoes</b>
                  </li>
                  <li>Tầng 2 - Số 2 -Ngõ 80</li>
                  <li>
                    Phố Thành Trung -Trâu Quỳ -Gia Lâm -Hà NộiGia Lâm -Hà Nội
                  </li>
                  <li>Phone: 1234567890</li>
                  <li>Email: support@shopshoes.com</li>
                </ul>
              </div>
              <div className="info-customer">
                <h5>Người nhận</h5>
                <ul>
                  <strong>TaiOke</strong>
                  <li>Tầng 2 - Số 2 -Ngõ 80</li>
                  <li>Phố Thành Trung -Trâu Quỳ -Gia Lâm -Hà Nội</li>
                  <li>Phone: 1234567890</li>
                  <li>Email: support@shopshoes.com</li>
                </ul>
              </div>
              <div className="info-delivery">
                <h5>Thông tin giao dịch</h5>
                <ul>
                  <li>Mã đơn hàng: 1</li>
                  <li>Thanh toán: nhận hàng</li>
                  <li>Phí vận chuyển: 65.000đ</li>
                </ul>
              </div>
            </div>
            <div className="product-order">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Trạng Thái</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <ul>
                        <li>
                          Giày Air Jordan 1 Retro Hi Premium GS 'Camo'
                          822858-027
                        </li>
                        <li>Size: 40</li>
                      </ul>
                    </td>
                    <td>1</td>
                    <td>4.990.000đ</td>
                    <td>
                      <select className="form-select">
                        <option>Chờ xử lý</option>
                        <option>Đã duyệt</option>
                        <option>Đang giao hàng</option>
                        <option>Đã Giao hàng</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <div className="total-money">Tổng: 5.055.000đ</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Lưu</Button>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalOrder;
