import React from "react";
import "./style.css";
import { Row, Nav } from "react-bootstrap";
class SideMenuAccount extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <p>Profiel aanpassen</p>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/" eventKey="link-1">
            Link
          </Nav.Link>
          <Nav.Link href="/" eventKey="link-2">
            Link
          </Nav.Link>
        </Nav>
      </>
    );
  }
}

export default SideMenuAccount;
