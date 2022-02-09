import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Modal, Form, ListGroup } from "react-bootstrap";
import { generateHomework } from "../actions/homework/homeworkActions";

function HomeworkSendModal({ getModalState, toggleModal, progress }) {
  const dispatch = useDispatch();

  const { error, loading, homework } = useSelector(
    (state) => state.generateHomework
  );

  const [text, setText] = useState(homework ? homework.homework : "");

  const handleClose = () => toggleModal(false);

  const buttonHandler = () => {
    handleClose();
  };

  useEffect(() => {
    setText(homework ? homework.homework : "");
  }, [homework]);

  return (
    <Modal size="lg" show={getModalState()} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Input Homework Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Homework Text</Form.Label>
            <Form.Control
              as="textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={buttonHandler}>
          Send Homework
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default HomeworkSendModal;
