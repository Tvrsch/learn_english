import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Modal, Form, ListGroup } from "react-bootstrap";
import {
  addHomework,
  updateHomework,
} from "../actions/homework/homeworkActions";

function HomeworkModal({ getModalState, id, toggleModal, homework }) {
  const dispatch = useDispatch();

  const [slide, setSlide] = useState(homework ? homework.slides_required : 1);
  const [text, setText] = useState(homework ? homework.task_text : "");

  const handleClose = () => toggleModal(false);

  const buttonHandler = () => {
    if (homework) {
      dispatch(
        updateHomework(
          { presentation_id: id, slides_required: slide, task_text: text },
          homework.id
        )
      );
    } else {
      dispatch(
        addHomework({
          presentation_id: id,
          slides_required: slide,
          task_text: text,
        })
      );
    }
    handleClose();
  };

  const presentation_page = 50;
  const {
    loading: presentationLoading,
    error: presentationError,
    presentations: presentations,
  } = useSelector((state) => state.presentationList);

  return (
    <Modal size="lg" show={getModalState()} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Input Homework Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <ListGroup.Item>
            <Row>
              <Col>Required Slide</Col>
              <Col xs="auto" className="my-1">
                <Form.Control
                  as="select"
                  value={slide}
                  onChange={(e) => setSlide(e.target.value)}
                >
                  {[...Array(presentation_page).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
          </ListGroup.Item>
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
          {homework ? "Edit" : "Add"} Homework
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default HomeworkModal;
