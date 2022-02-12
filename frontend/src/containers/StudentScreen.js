import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Figure, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import StudentCard from "../components/StudentCard";
import { listStudents } from "../actions/homework/studentActions";
import StudentModal from "../components/StudentModal";
import { useLocation } from 'react-router-dom';
import Paginate from "../components/Paginate";

const HomeworkScreen = () => {
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
  const { error, loading, students, page, pages } = useSelector(
    (state) => state.studentList
  );

  const {
    loading: loadingAdd,
    error: errorAdd,
    student: studentAdd,
  } = useSelector((state) => state.addStudent);

  const {
    loading: loadingDelete,
    error: errorDelete,
    student: studentDelete,
  } = useSelector((state) => state.deleteStudent);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    student: studentUpdate,
  } = useSelector((state) => state.updateStudent);

  useEffect(() => {
    dispatch(listStudents(keyword));
  }, [dispatch, studentDelete, studentAdd, studentUpdate, keyword]);

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
      <h1>Students</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : students ? (
        <div>
          <Row>
            {students.map((student) => (
              <Col key={student.id} sm={12} md={6} lg={4} xl={3}>
                <StudentCard student={student} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <Loader />
      )}
      <StudentModal toggleModal={toggleModal} getModalState={getModalState} />
      <Paginate page={page} pages={pages} path={location.pathname} />
    </div>
  );
};
export default HomeworkScreen;
