import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Nav() {
  return (
    <Row>
      <Col>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand className="font-link" href="#home">
            Search Books
          </Navbar.Brand>
        </Navbar>
      </Col>
      <Col>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="justify-content-end"
        >
          <Navbar.Brand className="font-link" href="#home">
            Saved Books
          </Navbar.Brand>
        </Navbar>
      </Col>
    </Row>
  );
}

export default Nav;
