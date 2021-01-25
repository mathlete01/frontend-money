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

class Below50 extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = () => {
    this.props.updateCurrentUser(this.props.currentUser.id, { below_50: true });
    this.props.handleNextStep("BLANK_YES");
  };

  _no = () => {
    this.props.updateCurrentUser(this.props.currentUser.id, { below_50: false });
    this.props.handleNextStep("BLANK_NO");
  };

  makeDetermination = (answer) => {
    const {
      leftover_money,
      four01k,
      four01k_match,
      four01k_contribution,
      credit_card_debt,
    } = this.props.currentUser;
    switch (true) {
      // Case: Young, Earning, Single, Below Single Max, Tiny Debt --> 6k to Roth IRA
      case answer === true && earned_income == true && single == true && single_max == true && credit_card_debt < leftover_money:
        this.nextStep = "RothEligable";
        this.props.updateCurrentProgress(this.props.currentUser.id, {
          rung_2: true,
          rung_3: true,
        });
        break;
        // Case: Young, Earning, Jointly, Below Married Max, Tiny Debt --> 6k to Roth IRA
        case answer === false && earned_income == true && single == true && single_max == true && credit_card_debt < leftover_money:
          this.nextStep = "RothEligable";
          this.props.updateCurrentProgress(this.props.currentUser.id, {
            rung_3: true,
          });
          break;
        // Case: Old, Earning, Single, Below Single Max, Tiny Debt --> 7k to Roth IRA
        case answer === false && earned_income == true && single == true && single_max == true && credit_card_debt < leftover_money:
          this.nextStep = "RothMax";
          this.props.updateCurrentProgress(this.props.currentUser.id, {
            rung_3: true,
          });
          break;
        // Case: Old, Earning, Jointly, Below Married Max, Tiny Debt --> 7k to Roth IRA
        case answer === false && earned_income == true && single == true && single_max == true && credit_card_debt < leftover_money:
          this.nextStep = "RothMax";
          this.props.updateCurrentProgress(this.props.currentUser.id, {
            rung_3: true,
          });
          break;
        // Case: Old, Earning, Jointly, Below Married Max, Tiny Debt --> 7k to Roth IRA
        case answer === false && earned_income == true && single == true && single_max == true && credit_card_debt < leftover_money:
          this.nextStep = "RothMax";
          this.props.updateCurrentProgress(this.props.currentUser.id, {
            rung_3: true,
          });
          break;
      default:
        this.advice = "Whoops, we've encountered an error. How embarassing.";
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentStep != this.props.currentStep) {
      this.makeDetermination();
    }
  }

  render() {
    if (this.props.currentStep !== "Below50") {
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
            <h3>Are you younger than 50 years old?</h3>
          </Container>
        </Row>
        <Row id="body" className="step">
          <Container>
            BLANK_BODY
          </Container>
        </Row>
        <Row id="form" className="step"></Row>
        <Row id="buttons" className="step">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Button
                    className="no"
                    variant="danger"
                    size="lg"
                    block
                    onClick={this.makeDetermination(false)}
                  >
                    No
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="yes"
                    variant="success"
                    size="lg"
                    block
                    onClick={this.makeDetermination(true)}
                  >
                    Yes
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
})(Below50);
