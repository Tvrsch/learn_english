import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Modal, Form, ListGroup } from "react-bootstrap";
import { listProgress, addProgress } from "../actions/homework/progressActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Progress from "../components/Progress";
import { useParams } from "react-router";

function Modal({ modalTitle, modalOptions }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form></Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(
              addProgress({
                presentation_id: presentation,
                current_slide: qty,
                student_id: id,
              })
            );
            handleClose();
          }}
        >
          Add Progress
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Modal;
