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

  state = {
    cc_1: this.props.currentUser.cc_1,
    cc_2: this.props.currentUser.cc_2,
    cc_3: this.props.currentUser.cc_3,
    credit_card_debt: this.props.currentUser.credit_card_debt
  }

  handleChange = (event) => {
    this.setState ({
      [event.target.name]: event.target.value
    })
    this.calcSum()
  }

  calcSum = () => {
    const cc_1 = this.state.cc_1
    const cc_2 = this.state.cc_2
    const cc_3 = this.state.cc_3
    const sum = parseInt(cc_1) + parseInt(cc_2) + parseInt(cc_3)
    this.setState ({
      credit_card_debt: sum
    })
  }

  _next = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, {
      credit_card_debt: this.state.credit_card_debt
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
                      id="cc_1"
                      name="cc_1"
                      size="lg"
                      onChange={this.handleChange} 
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
                    id="cc_2"
                    name="cc_2"
                    size="lg"
                    onChange={this.handleChange} 
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
                    id="cc_3"
                    name="cc_3"
                    size="lg"
                    onChange={this.handleChange} 
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
