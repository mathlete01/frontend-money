import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

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
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link onClick={this._prev}>
                <FontAwesomeIcon icon="chevron-left" /> Back
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>How much credit card debt do you have? </Card.Title>
          <Card.Text>
            The interest you pay on credit card debt is usually three times the
            amount of interst you could earn on investment.
          </Card.Text>
          <Container>
            <Form.Group>
              <Form.Row>
                <Form.Label column lg={6}>
                  Credit Card #1
                </Form.Label>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="number"
                    defaultValue="2000"
                    id="cc_1" />
                  </InputGroup>
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={6}>
                  Credit Card #2
                </Form.Label>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="number"
                    defaultValue="400"
                    id="cc_2" />
                  </InputGroup>
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={6}>
                  Credit Card #3
                </Form.Label>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="number"
                    defaultValue="800"
                    id="cc_3" />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Button variant="primary" size="lg" block onClick={this._next}>
                  Next
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
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
