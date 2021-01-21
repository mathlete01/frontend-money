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

class LeftoverMoney extends React.Component {

  _next = () => {
    let income = document.getElementById("monthly_income");
    let bills = document.getElementById("monthly_bills");
    // let spending = document.getElementById("weekly_spending");
    // let monthly_spending = spending.value * 4;
    let leftover_money = parseInt(income.value) - parseInt(bills.value)
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
      leftover_money: leftover_money})
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
            How much money do you have every month to put towards your goals?
          </Card.Title>
          <Card.Text>
            Estimations are fine, you can always come back and update the
            numbers
          </Card.Text>
          <Container>
            <Form.Group>
              <Form.Row>
                <Form.Label column lg={6}>
                  Monthly Income
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    defaultValue="3000"
                    id="monthly_income"
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={6}>
                  Monthly Bills
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    defaultValue="1000"
                    id="monthly_bills"
                  />{" "}
                </Col>
              </Form.Row>
              <br />
              {/* <Form.Row>
                <Form.Label column lg={4}>
                  Weekly Spending Money
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    defaultValue="100"
                    id="weekly_spending"
                  />{" "}
                </Col>
              </Form.Row> */}
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

export default connect(mapStateToProps, { updateCurrentStep, updateCurrentUser })(LeftoverMoney);
