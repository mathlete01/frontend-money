// import React, { Component } from "react";
import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputGroup from "react-bootstrap/InputGroup";
import { Form, FormControl } from "react-bootstrap";


class LeftoverMoney extends React.Component {
  calcLeftoverMoney = () => {
    const income = document.getElementById("monthly_income").value;
    const bills = document.getElementById("monthly_bills").value;
    const spending = document.getElementById("monthly_spending").value;
    console.log("calcLeftoverMoney called")
    const difference = income -
    (parseInt(bills) + parseInt(spending))
    const leftover = document.getElementById("leftover_money");
    leftover.value = difference
  }

  componentDidUpdate() {
    // console.log("I updated!")
    // this.calcLeftoverMoney()
  }

  _next = (event) => {
    console.log("next called")
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, {
      monthly_income: document.getElementById("monthly_income").value,
      monthly_bills: document.getElementById("monthly_bills").value,
      monthly_spending: document.getElementById("monthly_spending").value,
      leftover_money: document.getElementById("leftover_money").value
    });
    this.props.handleNextStep("Four01k");
  };

  render() {
    if (this.props.currentStep !== "LeftoverMoney") {
      return null;
    }
    return (
      
      <Container className="border step" >
        <Row id="header" className="step">
          <Button onClick={this._prev} variant="link" disabled>
            <FontAwesomeIcon icon="chevron-left" /> Back
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="step">
          <Container>
            <h3>
              How much money do you have every month to put towards your goals?
            </h3>
          </Container>
        </Row>
        <Row id="body" className="step">
          <Container>
            Estimations are fine, you can always come back and update the
            numbers.
          </Container>
        </Row>
        <Row id="form" className="step">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Monthly Income</Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="number"
                      defaultValue="3000"
                      id="monthly_income"
                      size="lg"
                      onChange={this.calcLeftoverMoney}
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
        <Row id="form" className="step">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Monthly Bills</Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="number"
                      defaultValue="1000"
                      id="monthly_bills"
                      size="lg"
                      onChange={this.calcLeftoverMoney}
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
        <Row id="form" className="step">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Monthly Spending Money</Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="number"
                      defaultValue="600"
                      id="monthly_spending"
                      size="lg"
                      onChange={this.calcLeftoverMoney}
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
        <Row id="form" className="step">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Leftover Money</Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="number"
                      defaultValue= "1400"
                      readOnly
                      id="leftover_money"
                      size="lg"
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
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
                    Next
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

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
})(LeftoverMoney);
