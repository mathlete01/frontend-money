import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { getCurrentUser, updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Rung1Determination extends React.Component {
  _next = () => {
    this.props.handleNextStep(this.nextStep);
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

  makeDetermination = () => {
    console.log(`makeDetermination: this.props.currentUser = `, this.props.currentUser)
    // console.log(`makeDetermination: this.props.currentUser.leftover_money = `, this.props.currentUser.leftover_money)
    const {
      // leftover_money,
      four01k,
      four01k_match,
      four01k_contribution,
      credit_card_debt,
    } = this.props.currentUser;
    const leftover_money = this.props.currentUser.leftover_money
    // console.log(`four01k = `, four01k);
    // console.log(`credit_card_debt = `, credit_card_debt);
    // console.log(`leftover_money = `, leftover_money);
    // console.log(`four01k_contribution = `, four01k_contribution);
    // console.log(`four01k_match = `, four01k_match);
    // console.log(`credit_card_debt = `, credit_card_debt);
    switch (true) {
      // Case: No 401k and debt is tiny
      case four01k === false && credit_card_debt <= leftover_money:
        // Advice: Proceed to next
        // Rung 1 & 2 achieved, onto Rung 3
        this.advice = `Nice! Rung #1 is not applicable since your employer doesn't offer a 401(k), and Rung #2 is done because you don't have any credit card debt. Onto Rung #3: Max-out a Roth IRA. Let's see if you qualify...`;
        this.nextStep = "RothIRA";
        break;
      // Case:  No 401k and debt is big
      case four01k === false && credit_card_debt > leftover_money:
        //// Advice: First and foremost, pay off debt, starting with smallest cc. After that, come back here for next goal.
        // Rung 1 is N/A. Maybe new Rung 1 is pay off CC?
        this.advice = `Ok! Rung #1 is not applicable since your employer doesn't offer a 401(k), so you're on Rung #2: Pay Off Credit Card Debt. First, target the smallest debt you have, then the next smallest. After that, you're on to Rung #3, so come back here for your next goal!`;
        this.nextStep = "DoneForNow";
        break;
      // Case:  401k contribution > 401k match and debt is big
      case four01k_contribution > four01k_match &&
        credit_card_debt < leftover_money:
        this.advice = `Ok, so you've got a bit of credit card debt, but you have enough money leftover after bills and spending money to pay if off in a month. So, that's your marching orders: PAY THE DAMN DEBT OFF THIS MONTH, YO. Onto Rung #3: Max-out a Roth IRA. Let's see if you qualify...`;
        this.nextStep = "RothIRA";
        break;
      case four01k_contribution > four01k_match &&
        credit_card_debt > leftover_money:
        // Advice: Paying off CC debt is your top priority. Reduce your contribution to [match], then  pay off debt, starting with smallest cc. After that, come back here for next goal.
        // Rung 1 achieved, onto Rung 2
        this.advice = `While it's great that you are taking advantage of your 401(k), right now paying off credit card debt is your top priority. To that end, let's give you more money to pay off your debt: Temporarily reduce your 401(k) contribution from ${four01k_contribution}% to ${four01k_match}% and use the increased take-home pay to pay off your cards, starting with smallest debt you owe then the next smallest, and so on. After that, come back here for next goal.`;
        this.nextStep = "DoneForNow";
        break;
      // Case:  401k contribution < 401k match and debt is big
      case four01k_contribution < four01k_match &&
        credit_card_debt > leftover_money:
        // Advice: Your top priority is to pay off your credit card debt, starting with the smallest cc. But before you do anything, you need to increase your 401k contribution to [company match]. It's free money!
        this.advice = `Right now, your top priority is to pay off your credit card debt. But before you do anything, you should to increase your 401k contribution from ${four01k_contribution}% to ${four01k_match}%. The employer match is free money, so take advantage of it! Make that change now, then focus on paying off your cards, starting with smallest debt you owe then the next smallest, and so on. After that, come back here for next goal.`;
        this.nextStep = "DoneForNow";
        break;
      // Case:  401k contribution = 401k match and debt is big
      case four01k_contribution === four01k_match &&
        credit_card_debt > leftover_money:
        // Advice: You're correct to restrict your 401k contribution to the company match. Right now, focus on paying off your debt, starting with smallest cc then working your way up. Come back here when you're done for your next goal!
        // Rung 1 achieved, onto Rung 2
        this.advice = `Well done--you're correct to restrict your 401k contribution to the company match of ${four01k_match}%. For now, focus on paying off your debt, starting with smallest cc then working your way up. Come back here when you're done for your next goal!`;
        this.nextStep = "DoneForNow";
        break;
      default:
        this.advice = "E R R O R";
    }
  }

  render() {
    console.log(`this.props.currentUser = `, this.props.currentUser);
    if (this.props.currentStep !== "Rung1Determination") {
      // Prop: The current step
      // console.log(`this.props.currentStep = `, this.props.currentStep);
      return null;
    }
    // The markup for the Step 1 UI

    this.makeDetermination();
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
          <Card.Title>Here's the deal:</Card.Title>
          <Card.Text>
          {this.advice}
          </Card.Text>
        <Container>
          <Row>
            <Col>
            </Col>
            <Col>
              <Button variant="primary" size="lg" block onClick={this._next}>
                Continue
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
  getCurrentUser
})(Rung1Determination);
