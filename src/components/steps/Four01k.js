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

class Four01k extends React.Component {

  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = () => {
    this.props.updateCurrentUser(this.props.currentUser.id, {four01k: true})
    this.props.handleNextStep("Four01kMatch");
  };

  _no = () => {
    this.props.updateCurrentUser(this.props.currentUser.id, {four01k: false})
    this.props.handleNextStep("CreditCardDebtQuestion");
  };

  render() {
    if (this.props.currentStep !== "Four01k") {
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
          <Card.Title>Does your job happen to offer a 401(k) plan?</Card.Title>
          <Card.Text>
            A 401(k) plan is a retirement investment account that many companies
            offer their employees.
          </Card.Text>
        <Container>
          <Row>
            <Col>
              <Button variant="danger" size="lg" block onClick={this._no}>
                No
              </Button>
            </Col>
            <Col>
              <Button variant="success" size="lg" block onClick={this._yes}>
                Yes
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

export default connect(mapStateToProps, { updateCurrentStep, updateCurrentUser })(Four01k);
