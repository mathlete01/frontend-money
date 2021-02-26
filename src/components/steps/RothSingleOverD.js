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


class RothSingleOverD extends React.Component {
  _next = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, { roth_eligable: false },this.props.currentStep);
    this.props.handleNextStep(event)
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

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
            Ok, since you'll make more than $140K in 2021, you're not eligible to contribute to a regular Roth IRA. But--and this is a big but--anyone with earned income can contribute to a Backdoor Roth IRA! What's that? Well, let me tell you...
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
                    Next 👉
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
