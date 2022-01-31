import React from "react";
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Progress = ({progress}) => {
    return (
        <Card className="my-3 p-3 rounder">

            <Card.Img src={progress.picture} />

            <Card.Body>

                <Card.Title as="div">
                    <h4><strong>{progress.presentation}</strong></h4>
                </Card.Title>

                <Card.Text as="div">
                    <h5>Current progress: {progress.current_slide}/{progress.total_slides} slides</h5>
                </Card.Text>

                <Button type='button'
                variant='primary'
                className='mx-2'
                onclick={() => console.log("click")}>
                    Edit
                </Button>

                <Button type='button'
                variant='primary'
                className='mx-2'
                onclick={() => console.log("click")}>
                    Send homework
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Progress;