import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listHomework } from "../actions/homework/homeworkActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import HomeworkCard from "../components/HomeworkCard";
import HomeworkModal from "../components/HomeworkModal";
import { useParams } from "react-router";

const HomeworkDetails = () => {
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

  const { id } = useParams();
  const { error, loading, homework } = useSelector(
    (state) => state.homeworkList
  );

  const {
    loading: loadingAdd,
    error: errorAdd,
    homework: homeworkAdd,
  } = useSelector((state) => state.addHomework);

  const {
    loading: loadingDelete,
    error: errorDelete,
    homework: homeworkDelete,
  } = useSelector((state) => state.deleteHomework);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    homework: homeworkUpdate,
  } = useSelector((state) => state.updateHomework);

  useEffect(() => {
    dispatch(listHomework(id));
  }, [dispatch, homeworkAdd, homeworkDelete, homeworkUpdate]);

  return (
    <div>
      <Link to="/presentations" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Button
        type="button"
        variant="primary"
        className="mx-2"
        onClick={() => toggleModal(true)}
      >
        Add New
      </Button>
      {errorAdd && <Message variant="danger">{errorAdd}</Message>}
      <h1>Homework</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : homework ? (
        <div>
          <Row>
            {homework.map((homeworkTitle) => (
              <Col key={homeworkTitle.id} sm={12} md={6} lg={4} xl={3}>
                <HomeworkCard homework={homeworkTitle} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <Loader />
      )}
      <HomeworkModal
        getModalState={getModalState}
        id={id}
        toggleModal={toggleModal}
      />
    </div>
  );
};

export default HomeworkDetails;
