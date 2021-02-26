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

class CreditCardDebtQ extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = (event) => {
    console.log(`YES chosen`)
    event.preventDefault();
    this.props.handleNextStep(event);
  };

  _no = (event) => {
    console.log(`NO chosen`)
    event.preventDefault();
    this.props.updateCurrentUser(
      this.props.currentUser.id,
      {
        credit_card_debt: 0,
      },
      this.props.currentStep
    );
    this.props.handleNextStep(event);
  };

  four01kEvaluation = () => {
    console.log(`this.props.currentUser.four01k = `, this.props.currentUser.four01k)
    console.log(`this.props.currentUser.four01k_match = `, this.props.currentUser.four01k_match)
    console.log(`this.props.currentUser.four01k_contribution = `, this.props.currentUser.four01k_contribution)
    if(this.props.currentUser.four01k === true && this.props.currentUser.four01k_contribution < this.props.currentUser.four01k_match){
      console.log(`YES: increaase contribution`)
      return "PriPostDebt"
    }else{
      console.log(`NO: proceed to next step`)
      return "NoDebt"
    }
  }

  render() {
    return (
      <Container className="step">
        <Row id="header" className="rowElement">
          <Button onClick={this._prev} variant="link" className="backBtn">
            👈 BACK
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h3>Do you have any credit card debt? 💳</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            💡This is important because the interest you pay on credit card debt is often <i>3 times</i> the amount
            of interest you earn from investments. In other words, the interest you'd pay on a credit card debt of $100 could be more than the interest you earn on an investment of $300..!
          </Container>
        </Row>
        <Row id="form" className="rowElement"></Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Button
                    variant="nope"
                    block
                    id={this.props.currentRow}
                    // value="NoDebt"
                    value={this.four01kEvaluation()}
                    onClick={this._no}
                  >
                    No
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="yeah"
                    block
                    id={this.props.currentRow}
                    value="CreditCardDebt"
                    onClick={this._yes}
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
    currentRow: state.rowReducer.currentRow,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
  updateCurrentRow,
})(CreditCardDebtQ);
