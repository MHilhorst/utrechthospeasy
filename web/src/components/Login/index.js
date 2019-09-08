import React from "react";
import {
  Form,
  Button,
  Container,
  InputGroup,
  FormControl,
  Row,
  Col
} from "react-bootstrap";
import { keys } from "../../config/backend";
import "./style.css";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleLoginSubmit() {
    fetch(`${keys.host}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(res =>
      res.json().then(data => {
        sessionStorage.setItem("token", data.token);
      })
    );
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-center mt-5">
            <Col xl={4} className="col-centered">
              <div className="login-box">
                <h1 className="login-text">Login</h1>
                <Form onSubmit={this.handleLoginSubmit}>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <InputGroup>
                      <FormControl
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={e => this.handleEmailChange(e)}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <FormControl
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={e => this.handlePasswordChange(e)}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
