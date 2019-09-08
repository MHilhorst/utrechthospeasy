import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./style.css";
import { keys } from "../../config/backend";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  handleLogOut() {
    let token = sessionStorage.getItem("token");
    if (token) {
      fetch(`${keys.host}/auth/logout`, {
        method: "POST",
        headers: {
          authorization: token
        }
      }).then(res => {
        if (res.status == 200) {
          sessionStorage.removeItem("token");
        }
      });
    }
  }
  componentDidMount() {
    console.log("header mounted");
  }
  render() {
    if (this.props.loading) {
      return (
        <>
          <Navbar collapseOnSelect expand="lg">
            <Container fluid>
              <Navbar.Brand href="/">Hospeasy</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse>
                <Nav className="ml-auto"></Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      );
    } else {
      if (this.props.user) {
        console.log("user loaded");
        return (
          <>
            <Navbar collapseOnSelect expand="lg">
              <Container fluid>
                <Navbar.Brand href="/">Hospeasy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                  <Nav className="ml-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Over ons</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <NavDropdown
                      title={this.props.user.user.email}
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={this.handleLogOut}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </>
        );
      } else {
        return (
          <>
            <Navbar collapseOnSelect expand="lg">
              <Container fluid>
                <Navbar.Brand href="/">Hospeasy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                  <Nav className="ml-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Over ons</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <Nav.Link href="/login">Account</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </>
        );
      }
    }
  }
}
