import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post";
import { listPosts } from "../actions/postActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listPosts());
    }, [dispatch]);
    const { error, loading, posts } = useSelector((state) => state.postList);
    return (
        <div>
            <h1>Публикации:</h1>

            <Row>
                <Col xs={9} className="px-5">
                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <Message variant="danger">{error}</Message>
                    ) : posts ? (
                        posts.map((post) => (
                            <Post post={post} key={post.title} />
                        ))
                    ) : (
                        <Loader />
                    )}
                </Col>

                <Col xs={3} className="px-5">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A, alias amet architecto at blanditiis corporis
                        cum deleniti dolore earum impedit in iusto laborum magni
                        maiores minus molestias nobis perferendis tenetur!
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default Home;
