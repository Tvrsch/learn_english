import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentCard = ({ student }) => {
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
          onClick={() => console.log("click")}
        >
          Edit
        </Button>
        <Button
          type="button"
          variant="primary"
          className="mx-2"
          onClick={() => console.log("click")}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
