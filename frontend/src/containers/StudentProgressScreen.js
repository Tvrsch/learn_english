import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listProgress } from "../actions/homework/progressActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ProgressCard from "../components/ProgressCard";
import ProgressModal from "../components/ProgressModal";
import { useParams } from "react-router";
import { useLocation } from 'react-router-dom';
import Paginate from "../components/Paginate";

const StudentProgressDetails = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  let keyword = location.search;

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
  const { error, loading, progress, page, pages } = useSelector(
    (state) => state.progressList
  );

  const {
    loading: loadingAdd,
    error: errorAdd,
    progress: progressAdd,
  } = useSelector((state) => state.addProgress);

  const {
    loading: loadingDelete,
    error: errorDelete,
    progress: progressDelete,
  } = useSelector((state) => state.deleteProgress);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    progress: progressUpdate,
  } = useSelector((state) => state.updateProgress);

  useEffect(() => {
    dispatch(listProgress(id, keyword));
  }, [dispatch, progressAdd, progressDelete, progressUpdate, keyword]);

  return (
    <div>
      <Link to="/students" className="btn btn-dark my-3">
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
                <ProgressCard progress={progressPresentation} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <Loader />
      )}
      <ProgressModal
        getModalState={getModalState}
        id={id}
        toggleModal={toggleModal}
      />
      <Paginate page={page} pages={pages} path={location.pathname} />
    </div>
  );
};

export default StudentProgressDetails;
