import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { updateCurrentRow } from "../../actions/rowActions";
import Spinner from "react-bootstrap/Spinner";

class PriPostDebt extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _next = (event) => {
    event.preventDefault();
    this.props.handleNextStep(event);
  };

  debtSum = () => {
    if (
      this.props.currentUser.credit_card_debt >
      this.props.currentUser.leftover_money
    ) {
      console.log(`debtSum = `, "big");
      this.makeDetermination();
      return "big";
    } else {
      console.log(`debtSum = `, "small");
      this.makeDetermination();
      return "small";
    }
  };

  calcMonths = () => {
    const monthCount = Math.round(
      this.props.currentUser.credit_card_debt /
        this.props.currentUser.leftover_money
    );
    console.log(`monthCount = `, monthCount);
    return monthCount;
  };

  numberWithCommas = (x) => {
    return x.toLocaleString();
  };

  makeDetermination = () => {
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
      // !No Debt--No 401k: --> Roth IRA Intro
      // !No Debt--Contribution > Match: --> Roth IRA Intro
      // No Debt--Contribution < Match
      case credit_card_debt < quarterLeftoverMoney &&
        four01k_contribution < four01k_match:
        console.log("// No Debt--Contribution < Match");
        this.headline = `Let's nudge up your 401(k) contribution 🧮`;
        this.advice = ``;
        this.what = `While it's great that you are taking advantage of your 401(k), you should to increase your 401(k) contribution from ${four01k_contribution}% to ${four01k_match}%.`;
        this.why = `The employer match is free money, so take advantage of it!`;
        this.how = `Your HR resource at work can explain or show you how to change your contribution percentage.`;
        this.nextStep = "RothIntro";
        break;
      // No Debt--Contribution == Match: --> Roth IRA Intro
      // Big Debt--No 401k
      case credit_card_debt > leftover_money && four01k === false:
        console.log("// Big Debt--No 401k");
        this.headline = `Pay off your credit card debt 💳🧾`;
        this.advice = ``;
        this.what = `The total credit card debt you've listed here is $${this.numberWithCommas(
          credit_card_debt
        )}. Apply the $${this.numberWithCommas(
          leftover_money
        )} of monthly leftover money and you can pay off your debt in about ${this.calcMonths()} months.`;
        this.why = `The interest you pay on credit cards is often *three times* as much as the interest you could earn on investments. So, credit card debt is like a negative investment!`;
        this.how = `Use the Debt Snowball method: Apply all your leftover money the smallest debt you have, and pay just the minimum payment on your other cards. Once your smallest debt is paid off, move on to the next smallest. This method works well because it gives you success earlier than prioritizing the card with the highest interest rate. That early success is is a powerful motivator to get it all paid off.`;
        this.nextStep = "RothIntro";
        break;
      // Big Debt--Contribution > Match
      case credit_card_debt > leftover_money &&
        four01k_contribution > four01k_match:
        console.log("// Big Debt--Contribution > Match");
        this.headline = `Reduce your 401(k) contribution 🧮 and pay off your credit cards 💳`;
        this.advice = ``;
        this.what = `While it's great that you are taking advantage of your 401(k), right now paying off your $${this.numberWithCommas(
          credit_card_debt
        )} credit card debt is your top priority. To that end, let's give you more money to pay off your debt.Apply the $${this.numberWithCommas(
          leftover_money
        )} of monthly leftover money and you can pay off your debt in about ${this.calcMonths()} months.`;
        this.why = `The interest you pay on credit cards is often *three times* as much as the interest you could earn on investments. So, credit card debt is like a negative investment! A wise move is to temporarily reduce your 401(k) contribution from ${four01k_contribution}% to ${four01k_match}% and use the increased take-home pay to pay off your cards `;
        this.how = `Use the Debt Snowball method: Apply all your leftover money the smallest debt you have, and pay just the minimum payment on your other cards. Once your smallest debt is paid off, move on to the next smallest. This method works well because it gives you success earlier than prioritizing the card with the highest interest rate. That early success is is a powerful motivator to get it all paid off.`;
        this.nextStep = "RothIntro";
        break;
      // Big Debt--Contribution < Match
      case credit_card_debt > leftover_money &&
        four01k_contribution < four01k_match:
        console.log("// Big Debt--Contribution < Match ");
        this.headline = `Increase your 401(k) contribution 📈 and pay off your credit cards 💳`;
        this.advice = ``;
        this.what = `Right now, your top priority is to pay off your credit card debt. The total credit card debt you've listed here is $${this.numberWithCommas(
          credit_card_debt
        )}. Apply the $${this.numberWithCommas(
          leftover_money
        )} of monthly leftover money and you can pay off your debt in about ${this.calcMonths()} months. But before you do anything, you should to increase your 401(k) contribution from ${four01k_contribution}% to ${four01k_match}%.`;
        this.why = `The employer match is free money, so take advantage of it!`;
        this.how = `Use the Debt Snowball method: Apply all your leftover money the smallest debt you have, and pay just the minimum payment on your other cards. Once your smallest debt is paid off, move on to the next smallest. This method works well because it gives you success earlier than prioritizing the card with the highest interest rate. That early success is is a powerful motivator to get it all paid off.`;
        this.nextStep = "RothIntro";
        break;
      // Big Debt--Contribution == Match
      case credit_card_debt > leftover_money &&
        four01k === true &&
        four01k_contribution > 0 &&
        four01k_contribution === four01k_match:
        console.log("// Big Debt--Contribution == Match");
        this.headline = `Pay off your credit card debt 💳🧾`;
        this.advice = ``;
        this.what = `Well done--you're correct to restrict your 401(k) contribution to the company match of ${four01k_match}%. Right now, your top priority is to pay off your credit card debt.  The total credit card debt you've listed here is $${this.numberWithCommas(
          credit_card_debt
        )}. Apply the $${this.numberWithCommas(
          leftover_money
        )} of monthly leftover money and you can pay off your debt in about ${this.calcMonths()} months.`;
        this.why = `The employer match is free money, so take advantage of it!`;
        this.how = `Use the Debt Snowball method: Apply all your leftover money the smallest debt you have, and pay just the minimum payment on your other cards. Once your smallest debt is paid off, move on to the next smallest. This method works well because it gives you success earlier than prioritizing the card with the highest interest rate. That early success is is a powerful motivator to get it all paid off.`;
        this.nextStep = "RothIntro";
        break;

      // Small Debt--No 401k
      case credit_card_debt <= leftover_money &&
        credit_card_debt > quarterLeftoverMoney &&
        four01k === false:
        console.log("// Small Debt--No 401k");
        this.headline = `Pay off your credit card debt 💳🧾`;
        this.advice = ``;
        this.what = `The total credit card debt you've listed here is $${this.numberWithCommas(
          credit_card_debt
        )}. The $${this.numberWithCommas(
          leftover_money
        )} you have left over after bills and spending money is more than enough to pay it off in under a month, so, do it.`;
        this.why = `The interest you pay on credit cards is often *three times* as much as the interest you could earn on investments. So, credit card debt is like a negative investment!`;
        this.how = `Use the Debt Snowball method: Apply all your leftover money the smallest debt you have, and pay just the minimum payment on your other cards. Once your smallest debt is paid off, move on to the next smallest. This method works well because it gives you success earlier than prioritizing the card with the highest interest rate. That early success is is a powerful motivator to get it all paid off.`;
        this.nextStep = "RothIntro";
        break;
      // Small Debt--Contribution > Match
      case credit_card_debt < leftover_money &&
        credit_card_debt > quarterLeftoverMoney &&
        four01k_contribution > four01k_match:
        console.log("// Small Debt--Contribution > Match");
        this.headline = `Pay off your credit card debt 💳🧾`;
        this.advice = ``;
        this.what = `The total credit card debt you've listed here is $${this.numberWithCommas(
          credit_card_debt
        )}. Apply the $${this.numberWithCommas(
          leftover_money
        )} of monthly leftover money and you can pay off your debt in about ${this.calcMonths()} months.`;
        this.why = `The interest you pay on credit cards is often *three times* as much as the interest you could earn on investments. So, credit card debt is like a negative investment!`;
        this.how = `Use the Debt Snowball method: Apply all your leftover money the smallest debt you have, and pay just the minimum payment on your other cards. Once your smallest debt is paid off, move on to the next smallest. This method works well because it gives you success earlier than prioritizing the card with the highest interest rate. That early success is is a powerful motivator to get it all paid off.`;
        this.nextStep = "RothIntro";
        break;
      // Small Debt--Contribution < Match
      case credit_card_debt < leftover_money &&
        credit_card_debt > quarterLeftoverMoney &&
        four01k_contribution < four01k_match:
        console.log("// Small Debt--Contribution < Match ");
        this.headline = `Increase your 401(k) contribution 📈 and pay off your credit cards 💳`;
        this.advice = ``;
        this.what = `The total credit card debt you've listed here is $${this.numberWithCommas(
          credit_card_debt
        )}. The $${this.numberWithCommas(
          leftover_money
        )} you have left over after bills and spending money is more than enough to pay it off in under a month, so, do it. While it's great that you are taking advantage of your 401(k), you should to increase your 401(k) contribution from ${four01k_contribution}% to ${four01k_match}%.`;
        this.why = `The employer match is free money, so take advantage of it!`;
        this.how = `Your HR resource at work can explain or show you how to change your contribution percentage.`;
        this.nextStep = "RothIntro";
        break;
      // Small Debt--Contribution == Match
      case credit_card_debt < leftover_money &&
        credit_card_debt > quarterLeftoverMoney &&
        four01k === true &&
        four01k_contribution > 0 &&
        four01k_contribution === four01k_match:
        console.log("// Small Debt--Contribution == Match");
        this.headline = `Pay off your credit card debt 💳🧾`;
        this.advice = ``;
        this.what = `Well done--you're correct to restrict your 401(k) contribution to the company match of ${four01k_match}%.`;
        this.why = `The employer match is free money, so take advantage of it!`;
        this.how = `Use the Debt Snowball method: Apply all your leftover money the smallest debt you have, and pay just the minimum payment on your other cards. Once your smallest debt is paid off, move on to the next smallest. This method works well because it gives you success earlier than prioritizing the card with the highest interest rate. That early success is is a powerful motivator to get it all paid off.`;
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
    if (prevProps.currentUser !== this.props.currentUser) {
      this.debtSum();
    }
  }

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
            className="backBtn"
            disabled={this.props.currentStep === "PriPostDebt" ? false : true}
          >
            👈 BACK
          </Button>

          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h5>YOUR # {this.props.rowNum} PRIORITY:</h5>
            <h3>{this.headline ? this.headline : 
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>}</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>{this.advice}</Container>
        </Row>
        <Row id="tabs" className="rowElement">
          <Tabs defaultActiveKey="what" id="uncontrolled-tab-example">
            <Tab eventKey="what" title="What">
              {this.what}
            </Tab>
            <Tab eventKey="why" title="Why">
              {this.why}
            </Tab>
            <Tab eventKey="how" title="How">
              {this.how}
            </Tab>
          </Tabs>
        </Row>
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
                    variant="continue"
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
