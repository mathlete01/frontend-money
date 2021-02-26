import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form, FormGroup, FormControl } from "react-bootstrap";

class DoneForNow extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = (event) => {
    event.preventDefault();
    this.props.handleNextStep(event);
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
            <h3>You've got your marching orders ✅</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
          Based on the answers you've given, we've given you a set of common-sense priorities based on the best practices of Personal Finance Gurus like Suze Orman, Ramit Sethi and Dave Ramsey. Got questions? Go to <a href="/faq">FAQ</a>. To learn more about this project, visit <a href="/about">About</a>. Want to ask us something? <a href="mailto:msallin@gmail.com">Get in touch!</a>
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
  };
};

export default connect(mapStateToProps, { updateCurrentStep })(DoneForNow);
