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


class PaySchedule extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setState({
        pay_schedule: this.props.currentUser.pay_schedule,
      });
    }
  }

  state = {
    pay_schedule: this.props.currentUser.pay_schedule,
  };

  checkValid = () => {
    if (this.state.pay_schedule !== null) {
      return true;
    }
  };

  handleChange = (event) => {
    this.setState({
      pay_schedule: event.target.id,
    });
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

  _next = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(
      this.props.currentUser.id,
      { pay_schedule: this.state.pay_schedule },
      this.props.currentStep
    );
    this.props.handleNextStep(event);
  };

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
            <h3>How often do you receive a paycheck? 💵</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container></Container>
        </Row>
        <Row id="form" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Pay Schedule:</Form.Label>
                </Col>
                <Col>
                  <fieldset>
                    <Form.Check
                      type="radio"
                      label="Every Week"
                      name="formHorizontalRadios"
                      id="every_week"
                      checked={this.state.pay_schedule === "every_week" ? true : false}
                      onChange={this.handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Every Other Week"
                      name="formHorizontalRadios"
                      id="every_other_week"
                      checked={this.state.pay_schedule === "every_other_week" ? true : false}
                      onChange={this.handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Twice a Month"
                      name="formHorizontalRadios"
                      id="twice_a_month"
                      checked={this.state.pay_schedule === "twice_a_month" ? true : false}
                      onChange={this.handleChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Once a Month"
                      name="formHorizontalRadios"
                      id="once_a_month"
                      checked={this.state.pay_schedule === "once_a_month" ? true : false}
                      onChange={this.handleChange}
                    />
                  </fieldset>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col></Col>
                <Col>
                  {this.checkValid() ? (
                    <Button
                      variant="continue"
                      block
                      id={this.props.currentRow}
                      value="PriPostDebt"
                      onClick={this._next}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button variant="continue" block disabled>
                      Next
                    </Button>
                  )}
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
})(PaySchedule);
