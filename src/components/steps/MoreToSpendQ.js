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

class MoreToSpendQ extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = (event) => {
    event.preventDefault();
    this.props.handleNextStep(this.nextStep);
  };

  _no = (event) => {
    event.preventDefault();
    this.props.handleNextStep("DoneForNow");
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

  makeDetermination = () => {
    // console.log("makeDetermination called");
    const {
      leftover_money,
      four01k,
      four01k_match,
      four01k_contribution,
      credit_card_debt,
    } = this.props.currentUser;
    switch (true) {
      // Case: Yes 401k --> are you maxing it out?
      case four01k === true:
        this.nextStep = "Four01kMaxOutQ"
        break;
      // Case:  No 401K  --> Try for traditional IRA
      case four01k === false:
        this.nextStep = "BackdoorRothIntro";
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
    if (this.props.currentStep !== "MoreToSpendQ") {
      return null;
    }
    return (
      <Container className="step">
        <Row id="header" className="rowElement">
          <Button onClick={this._prev} variant="link">
            <FontAwesomeIcon icon="chevron-left" /> Back
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h3>Do you have any more money to put towards your goals?</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            BLANK_BODY
          </Container>
        </Row>
        <Row id="form" className="rowElement"></Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Button
                    className="no"
                    variant="danger"
                    size="lg"
                    block
                    onClick={this._no}
                  >
                    I'm all tapped out
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="yes"
                    variant="success"
                    size="lg"
                    block
                    onClick={this._yes}
                  >
                    I've got some more
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
})(MoreToSpendQ);