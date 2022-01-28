import React from "react";
import {Col, Figure} from "react-bootstrap";
import {Link} from 'react-router-dom';
import placeholder from "../placeholder.png";

const PostDetails = () => {
    return (
        <div>
            <Figure>
                <Figure.Image
                    width={640}
                    height={380}
                    alt="180x180"
                    src={placeholder}
                />
            <Figure.Caption>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem consequatur delectus ea itaque, perferendis placeat vero! Architecto atque distinctio dolor, ducimus eos odio odit perspiciatis possimus, repellendus similique ut?
            </Figure.Caption>
            </Figure>
        </div>
    )
}

export default PostDetails;