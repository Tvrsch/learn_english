import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deletePresentation } from "../actions/homework/presentationActions";
import PresentationModal from "./PresentationModal";

const PresentationCard = ({ presentation }) => {
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
    if (window.confirm("Are you sure you want to delete this presentation?")) {
      dispatch(deletePresentation(presentation.id));
    }
  };

  const updateHandler = () => {
    toggleModal(true);
  };

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
      <PresentationModal
        getModalState={getModalState}
        toggleModal={toggleModal}
        presentation={presentation}
      />
    </Card>
  );
};

export default PresentationCard;
