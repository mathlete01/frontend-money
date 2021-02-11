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
import { updateCurrentRow } from "../../actions/rowActions";

class SaveYourWork extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = (event) => {
    event.preventDefault();
    this.props.handleNextStep("CreditCardDebt");
  };

  _no = (event) => {
    event.preventDefault();
    this.props.handleNextStep("Determination");
  };

  render() {
    if (this.props.currentStep !== "SaveYourWork") {
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
            <h3>Save your work</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
          Let's save your work now so you can come back here for your next goal!
          </Container>
        </Row>
        <Row id="form" className="rowElement"></Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                  {/* <Button
                    className="no"
                    variant="danger"
                    size="lg"
                    block
                    onClick={this._no}
                  >
                    No
                  </Button> */}
                </Col>
                <Col>
                  <Button
                    className="yes"
                    variant="primary"
                    size="lg"
                    block
                    onClick={this._next}
                  >
                    Okay
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
    currentUser: state.userReducer.currentUser
  };
};

export default connect(mapStateToProps, { updateCurrentStep, updateCurrentUser })(SaveYourWork);
