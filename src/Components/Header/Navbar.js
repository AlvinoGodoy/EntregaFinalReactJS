import React from "react";
import "./StylesH.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";

function BasicExample() {
  return (
    <Navbar expand="lg" className="myNavbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="./logoactive.jpg" alt="Logo de Activate" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/category/accesorios">
              Accesorios
            </Nav.Link>
            <Nav.Link as={Link} to="/category/indumentaria">
              Indumentaria
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/cartwidget">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
