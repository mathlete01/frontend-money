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

class CreditCardDebtQ extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = (event) => {
    event.preventDefault();
    // this.props.handleNextStep("CreditCardDebt");
    this.props.setChild(event);
  };

  _no = (event) => {
    event.preventDefault();
    // this.props.handleNextStep("Rung1Determination");
    this.props.updateCurrentUser(this.props.currentUser.id, {
      credit_card_debt: 0,
    },this.props.currentStep);
    this.props.setChild(event);
  };

  render() {
    // if (this.props.currentStep !== "CreditCardDebtQ") {
    //   return null;
    // }
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
            <h3>Do you have any credit card debt?</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            {/* A <OverlayTrigger overlay={this.renderTooltip}>401(k) plan</OverlayTrigger> */}
            The interest you pay on credit card debt is often 3 times the amount
            of interest you get from investments.
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
                    id="row1Child"
                    value="Rung1Determination"
                    onClick={this._no}
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
                    id="row1Child"
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
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
})(CreditCardDebtQ);
