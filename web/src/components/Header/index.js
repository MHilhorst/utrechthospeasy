import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./style.css";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Hospeasy</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Over ons</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
                <Nav.Link>Account</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
