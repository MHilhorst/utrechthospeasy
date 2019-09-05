import React from "react";
import { Row, Container } from "react-bootstrap";
import "./style.css";

class SubHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row className="subheader">
        <Container>
          <div>
            <p className="subheader-text">{this.props.title}</p>
          </div>
        </Container>
      </Row>
    );
  }
}

export default SubHeader;
