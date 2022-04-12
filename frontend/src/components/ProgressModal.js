import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Modal, Form, ListGroup } from "react-bootstrap";
import { listPresentations } from "../actions/homework/presentationActions";
import {
	addProgress,
	updateProgress,
} from "../actions/homework/progressActions";

function ProgressModal({ getModalState, id, toggleModal, progress }) {
	const dispatch = useDispatch();

	const presentation_page = 50;
	const {
		loading: presentationLoading,
		error: presentationError,
		presentations,
	} = useSelector((state) => state.presentationList);

	const [slide, setSlide] = useState(progress ? progress.current_slide : 1);
	const [presentation, setPresentation] = useState("");

	const handleClose = () => toggleModal(false);

	const buttonHandler = () => {
		if (progress) {
			dispatch(updateProgress({ current_slide: slide }, progress.id));
		} else {
			dispatch(
				addProgress({
					presentation_id: presentation,
					current_slide: slide,
					student_id: id,
				})
			);
		}
		handleClose();
	};

	useEffect(() => {
		dispatch(listPresentations());
	}, [dispatch]);

	useEffect(() => {
		setPresentation(
			presentations
				? presentations.length
					? presentations[0].id
					: ""
				: ""
		);
	}, [presentations]);

	return (
		<Modal show={getModalState()} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Input Progress Data</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<ListGroup.Item>
						<Row>
							<Col>Presentation</Col>
							<Col xs="auto" className="my-1">
								<Form.Control
									as="select"
									value={presentation}
									onChange={(e) =>
										setPresentation(e.target.value)
									}
									disabled={progress ? true : false}
								>
									{progress ? (
										<option
											key={progress.presentation.id}
											value={progress.presentation.id}
										>
											{progress.presentation}
										</option>
									) : presentationLoading ? (
										"loader"
									) : presentationError ? (
										"error"
									) : presentations ? (
										presentations.map((x) => (
											<option key={x.id} value={x.id}>
												{x.name}
											</option>
										))
									) : (
										"loading"
									)}
								</Form.Control>
							</Col>
						</Row>
					</ListGroup.Item>

					<ListGroup.Item>
						<Row>
							<Col>Current Slide</Col>
							<Col xs="auto" className="my-1">
								<Form.Control
									as="select"
									value={slide}
									onChange={(e) => setSlide(e.target.value)}
								>
									{[...Array(presentation_page).keys()].map(
										(x) => (
											<option key={x + 1} value={x + 1}>
												{x + 1}
											</option>
										)
									)}
								</Form.Control>
							</Col>
						</Row>
					</ListGroup.Item>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={buttonHandler}>
					{progress ? "Edit" : "Add"} Progress
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
export default ProgressModal;
