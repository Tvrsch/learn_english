import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Figure, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import StudentCard from "../components/StudentCard";
import { listStudents } from "../actions/homeworkActions";

const HomeworkScreen = () => {
    const dispatch = useDispatch();
    const { error, loading, students } = useSelector(
        (state) => state.studentList
    );

    useEffect(() => {
        dispatch(listStudents());
    }, [dispatch]);

    return (
        <div>
            <Link to="/" className="btn btn-dark my-3">
                Go Back
            </Link>
            <Button
                type="button"
                variant="primary"
                className="mx-2"
                onclick={() => console.log("click")}
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
        </div>
    );
};
export default HomeworkScreen;
