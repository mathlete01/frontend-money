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

class Four01kContribution extends React.Component {

  _next = () => {
    let match = document.getElementById("employee_contribution");
    this.props.updateCurrentUser(this.props.currentUser.id, {four01k_contribution: match.value})
    this.props.handleNextStep("CreditCardDebtQuestion");
  };

  _prev = () => {
    this.props.handlePrevStep("Four01kMatch");
  };

  render() {
    if (this.props.currentStep !== "Four01kContribution") {
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
          <Card.Title>How much are you contributing to your 401(k)?</Card.Title>
          <Card.Text>
            Usually an employee's contributions are capped at a specific maximumm percentage.
          </Card.Text>
          <Container>
            <Form.Group>
              <Form.Row>
                <Form.Label column lg={6}>
                  Employee Contribution
                </Form.Label>
                <Col>
                  <Form.Control
                    type="float"
                    defaultValue="6"
                    id="employee_contribution"
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
    currentUser: state.userReducer.currentUser
  };
};

export default connect(mapStateToProps, { updateCurrentStep, updateCurrentUser })(Four01kContribution);
