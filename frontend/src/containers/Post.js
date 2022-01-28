import React from "react";
import {Col, Figure} from "react-bootstrap";
import {Link} from 'react-router-dom';
import placeholder from "../placeholder.png";

const Post = ({post}) => {
    return (
        <div>
            <Link to={`/`}>
            <Figure>
                <h3>{post.title}</h3>
                <Figure.Image
                    width={640}
                    height={380}
                    alt="180x180"
                    src={placeholder}
                />
            <Figure.Caption>
                {post.content}
            </Figure.Caption>
            </Figure>
            </Link>
        </div>
    )
}

export default Post;