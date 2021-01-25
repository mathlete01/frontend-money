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

class Four01kQuestion extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = () => {
    this.props.updateCurrentUser(this.props.currentUser.id, { four01k: true });
    this.props.handleNextStep("Four01kMatch");
  };

  _no = () => {
    this.props.updateCurrentUser(this.props.currentUser.id, { four01k: false });
    this.props.handleNextStep("CreditCardDebtQuestion");
  };

  renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  render() {
    if (this.props.currentStep !== "Four01kQuestion") {
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
            <h3>Does your employer offer a 401(k) plan?</h3>
          </Container>
        </Row>
        <Row id="body" className="step">
          <Container>
            {/* A <OverlayTrigger overlay={this.renderTooltip}>401(k) plan</OverlayTrigger> */}
            A 401(k) plan is a retirement investment account that many companies
            offer their employees.
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
})(Four01kQuestion);
