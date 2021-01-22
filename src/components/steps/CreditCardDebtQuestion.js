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

class CreditCardDebtQuestion extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = () => {
    this.props.handleNextStep("CreditCardDebt");
  };

  _no = () => {
    this.props.handleNextStep("Rung1Determination");
    this.props.updateCurrentUser(this.props.currentUser.id, {credit_card_debt: 0})
    // this.props.getcurrentUser();
  };

  render() {
    if (this.props.currentStep !== "CreditCardDebtQuestion") {
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
          <Card.Title>Do you have any credit card debt? </Card.Title>
          <Card.Text>
          The interest you pay on credit card debt is often 3 times the amount of interest you get from investments.
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

export default connect(mapStateToProps, { updateCurrentStep, updateCurrentUser })(CreditCardDebtQuestion);