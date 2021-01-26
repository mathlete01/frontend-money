import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormGroup, FormControl } from "react-bootstrap";

class SingleMaxNoRoth extends React.Component {
  _next = (event) => {
    event.preventDefault();
    this.props.handleNextStep(this.nextStep);
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

  makeDetermination = () => {
    console.log("makeDetermination called");
    const {
      leftover_money,
      four01k,
      four01k_match,
      four01k_contribution,
      credit_card_debt,
    } = this.props.currentUser;
    console.log(
      `SingleMaxNoRoth: this.props.currentUser = `,
      this.props.currentUser
    );
    console.log(`SingleMaxNoRoth: leftover_money = `, leftover_money);
    console.log(`SingleMaxNoRoth: four01k = `, four01k);
    console.log(`SingleMaxNoRoth: four01k_match = `, four01k_match);
    console.log(
      `SingleMaxNoRoth: four01k_contribution = `,
      four01k_contribution
    );
    console.log(`SingleMaxNoRoth: credit_card_debt = `, credit_card_debt);
    switch (true) {
      // Case: Yes 401k --> are you maxing it out?
      case four01k === true:
        this.nextStep = "MaxOutQuestion"
        break;
      // Case:  No 401K  --> Try for traditional IRA
      case four01k === false:
        this.nextStep = "TradIRAQuestion";
        break;
      default:
        this.advice = "Whoops, we've encountered an error. How embarassing.";
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentStep !== this.props.currentStep) {
      this.makeDetermination();
    }
  }

  render() {
    if (this.props.currentStep !== "SingleMaxNoRoth") {
      return null;
    }
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
            <h3>Your income is too high to contribute to a Roth IRA</h3>
          </Container>
        </Row>
        <Row id="body" className="step">
          <Container>
            Ok, since you'll make more than $137K this year, you're not eligible
            to contribute to a Roth IRA.
          </Container>
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
                    variant="success"
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
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
})(SingleMaxNoRoth);