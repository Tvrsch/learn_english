import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Modal, Form, ListGroup } from "react-bootstrap";
import { sendHomework } from "../actions/homework/homeworkActions";
import { useParams } from "react-router";

function HomeworkSendModal({ getModalState, toggleModal, progress }) {
  const dispatch = useDispatch();

  const { error, loading, homework } = useSelector(
    (state) => state.generateHomework
  );
  const {id} = useParams();

  const [text, setText] = useState(homework ? homework.homework : "");
  const [subject, setSubject] = useState("New Homework!")

  const handleClose = () => toggleModal(false);

  const buttonHandler = () => {
    dispatch(sendHomework({homework: text, student_id: id, subject}))
    handleClose();
  };

  useEffect(() => {
    setText(homework ? homework.homework : "");
  }, [homework]);

  return (
    <Modal size="lg" show={getModalState()} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Check Homework Before Send</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mail Subject</Form.Label>
            <Form.Control
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              rows={3}
            />
          </Form.Group>
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
