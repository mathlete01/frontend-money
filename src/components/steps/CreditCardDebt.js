import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Form, FormControl } from "react-bootstrap";

class CreditCardDebt extends React.Component {
  _next = () => {
    let cc_1 = document.getElementById("cc_1");
    let cc_2 = document.getElementById("cc_2");
    let cc_3 = document.getElementById("cc_3");
    const sum =
      parseInt(cc_1.value) + parseInt(cc_2.value) + parseInt(cc_3.value);
    this.props.updateCurrentUser(this.props.currentUser.id, {
      credit_card_debt: sum,
    });
    this.props.handleNextStep("Rung1Determination");
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

  render() {
    if (this.props.currentStep !== "CreditCardDebt") {
      return null;
    }
    return (
        <Container className="border step">
        <Row id="header" className="step">
              <Button onClick={this._prev} variant="link"><FontAwesomeIcon icon="chevron-left" /> Back</Button>
          <hr className="w-100" /> 
        </Row>
        <Row id="title" className="step">
          <Container><h3>How much credit card debt do you have?</h3></Container>
        </Row>
        <Row id="body" className="step">
          <Container>
          The interest you pay on credit card debt is usually three times the amount of interst you could earn on investment.
          </Container>
        </Row>
        <Row id="form" className="step">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText" >
                  <Form.Label >Credit Card #1</Form.Label>
                </Col>
                <Col >
                  <InputGroup >
                  <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    className="formField"
                      type="number"
                      defaultValue="2000"
                      id="cc_1"
                      size="lg"
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
        <Row id="form" className="step">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText" >
                  <Form.Label >Credit Card #2</Form.Label>
                </Col>
                <Col >
                  <InputGroup >
                  <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    className="formField"
                      type="number"
                      defaultValue="800"
                      id="cc_2"
                      size="lg"
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
        <Row id="form" className="step">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText" >
                  <Form.Label >Credit Card #3</Form.Label>
                </Col>
                <Col >
                  <InputGroup >
                  <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    className="formField"
                      type="number"
                      defaultValue="400"
                      id="cc_3"
                      size="lg"
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
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
                    onClick={this._next}
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
                    onClick={this._next}
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
})(CreditCardDebt);
