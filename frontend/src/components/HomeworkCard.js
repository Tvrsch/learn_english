import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { deleteHomework } from "../actions/homework/homeworkActions";
import HomeworkModal from "./HomeworkModal";

const HomeworkCard = ({ homework }) => {
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
    if (window.confirm("Are you sure you want to delete this homework?")) {
      dispatch(deleteHomework(homework.id));
    }
  };

  const updateHandler = () => {
    toggleModal(true);
  };

  return (
    <Card className="my-3 p-3 rounder">
      <Card.Body>
        <Card.Title as="div">
          <h4>
            <strong>Required slides: {homework.slides_required}</strong>
          </h4>
        </Card.Title>

        <Card.Text as="div">
          <p>{homework.task_text}</p>
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
      </Card.Body>
      <HomeworkModal
        getModalState={getModalState}
        id={homework.id}
        toggleModal={toggleModal}
        homework={homework}
      />
    </Card>
  );
};

export default HomeworkCard;
