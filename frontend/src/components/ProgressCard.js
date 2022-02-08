import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deleteProgress } from "../actions/homework/progressActions";
import ProgressModal from "./ProgressModal";

const ProgressCard = ({ progress }) => {
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
    if (window.confirm("Are you sure you want to delete this progress?")) {
      dispatch(deleteProgress(progress.id));
    }
  };

  const updateHandler = () => {
    toggleModal(true);
  };

  return (
    <Card className="my-3 p-3 rounder" style={{ width: "23rem" }}>
      <Card.Img src={progress.picture} />

      <Card.Body>
        <Card.Title as="div">
          <h4>
            <strong>{progress.presentation}</strong>
          </h4>
        </Card.Title>

        <Card.Text as="div">
          <h5>
            Current progress: {progress.current_slide}/{progress.total_slides}{" "}
            slides
          </h5>
        </Card.Text>

        <Button
          type="button"
          variant="primary"
          className="mx-1"
          onClick={deleteHandler}
        >
          Delete
        </Button>

        <Button
          type="button"
          variant="primary"
          className="mx-1"
          onClick={updateHandler}
        >
          Edit
        </Button>

        <Button
          type="button"
          variant="primary"
          className="mx-1"
          onClick={() => console.log("click")}
        >
          Send Homework
        </Button>
      </Card.Body>
      <ProgressModal
        getModalState={getModalState}
        id={progress.id}
        toggleModal={toggleModal}
        progress={progress}
      />
    </Card>
  );
};

export default ProgressCard;
