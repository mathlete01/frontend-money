import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
// import { updateCurrentProgress } from "../../actions/progressActions";
// import { getCurrentUser, updateCurrentUser } from "../../actions/userActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import { updateCurrentRow } from "../../actions/rowActions";

class PriPostDebt extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _next = (event) => {
    event.preventDefault();
    // this.props.updateCurrentRow(this.props.getNextRow());
    this.props.handleNextStep(event);
  };

  makeDetermination = () => {
    // debugger
    console.log(
      `makeDetermination: Before: this.props.currentUser.credit_card_debt = `,
      this.props.currentUser.credit_card_debt
    );
    const {
      leftover_money,
      four01k,
      four01k_match,
      four01k_contribution,
      credit_card_debt,
    } = this.props.currentUser;
    const quarterLeftoverMoney = leftover_money / 4;
    console.log(`this.props.currentUser = `, this.props.currentUser);
    console.log(`leftover_money = `, leftover_money);
    console.log(`quarterLeftoverMoney = `, quarterLeftoverMoney);
    console.log(`four01k = `, four01k);
    console.log(`four01k_match = `, four01k_match);
    console.log(`four01k_contribution = `, four01k_contribution);
    console.log(`credit_card_debt = `, credit_card_debt);
    switch (true) {
      // Case: No 401k / Small Debt
      case four01k === false && credit_card_debt <= leftover_money:
        console.log("*** No 401k / Small Debt");
        this.headline = `Pay off your credit card debt 💳🧾`;
        this.advice = `Ok, so you've got a bit of credit card debt, but you have enough money left over after bills and spending money to pay it off in a month. So, do it. Next, let's make sure you qualify for a Roth IRA!`;
        this.nextStep = "RothIntro";
        break;
      // Case:  No 401k /  Big Debt
      case four01k === false && credit_card_debt > leftover_money:
        console.log("*** No 401k /  Big Debt");
        this.headline = `Pay off your credit card debt 💳🧾`;
        this.advice =
          "The interest you pay on credit cards is often THREE TIMES as much as the interest you could earn on investments. So, credit card debt is like a negative investent! First, target the smallest debt you have, then the next smallest. Next, let's see if you qualify for a Roth IRA...";
        this.nextStep = "RothIntro";
        break;
      // Case:  No 401k /  No Debt
      // case four01k === false && credit_card_debt === 0:
      //   console.log("*** No 401k /  No Debt");
      //   this.headline = `Congrats, you have no credit card debt! 🏆`;
      //   this.advice =
      //     "Fantastic. Next, let's see if you qualify for a Roth IRA...";
      //   this.nextStep = "RothIntro";
      //   break;
      // Case:  Contribution > Match / No Debt
      // case four01k_contribution > four01k_match && credit_card_debt === 0:
      //   console.log("*** Contribution > Match / No Debt");
      //   this.headline = `Congrats, you have no credit card debt! 🏆`;
      //   this.advice =
      //     "...*and*, your 401(k) contribution is more than the company match--well done!. Next, let's see if you qualify for a Roth IRA...";
      //   this.nextStep = "RothIntro";
      //   break;
      // Case:  Contribution > Match / Small Debt
      case four01k_contribution > four01k_match &&
        credit_card_debt < leftover_money:
        console.log("*** Contribution > Match / Small Debt");
        this.headline = `Pay off your credit card debt 💳🧾`;
        this.advice = `Ok, so you've got a bit of credit card debt, but you have enough money left over after bills and spending money to pay it off in a month. So, PAY THE DAMN DEBT OFF THIS MONTH, YO. Next, let's see if you qualify for a Roth IRA...`;
        this.nextStep = "RothIntro";
        break;
      // Case:  Contribution > Match / Big Debt
      case four01k_contribution > four01k_match &&
        credit_card_debt > leftover_money:
        console.log("*** Contribution > Match / Big Debt");
        this.headline = `Reduce your 401(k) contribution 🧮 and pay off your credit cards 💳`;
        this.advice = `While it's great that you are taking advantage of your 401(k), right now paying off credit card debt is your top priority. To that end, let's give you more money to pay off your debt: Temporarily reduce your 401(k) contribution from ${four01k_contribution}% to ${four01k_match}% and use the increased take-home pay to pay off your cards, starting with smallest debt you owe then the next smallest, and so on. Next, let's see if you qualify for a Roth IRA...`;
        this.nextStep = "RothIntro";
        break;
      // Case:  Contribution < Match / No Debt
      case four01k_contribution < four01k_match &&
        credit_card_debt < quarterLeftoverMoney:
        console.log("*** Contribution < Match / No Debt");
        this.headline = `Let's nudge up your 401(k) contribution 🧮`;
        this.advice = `You should to increase your 401(k) contribution from ${four01k_contribution}% to ${four01k_match}%. The employer match is free money, so take advantage of it! Next, let's see if you qualify for a Roth IRA...`;
        this.nextStep = "RothIntro";
        break;
      // Case:  Contribution < Match / Big Debt
      case four01k_contribution < four01k_match &&
        credit_card_debt > leftover_money:
        console.log("*** Contribution < Match / Big Debt");
        this.headline = `Increase your 401(k) contribution 📈 and pay off your credit cards 💳`;
        this.advice = `Right now, your top priority is to pay off your credit card debt. But before you do anything, you should to increase your 401(k) contribution from ${four01k_contribution}% to ${four01k_match}%. The employer match is free money, so take advantage of it! Make that change now, then focus on paying off your cards, starting with smallest debt you owe then the next smallest, and so on. Next, let's see if you qualify for a Roth IRA...`;
        this.nextStep = "RothIntro";
        break;
      // Case:  Contribution < Match / Small Debt
      case four01k_contribution < four01k_match &&
        credit_card_debt > leftover_money:
        console.log("*** Contribution < Match / Small Debt");
        this.headline = `Increase your 401(k) contribution 📈 and pay off your credit cards 💳`;
        this.advice = `Ok, so you've got a bit of credit card debt, but you have enough money left over after bills and spending money to pay it off in a month. So, PAY THE DAMN DEBT OFF THIS MONTH, YO. But before you do anything, you should to increase your 401(k) contribution from ${four01k_contribution}% to ${four01k_match}%. The employer match is free money, so take advantage of it! Make that change now. Next, let's see if you qualify for a Roth IRA...`;
        this.nextStep = "RothIntro";
        break;
      // Case:  Contribution = Match / No Debt
      // case four01k_contribution === four01k_match && credit_card_debt === 0:
      //   console.log("*** Contribution = Match / No Debt");
      //   this.headline = `No credit card debt!`;
      //   this.advice = `Well done--you're correct to restrict your 401(k) contribution to the company match of ${four01k_match}%. And no credit card debt--fantastic! Next, let's see if you qualify for a Roth IRA...`;
      //   this.nextStep = "RothIntro";
      //   break;
      // Case:  Contribution = Match / Big Debt
      case four01k_contribution === four01k_match &&
        credit_card_debt > leftover_money:
        console.log("*** Contribution = Match / Big Debt");
        this.headline = `Pay off your credit card debt 💳🧾`;
        this.advice = `Well done--you're correct to restrict your 401(k) contribution to the company match of ${four01k_match}%. For now, focus on paying off your debt, starting with smallest cc then working your way up. Next, let's see if you qualify for a Roth IRA...`;
        this.nextStep = "RothIntro";
        break;
      // Case:  Contribution = Match / Small Debt
      case four01k_contribution === four01k_match &&
        credit_card_debt < leftover_money:
        console.log("*** Contribution = Match / Small Debt");
        this.headline = `Pay off your credit card debt 💳🧾`;
        this.advice = `Ok, so you've got a bit of credit card debt, but you have enough money left over after bills and spending money to pay it off in a month. So, PAY THE DAMN DEBT OFF THIS MONTH, YO. Oh, and regarding your 401(k), you're correct to restrict your 401(k) contribution to the company match of ${four01k_match}%. Next, let's see if you qualify for a Roth IRA...`;
        this.nextStep = "RothIntro";
        break;
      default:
        this.headline = "Whoops, we've encountered an error 🙊";
        this.advice = "How embarassing...";
        this.nextStep = "RothIntro";
    }
    this.setState({});
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("* * * PriPostDebt: ComponentDidUpdate");
    if (prevProps.currentUser !== this.props.currentUser) {
      this.makeDetermination()
    }
  }

  // componentDidMount(prevProps, prevState) {
  //   console.log("PriPostDebt: ComponentDidMount");
  //   this.makeDetermination();
  // }

  render() {
    if (this.props.currentUser.credit_card_debt === null) {
      console.log(
        `render:null: this.props.currentUser.credit_card_debt = `,
        this.props.currentUser.credit_card_debt
      );
      return null;
    }
    return (
      <Container className="priority">
        <Row id="header" className="rowElement">
          <Button
            onClick={this._prev}
            variant="link"
            disabled={this.props.currentStep === "PriPostDebt" ? false : true}
          >
            👈 Back
          </Button>

          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            {/* <h6>YOUR # {this.getPriorityNum()} PRIORITY:</h6> */}
            <h6>YOUR # {this.props.rowNum} PRIORITY:</h6>
            <h3>{this.headline}</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>{this.advice}</Container>
        </Row>
        <Row id="form" className="rowElement"></Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col></Col>
                <Col
                  className={
                    this.props.currentStep === "PriPostDebt" ? "" : "hidden"
                  }
                >
                  <Button
                    className="yes"
                    variant="primary"
                    size="lg"
                    block
                    id={this.props.getNextRow()}
                    value={this.nextStep}
                    onClick={this._next}
                  >
                    Continue Below 👇
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
    // currentProgress: state.progressReducer.currentProgress,
    currentRow: state.rowReducer.currentRow,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
  // getCurrentUser,
  // updateCurrentProgress,
  updateCurrentRow,
})(PriPostDebt);
