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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setState({
        cc_1: this.props.currentUser.cc_1,
        cc_2: this.props.currentUser.cc_2,
        cc_3: this.props.currentUser.cc_3,
      });
    }
  }

  state = {
    cc_1: this.props.currentUser.cc_1,
    cc_2: this.props.currentUser.cc_2,
    cc_3: this.props.currentUser.cc_3,
    credit_card_debt: this.props.currentUser.credit_card_debt
  }

  checkValid = () => {
    if (this.state.cc_1 > 0) {
      return true;
    }
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
    console.log(`calcSum this.state.credit_card_debt = `, this.state.credit_card_debt)
  }

  _next = (event) => {
    console.log(`_next before this.state.credit_card_debt = `, this.state.credit_card_debt)
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, {
      cc_1: this.state.cc_1,
      cc_2: this.state.cc_2,
      cc_3: this.state.cc_3,
      credit_card_debt: this.state.credit_card_debt
    },this.props.currentStep);
    console.log(`_next after this.state.credit_card_debt = `, this.state.credit_card_debt)
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
        <Container className="step">
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
                      value={
                        this.state.cc_1 ? this.state.cc_1 : 0
                      }
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
                    value={
                      this.state.cc_2 ? this.state.cc_2 : 0
                    }
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
                    value={
                      this.state.cc_3 ? this.state.cc_3 : 0
                    }
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
                  
                </Col>
                <Col>
                  {this.checkValid() ? (
                    <Button
                      className="yes"
                      variant="primary"
                      size="lg"
                      block
                      onClick={this._next}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button className="yes" variant="primary" size="lg" block disabled>
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
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
})(CreditCardDebt);
