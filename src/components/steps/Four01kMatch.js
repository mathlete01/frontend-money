import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";

class Four01kMatch extends React.Component {
  _next = () => {
    let match = document.getElementById("employer_match");
    this.props.updateCurrentUser(this.props.currentUser.id, {
      four01k_match: match.value,
    });
    this.props.handleNextStep("Four01kContribution");
  };

  _prev = () => {
    this.props.handlePrevStep("Four01k");
  };

  render() {
    if (this.props.currentStep !== "Four01kMatch") {
      return null;
    }
    return (
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link onClick={this._prev}>
                <FontAwesomeIcon icon="chevron-left" /> Back
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>How much is the employer match?</Card.Title>
          <Card.Text>
            The "employer match" is the maximum percentage of your paycheck that
            they will contribute to your 401(k).
          </Card.Text>
          <Container>
            <Form.Group>
              <Form.Row>
                <Form.Label column lg={6}>
                  Employer Match
                </Form.Label>
                <Col>
                  <Form.Control
                    type="float"
                    defaultValue="3"
                    id="employer_match"
                  />
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Button variant="success" size="lg" block onClick={this._next}>
                  Next
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentStep: state.stepReducer.currentStep,
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
})(Four01kMatch);
