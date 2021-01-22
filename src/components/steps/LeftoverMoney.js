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
// import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class LeftoverMoney extends React.Component {
  _next = (event) => {
    event.preventDefault();
    let income = document.getElementById("monthly_income");
    let bills = document.getElementById("monthly_bills");
    // let spending = document.getElementById("weekly_spending");
    // let monthly_spending = spending.value * 4;
    let leftover_money = parseInt(income.value) - parseInt(bills.value);
    // this.props.updateCurrentUser(this.props.currentUser.id, {
    //   monthly_income: income.value,
    //   monthly_bills: bills.value,
    //   monthly_spending: monthly_spending,
    //   leftover_money: leftover_money
    // });
    // let leftover_money = parseInt(income.value) - (parseInt(bills.value) + monthly_spending)
    // this.props.updateCurrentUser(this.props.currentUser.id, {
    //   monthly_income: income.value,
    //   monthly_bills: bills.value,
    //   monthly_spending: monthly_spending,
    //   leftover_money: leftover_money
    // });
    this.props.updateCurrentUser(this.props.currentUser.id, {
      monthly_income: income.value,
      monthly_bills: bills.value,
      leftover_money: leftover_money,
    });
    this.props.handleNextStep("Four01k");
  };

  render() {
    if (this.props.currentStep !== "LeftoverMoney") {
      return null;
    }
    return (
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              {/* <Nav.Link onClick={this._prev}>
                <FontAwesomeIcon icon="chevron-left" /> Back
              </Nav.Link> */}
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h2>How much money do you have every month to put towards your goals?</h2>
          </Card.Title>
          <br></br>
          <Card.Text>
            Estimations are fine, you can always come back and update the
            numbers.
          </Card.Text>
          <br></br>
          <Form>
            {/* <Form.Group as={Row} controlId="formHorizontalEmail"> */}
            <Form.Group as={Row} >
              <Form.Label column sm={4} size="lg" >
                Monthly Income
              </Form.Label>
              <Col sm={8}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="number"
                    defaultValue="3000"
                    id="monthly_income"
                    size="lg"
                  />
                </InputGroup>
              </Col>
            </Form.Group>

            {/* <Form.Group as={Row} controlId="formHorizontalEmail" > */}
            <Form.Group as={Row}  >
              <Form.Label column sm={4} size="lg">
                Monthly Bills
              </Form.Label>
              <Col sm={8}>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="number"
                    defaultValue="1000"
                    id="monthly_bills"
                    size="lg"
                  />
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 8, offset: 4 }}>
                <Button type="submit" block onClick={this._next} size="lg">
                  Next
                </Button>
              </Col>
            </Form.Group>
          </Form>
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
})(LeftoverMoney);
