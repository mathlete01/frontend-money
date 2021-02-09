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

class RothIntro extends React.Component {
  _next = (event) => {
    event.preventDefault();
    this.props.setChild(event);
  };

  _prev = () => {
    // this.props.setRow("row1");
    this.props.setRow(this.props.getPrevRow());
    this.props.handlePrevStep();
    this.props.clearRow(this.props.currentRow)
    // this.props.clearRow("row2")
  };

  render() {
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
            <h3>Let's talk about Roth IRAs</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
          Roth IRAs are great for three reasons:
              <ol>
                <li>Your money grows tax-free</li>
                <li>
                  You don't pay taxes on it when you withdraw it upon retirement
                </li>
                <li>
                  You can withdraw your contributions (not your <i>earnings</i>,
                  just your contributions) whenever you want. That makes it
                  double as an Emergency Fund.
                </li>
              </ol>
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
                    className="yes"
                    variant="primary"
                    size="lg"
                    block
                    // id={this.props.currentRow}
                    id={this.props.currentRow}
                    value="RothSingleQ"
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
})(RothIntro);
