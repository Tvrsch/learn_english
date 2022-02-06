import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Figure,
  Row,
  Button,
  Modal,
  Form,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import placeholder from "../placeholder.png";
import { listPresentations } from "../actions/homework/presentationActions";
import { listProgress, addProgress } from "../actions/homework/progressActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Progress from "../components/Progress";
import { useParams } from "react-router";

const StudentProgressDetails = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [qty, setQty] = useState(1);
  const [presentation, setPresentation] = useState("");

  const handleClose = () => setShow(false);
  const HandleShow = () => {
    setShow(true);
  };

  const { id } = useParams();
  const { error, loading, progress } = useSelector(
    (state) => state.progressList
  );
  const presentation_page = 50;
  const {
    loading: presentationLoading,
    error: presentationError,
    presentations: presentations,
  } = useSelector((state) => state.presentationList);

  const {
    loading: loadingAdd,
    error: errorAdd,
    progress: progressAdd,
  } = useSelector((state) => state.addProgress);

  useEffect(() => {
    dispatch(listProgress(id));
    dispatch(listPresentations());
  }, [dispatch, progressAdd]);

  return (
    <div>
      <Link to="/students" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Button
        type="button"
        variant="primary"
        className="mx-2"
        onClick={HandleShow}
      >
        Add New
      </Button>
      {errorAdd && <Message variant="danger">{errorAdd}</Message>}
      <h1>Progress</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : progress ? (
        <div>
          <Row>
            {progress.map((progressPresentation) => (
              <Col key={progressPresentation.id} sm={12} md={6} lg={4} xl={3}>
                <Progress progress={progressPresentation} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <Loader />
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Input Progress Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <ListGroup.Item>
              <Row>
                <Col>Presentation</Col>
                <Col xs="auto" className="my-1">
                  <Form.Control
                    as="select"
                    value={presentation}
                    onChange={(e) => setPresentation(e.target.value)}
                  >
                    {presentationLoading
                      ? "loader"
                      : presentationError
                      ? "error"
                      : presentations
                      ? presentations.map((x) => (
                          <option key={x.id} value={x.id}>
                            {x.name}
                          </option>
                        ))
                      : "loading"}
                  </Form.Control>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Current Slide</Col>
                <Col xs="auto" className="my-1">
                  <Form.Control
                    as="select"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
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
          </Form>
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
    </div>
  );
};

export default StudentProgressDetails;
