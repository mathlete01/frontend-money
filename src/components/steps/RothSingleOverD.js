import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import { updateCurrentRow } from "../../actions/rowActions";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class RothSingleOverD extends React.Component {
  _next = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, { roth_eligable: false },this.props.currentStep);
    this.props.handleNextStep(event)
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

  // _next = (event) => {
  //   event.preventDefault();
  //   this.props.handleNextStep(this.nextStep);
  // };

  // makeDetermination = () => {
  //   // console.log("makeDetermination called");
  //   const {
  //     leftover_money,
  //     four01k,
  //     four01k_match,
  //     four01k_contribution,
  //     credit_card_debt,
  //   } = this.props.currentUser;
  //   switch (true) {
  //     // Case: Yes 401k --> are you maxing it out?
  //     case four01k === true:
  //       this.nextStep = "Four01kMaxOutQ"
  //       break;
  //     // Case:  No 401K  --> Try for traditional IRA
  //     case four01k === false:
  //       this.nextStep = "PriBackdoorRothIntro";
  //       break;
  //     default:
  //       this.advice = "Whoops, we've encountered an error. How embarassing.";
  //   }
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.currentStep !== this.props.currentStep) {
  //     this.makeDetermination();
  //   }
  // }

  render() {
  
    return (
      <Container className="step">
        <Row id="header" className="rowElement">
          <Button 
          onClick={this._prev} variant="link" className="backBtn">
            👈 BACK
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h3>Your income is too high to contribute to a regular Roth IRA 🎩</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            Ok, since you'll make more than $137K this year, you're not eligible to contribute to a regular Roth IRA. But--and this is a big but--anyone with earned income can contribute to a Backdoor Roth IRA! What's that? Well, let me tell you...
          </Container>
        </Row>
        <Row id="form" className="rowElement"></Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                </Col>
                <Col>
                  <Button
                    variant="continue"
                    block
                    id={this.props.currentRow}
                    value="PriBackdoorRothIntro"
                    onClick={this._next}
                  >
                    Continue 👉
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
    currentRow: state.rowReducer.currentRow,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
  updateCurrentRow,
})(RothSingleOverD);
