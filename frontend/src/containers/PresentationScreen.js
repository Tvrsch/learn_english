import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Figure, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import placeholder from "../placeholder.png";
import { listPresentations } from "../actions/homeworkActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Presentation from "../components/Presentation";

const PresentationScreen = () => {
    const dispatch = useDispatch();
    const { error, loading, presentations } = useSelector(
        (state) => state.presentationList
    );

    useEffect(() => {
        dispatch(listPresentations());
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
            <h1>Presentations</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : presentations ? (
                <div>
                    <Row>
                        {presentations.map((presentation) => (
                            <Col
                                key={presentation.id}
                                sm={12}
                                md={6}
                                lg={4}
                                xl={3}
                            >
                                <Presentation presentation={presentation} />
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

export default PresentationScreen;
