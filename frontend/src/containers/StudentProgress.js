import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Figure, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import placeholder from "../placeholder.png";
import { listProgress } from "../actions/homeworkActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Progress from "../components/Progress";
import { useParams } from "react-router";

const StudentProgressDetails = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const { error, loading, progress } = useSelector(
        (state) => state.progressList
    );

    useEffect(() => {
        dispatch(listProgress(id));
    }, [dispatch]);
    return (
        <div>
            <Link to="/students" className="btn btn-dark my-3">
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
            <h1>Progress</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : progress ? (
                <div>
                    <Row>
                        {progress.map((progressPresentation) => (
                            <Col
                                key={progressPresentation.id}
                                sm={12}
                                md={6}
                                lg={4}
                                xl={3}
                            >
                                <Progress progress={progressPresentation} />
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

export default StudentProgressDetails;
