import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Figure, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import placeholder from "../placeholder.png";
import { listPresentations } from "../actions/homework/presentationActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Presentation from "../components/PresentationCard";
import PresentationModal from "../components/PresentationModal";

const PresentationScreen = () => {
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

  const { error, loading, presentations } = useSelector(
    (state) => state.presentationList
  );

  const {
    loading: loadingAdd,
    error: errorAdd,
    presentation: presentationAdd,
  } = useSelector((state) => state.addPresentation);

  const {
    loading: loadingDelete,
    error: errorDelete,
    presentation: presentationDelete,
  } = useSelector((state) => state.deletePresentation);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    presentation: presentationUpdate,
  } = useSelector((state) => state.updatePresentation);

  useEffect(() => {
    dispatch(listPresentations());
  }, [dispatch, presentationDelete, presentationAdd, presentationUpdate]);

  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      <Button
        type="button"
        variant="primary"
        className="mx-2"
        onClick={toggleModal}
      >
        Add New
      </Button>
      <h1>Presentations</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : presentations ? (
        <div>
          <Row>
            {presentations.map((presentation) => (
              <Col key={presentation.id} sm={12} md={6} lg={4} xl={3}>
                <Presentation presentation={presentation} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <Loader />
      )}
      <PresentationModal
        toggleModal={toggleModal}
        getModalState={getModalState}
      />
    </div>
  );
};

export default PresentationScreen;
