import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Nav, Row, Col, Container, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../logo.png";
import {logout} from '../actions/homework/userActions';

const Header = () => {
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logout())
    }
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

                    {userInfo ? (
          <NavDropdown title={userInfo.name} id='username'>
            <LinkContainer to="/profile">
              <NavDropdown.Item>Профиль</NavDropdown.Item>
            </LinkContainer>

              <LinkContainer to="/students">
                  <NavDropdown.Item>Ученики</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/presentations">
                  <NavDropdown.Item>Презентации</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Item onClick={logoutHandler}>Выйти</NavDropdown.Item>
          </NavDropdown>
        ) : (
              <LinkContainer to="/login">
                  <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
              </LinkContainer>)}
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
