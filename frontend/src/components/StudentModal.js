import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Modal, Form, ListGroup } from "react-bootstrap";
import { addStudent, updateStudent } from "../actions/homework/studentActions";
import axios from "axios";
import Loader from "./Loader";

function StudentModal({ getModalState, toggleModal, student }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(student ? student.name : "");
  const [mail, setMail] = useState(student ? student.mail : "");
  const [skill, setSkill] = useState(student ? student.diff_level : "");
  const [image, setImage] = useState(student ? student.picture : "");
  const [uploading, setUploading] = useState(false);

  const handleClose = () => toggleModal(false);

  const buttonHandler = () => {
    if (student) {
      dispatch(updateStudent({ name, mail, diff_level: skill }, student.id));
    } else {
      {
        dispatch(addStudent({ name, mail, diff_level: skill }));
      }
    }
    handleClose();
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    formData.append("student_id", student.id);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "/students/upload/",
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
        <Modal.Title>Input Student Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <ListGroup.Item>
            <Row>
              <Col>Student Name</Col>
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
              <Col>Student E-Mail</Col>
              <Col xs="auto" className="my-1">
                <Form.Control
                  type="email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                ></Form.Control>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Student Skill Level</Col>
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
            <Form.Label>Student Image</Form.Label>
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
          {student ? "Edit" : "Add"} Student
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default StudentModal;
