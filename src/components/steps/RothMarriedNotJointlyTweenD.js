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
import Table from 'react-bootstrap/Table'

class RothMarriedNotJointlyTweenD extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, { BLANK_DB: true });
    this.props.handleNextStep("Four01kMaxOutQ");
  };

  render() {
    if (this.props.currentStep !== "RothMarriedNotJointlyTweenD") {
      return null;
    }
    return (
      <Container className="step">
        <Row id="header" className="step">
          <Button onClick={this._prev} variant="link">
            <FontAwesomeIcon icon="chevron-left" /> Back
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="step">
        <Container>
            <h6>YOUR NEXT PRIORITY:</h6>
            <h3>Max-out your Roth IRA</h3>
          </Container>
        </Row>
        <Row id="body" className="step">
          <Container>
          Since your Modified Adjusted Gross Income as a couple will be less than $10k, the amount you'll be able to contribute is reduced. Check out the table below to see the maximum you're allowed to contribtue to a Roth IRA based on your income.
          </Container>
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Your Modified Adjusted Gross Income (MAGI)</th>
                <th>Max Contribution if under 50</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>$6,000</td>
              </tr>
              <tr>
                <td>$1,000 </td>
                <td>$5,400 </td>
              </tr>
              <tr>
                <td>$2,000 </td>
                <td>$4,800 </td>
              </tr>
              <tr>
                <td>$3,000 </td>
                <td>$4,200 </td>
              </tr>
              <tr>
                <td>$4,000 </td>
                <td>$3,600 </td>
              </tr>
              <tr>
                <td>$5,000 </td>
                <td>$3,000 </td>
              </tr>
              <tr>
                <td>$6,000 </td>
                <td>$2,400 </td>
              </tr>
              <tr>
                <td>$7,000 </td>
                <td>$1,800 </td>
              </tr>
              <tr>
                <td>$8,000 </td>
                <td>$1,200 </td>
              </tr>
              <tr>
                <td>$9,000 </td>
                <td>$600 </td>
              </tr>
              <tr>
                <td>$10,000 and over </td>
                <td>$0 😕 </td>
              </tr>
            </tbody>
          </Table>
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
                    variant="primary"
                    size="lg"
                    block
                    onClick={this._yes}
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
})(RothMarriedNotJointlyTweenD);
