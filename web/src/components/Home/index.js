import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Container>
          <div className="header-container">
            <h1 className="text-center header-text">
              Hospiteren, maar dan makkelijker
            </h1>
            <h4 className="header-subtext text-center mb-5">
              lorem ipsum asdasdj aisdjsao
            </h4>
            <Row className="justify-content-md-center">
              <Button className="header-button">Zoeken</Button>
              <Button className="header-button header-button-outline">
                Learn more
              </Button>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default Home;
