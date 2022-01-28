import React from 'react';
import {Nav, Row, Col, Container, Navbar} from 'react-bootstrap';

import logo from '../logo.png';

const Header = () => {
    return(
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
            <Navbar.Brand href="/">Главная</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#about">О Себе</Nav.Link>
              <Nav.Link href="#my-account">Личный Кабинет</Nav.Link>
              <Nav.Link href="#test">Тест на уровень Английского языка</Nav.Link>
            </Nav>
            </Container>
          </Navbar>

        </header>
    )
};

export default Header;

