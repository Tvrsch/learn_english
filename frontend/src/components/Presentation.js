import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Presentation = ({ presentation }) => {
  return (
    <Card className="my-3 p-3 rounder">
      <Link to={`/presentations/${presentation.id}`}>
        <Card.Img src={presentation.picture} />
      </Link>

      <Card.Body>
        <Link to={`/presentations/${presentation.id}`}>
          <Card.Title as="div">
            <h3>
              <strong>{presentation.name}</strong>
            </h3>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <h5>{presentation.diff_level}</h5>
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

export default Presentation;
