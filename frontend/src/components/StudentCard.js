import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteStudent } from "../actions/homework/studentActions";
import StudentModal from "./StudentModal";

const StudentCard = ({ student }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const toggleModal = (state) => {
    if (state) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  function getModalState() {
    return show;
  }

  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch(deleteStudent(student.id));
    }
  };

  const updateHandler = () => {
    toggleModal(true);
  };

  return (
    <Card className="my-3 p-3 rounder">
      <Link to={`/students/${student.id}`}>
        <Card.Img src={student.picture} />
      </Link>

      <Card.Body>
        <Link to={`/students/${student.id}`}>
          <Card.Title as="div">
            <h3>
              <strong>{student.name}</strong>
            </h3>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <h5>{student.diff_level}</h5>
        </Card.Text>
        <Button
          type="button"
          variant="primary"
          className="mx-2"
          onClick={updateHandler}
        >
          Edit
        </Button>
        <Button
          type="button"
          variant="primary"
          className="mx-2"
          onClick={deleteHandler}
        >
          Delete
        </Button>
      </Card.Body>
      <StudentModal
        getModalState={getModalState}
        toggleModal={toggleModal}
        student={student}
      />
    </Card>
  );
};

export default StudentCard;
