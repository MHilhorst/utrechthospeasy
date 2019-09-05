import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import SubHeader from "../SubHeader";
import SideMenuAccount from "../SideMenuAccount";
import "./style.css";
class Account extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <SubHeader title="Account" />
        <Container>
          <Row className="justify-content-center">
            <Col xl={3}>
              <SideMenuAccount user="https://secure.gravatar.com/avatar/70e69c46e9afd5fd7fe67c000d34e3b8?s=400&d=mm&r=g" />
            </Col>
            <Col className="side-menu-border" xl={6}>
              <p>ds</p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default connect()(Account);
