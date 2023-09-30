import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalOrder.scss";

const ModalOrder = (props) => {
  const { show, handleClose } = props;
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" className="modal-order">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Chi tiết đơn hàng
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
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
