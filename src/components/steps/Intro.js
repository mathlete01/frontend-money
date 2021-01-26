import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { setCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const BASE_URL = "http://localhost:3000";
const USERS_URL = `${BASE_URL}/users`;

class Intro extends React.Component {
  _next = (event) => {
    event.preventDefault();
    this.props.handleNextStep("LeftoverMoney");
    // debugger
    if (Object.keys(this.props.currentUser).length === 0) {
      this.createUser();
    }
  };

  generateRandomString = function (length = 6) {
    return Math.random().toString(20).substr(2, length);
  };

  createUser = () => {
    let formData = {
      user: {
        username: this.generateRandomString(),
        password: this.generateRandomString(),
      },
    };
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(USERS_URL, configObj)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => {
        this.props.setCurrentUser(data.user);
        localStorage.setItem("token", data.token);
      })
      .catch((errors) => console.log(`createUser: ${errors}`));
  };

  render() {
    if (this.props.currentStep !== "Intro") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <Container className="border step">
        <Row id="header" className="step">
          <Button onClick={this._prev} variant="link" disabled>
            <FontAwesomeIcon icon="chevron-left" /> Back
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="step">
          <Container>
            <h3>We're gonna walk you through a bunch of questions.</h3>
          </Container>
        </Row>
        <Row id="body" className="step">
          <Container>
            You'll be asked to enter a few numbers, but estimates are just fine.
            Sample numbers are provided, so you can also just go with those and
            correct them later if you'd like.
          </Container>
        </Row>
        <Row id="form" className="step"></Row>
        <Row id="buttons" className="step">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col></Col>
                <Col>
                  <Button
                    className="yes"
                    variant="primary"
                    size="lg"
                    block
                    onClick={this._next}
                  >
                    Let's go
                  </Button>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentStep: state.stepReducer.currentStep,
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps, { setCurrentUser })(Intro);
