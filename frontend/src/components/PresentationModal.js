import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Modal, Form, ListGroup } from "react-bootstrap";
import {
  addPresentation,
  updatePresentation,
} from "../actions/homework/presentationActions";
import axios from "axios";
import Loader from "./Loader";

function PresentationModal({ getModalState, toggleModal, presentation }) {
  const dispatch = useDispatch();

  const presentation_page = 50;

  const [name, setName] = useState(presentation ? presentation.name : "");
  const [book, setBook] = useState(presentation ? presentation.book : "");
  const [slide, setSlide] = useState(
    presentation ? presentation.total_slides : 1
  );
  const [skill, setSkill] = useState(
    presentation ? presentation.diff_level : ""
  );
  const [image, setImage] = useState(presentation ? presentation.picture : "");
  const [uploading, setUploading] = useState(false);

  const handleClose = () => toggleModal(false);

  const buttonHandler = () => {
    if (presentation) {
      dispatch(
        updatePresentation(
          { name, book, total_slides: slide, diff_level: skill },
          presentation.id
        )
      );
    } else {
      {
        dispatch(addPresentation({ name, book, slide, diff_level: skill }));
      }
    }
    handleClose();
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("presentation_id", presentation.id);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "/presentations/upload/",
        formData,
        config
      );
      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  return (
    <Modal show={getModalState()} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Input Presentation Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <ListGroup.Item>
            <Row>
              <Col>Presentation Name</Col>
              <Col xs="auto" className="my-1">
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Row>
              <Col>Presentation Book</Col>
              <Col xs="auto" className="my-1">
                <Form.Control
                  type="text"
                  value={book}
                  onChange={(e) => setBook(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Row>
              <Col>Presentation Total Slides</Col>
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

          <ListGroup.Item>
            <Row>
              <Col>Presentation Skill Level</Col>
              <Col xs="auto" className="my-1">
                <Form.Control
                  type="text"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>
          </ListGroup.Item>
          <Form.Group controlId="image">
            <Form.Label>Presentation Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Upload Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>

            <Form.Control
              type="file"
              label="Choose File"
              onChange={uploadFileHandler}
            />
            {uploading && <Loader />}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={buttonHandler}>
          {presentation ? "Edit" : "Add"} Presentation
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default PresentationModal;
