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


class RothMarriedJointlyMinQ extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, { married_between: true },this.props.currentStep);
    this.props.handleNextStep(event)

  };

  _no = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, { married_between: false },this.props.currentStep);
    this.props.handleNextStep(event)

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
            <h3>As a couple, will your Modified Adjusted Gross Income be less than $198,000 in 2021? 💰</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            That's the maximum amount you can earn to qualify for a Roth IRA if you file your taxes as a married person.
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
                    value="RothMarriedJointlyMaxQ"
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
                    value="RothMarriedJointlyIncomeQ"
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
})(RothMarriedJointlyMinQ);
