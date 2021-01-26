import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentProgress } from "../../actions/progressActions";
// import { getCurrentUser, updateCurrentUser } from "../../actions/userActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormGroup, FormControl } from "react-bootstrap";

class Rung1Determination extends React.Component {
  _next = (event) => {
    event.preventDefault();
    this.props.handleNextStep(this.nextStep);
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

  makeDetermination = () => {
    // console.log("makeDetermination called")
    const {
      leftover_money,
      four01k,
      four01k_match,
      four01k_contribution,
      credit_card_debt,
    } = this.props.currentUser;
    // console.log(`this.props.currentUser = `, this.props.currentUser);
    // console.log(`leftover_money = `, leftover_money);
    // console.log(`four01k = `, four01k);
    // console.log(`four01k_match = `, four01k_match);
    // console.log(`four01k_contribution = `, four01k_contribution);
    // console.log(`credit_card_debt = `, credit_card_debt);
    switch (true) {
      // Case: No 401k and debt is tiny
      case four01k === false && credit_card_debt <= leftover_money:
        // Rung 1 & 2 achieved, onto Rung 3
        this.advice = `Nice! Rung #1 is not applicable since your employer doesn't offer a 401(k), and Rung #2 is done because you don't have any credit card debt. Onto Rung #3: Max-out a Roth IRA. Let's see if you qualify...`;
        this.nextStep = "RothIRA";
        this.props.updateCurrentProgress(this.props.currentUser.id, {
          rung_2: true,
          rung_3: true,
        });
        break;
      // Case:  No 401k and debt is big
      case four01k === false && credit_card_debt > leftover_money:
        // Rung 1 is N/A. Maybe new Rung 1 is pay off CC?
        this.advice = `Ok! Rung #1 is not applicable since your employer doesn't offer a 401(k), so you're on Rung #2: Pay Off Credit Card Debt. First, target the smallest debt you have, then the next smallest. After that, you're on to Rung #3, so come back here for your next goal!`;
        this.nextStep = "SaveYourWork";
        this.props.updateCurrentProgress(this.props.currentUser.id, {
          rung_2: true,
        });
        break;
      // Case:  401k contribution > 401k match and debt is big
      case four01k_contribution > four01k_match &&
        credit_card_debt < leftover_money:
        this.advice = `Ok, so you've got a bit of credit card debt, but you have enough money leftover after bills and spending money to pay if off in a month. So, that's your marching orders: PAY THE DAMN DEBT OFF THIS MONTH, YO. Onto Rung #3: Max-out a Roth IRA. Let's see if you qualify...`;
        this.nextStep = "RothIRA";
        this.props.updateCurrentProgress(this.props.currentUser.id, {
          rung_1: true,
          rung_2: true,
          rung_3: true,
        });
        break;
      case four01k_contribution > four01k_match &&
        credit_card_debt > leftover_money:
        // Advice: Paying off CC debt is your top priority. Reduce your contribution to [match], then  pay off debt, starting with smallest cc. After that, come back here for next goal.
        // Rung 1 achieved, onto Rung 2
        this.advice = `While it's great that you are taking advantage of your 401(k), right now paying off credit card debt is your top priority. To that end, let's give you more money to pay off your debt: Temporarily reduce your 401(k) contribution from ${four01k_contribution}% to ${four01k_match}% and use the increased take-home pay to pay off your cards, starting with smallest debt you owe then the next smallest, and so on. After that, come back here for next goal.`;
        this.nextStep = "SaveYourWork";
        this.props.updateCurrentProgress(this.props.currentUser.id, {
          rung_1: true,
          rung_2: true,
          rung_3: true,
        });
        break;
      // Case:  401k contribution < 401k match and debt is big
      case four01k_contribution < four01k_match &&
        credit_card_debt > leftover_money:
        this.advice = `Right now, your top priority is to pay off your credit card debt. But before you do anything, you should to increase your 401k contribution from ${four01k_contribution}% to ${four01k_match}%. The employer match is free money, so take advantage of it! Make that change now, then focus on paying off your cards, starting with smallest debt you owe then the next smallest, and so on. After that, come back here for next goal.`;
        this.nextStep = "SaveYourWork";
        this.props.updateCurrentProgress(this.props.currentUser.id, {
          rung_1: true,
          rung_2: true,
          rung_3: true,
        });
        break;
      // Case:  401k contribution = 401k match and debt is big
      case four01k_contribution === four01k_match &&
        credit_card_debt > leftover_money:
        // Rung 1 achieved, onto Rung 2
        this.advice = `Well done--you're correct to restrict your 401k contribution to the company match of ${four01k_match}%. For now, focus on paying off your debt, starting with smallest cc then working your way up. Come back here when you're done for your next goal!`;
        this.nextStep = "SaveYourWork";
        this.props.updateCurrentProgress(this.props.currentUser.id, {
          rung_1: true,
          rung_2: true,
          rung_3: true,
        });
        break;
      default:
        this.advice = "Whoops, we've encountered an error. How embarassing.";
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(`componentDidUpdate this.props.currentUser.credit_card_debt = `, this.props.currentUser.credit_card_debt);

    if (prevProps.currentStep !== this.props.currentStep) {
      this.makeDetermination();
    }
  }

  render() {
    // console.log(
    //   `Rung1Determination: render: this.props.currentUser = `,
    //   this.props.currentUser
    // );
    if (this.props.currentStep !== "Rung1Determination") {
      // Prop: The current step
      // console.log(`this.props.currentStep = `, this.props.currentStep);
      return null;
    }
    // The markup for the Step 1 UI

    return (
      <Container className="border step">
        <Row id="header" className="step">
          <Button onClick={this._prev} variant="link">
            <FontAwesomeIcon icon="chevron-left" /> Back
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="step">
          <Container>
            <h3>Here's the deal:</h3>
          </Container>
        </Row>
        <Row id="body" className="step">
          <Container>{this.advice}</Container>
        </Row>
        <Row id="form" className="step"></Row>
        <Row id="buttons" className="step">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                </Col>
                <Col>
                  <Button
                    className="yes"
                    variant="primary"
                    size="lg"
                    block
                    onClick={this._next}
                  >
                    Continue
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
    currentProgress: state.progressReducer.currentProgress,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
  // getCurrentUser,
  updateCurrentProgress,
})(Rung1Determination);
