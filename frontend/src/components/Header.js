import React from "react";
import { Nav, Row, Col, Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../logo.png";

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <LinkContainer to="/">
                        <Navbar.Brand>Главная</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <LinkContainer to="/about">
                            <Nav.Link>О Себе</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/my-account">
                            <Nav.Link>Личный Кабинет</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/test">
                            <Nav.Link>
                                Тест на уровень Английского языка
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/students">
                            <Nav.Link>Ученики</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/presentations">
                            <Nav.Link>Презентации</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
