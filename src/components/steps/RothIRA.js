import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Form, FormGroup, FormControl } from "react-bootstrap";

class RothIRA extends React.Component {
  _next = (event) => {
    event.preventDefault();
    this.props.handleNextStep("Single");
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

  render() {
    if (this.props.currentStep !== "RothIRA") {
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
            <h3>Rung #3: Max-out a Roth IRA</h3>
          </Container>
        </Row>
        <Row id="body" className="step">
          <Container>
            Roth IRAs are great for a number of reasons. The best thing about
            them is that, because you can withdraw your contributions at any
            time for any reason, they're like a piggy bank you can break in an
            emergency. Even if you don't qualify for a Roth IRA because of age
            or income, you can still open a Roth IRA using a totally legal
            loophole called a "Backdoor Roth IRA". We'll cross that bridge if we
            need to, but let's see if you qualify first.
          </Container>
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
                    onClick={this._next}
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
})(RothIRA);
