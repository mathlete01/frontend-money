import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Form, FormControl } from "react-bootstrap";
import { updateCurrentRow } from "../../actions/rowActions";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class CreditCardDebt extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setState({
        cc_1: this.props.currentUser.cc_1,
        cc_2: this.props.currentUser.cc_2,
        cc_3: this.props.currentUser.cc_3,
        credit_card_debt: this.props.currentUser.credit_card_debt,
      });
    }
  }

  state = {
    cc_1: this.props.currentUser.cc_1,
    cc_2: this.props.currentUser.cc_2,
    cc_3: this.props.currentUser.cc_3,
    credit_card_debt: this.props.currentUser.credit_card_debt,
  };

  checkValid = () => {
    if (this.state.cc_1 > 0) {
      return true;
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.calcSum();
  };

  calcSum = () => {
    if (this.state.cc_1 > 0) {
      const cc_1 = this.state.cc_1;
      const cc_2 = this.state.cc_2 ? this.state.cc_2 : 0;
      const cc_3 = this.state.cc_3 ? this.state.cc_3 : 0;
      const sum = parseInt(cc_1) + parseInt(cc_2) + parseInt(cc_3);
      return sum;
    } else {
      return 0;
    }
  };

  _next = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(
      this.props.currentUser.id,
      {
        cc_1: this.state.cc_1,
        cc_2: this.state.cc_2,
        cc_3: this.state.cc_3,
        credit_card_debt: this.calcSum(),
      },
      this.props.currentStep
    );
    this.props.handleNextStep(event);
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

  handleFocus = (event) => event.target.select();

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
            <h3>How much credit card debt do you have? 🤔</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>C'mon, let's add it all up.</Container>
        </Row>
        <Row id="form" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Credit Card #1</Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="number"
                      min="0"
                      value={this.state.cc_1 ? this.state.cc_1 : 0}
                      id="cc_1"
                      name="cc_1"
                      // 
                      onChange={this.handleChange}
                      onFocus={this.handleFocus} 
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
        <Row id="form" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Credit Card #2</Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="number"
                      min="0"
                      value={this.state.cc_2 ? this.state.cc_2 : 0}
                      id="cc_2"
                      name="cc_2"
                      // 
                      onChange={this.handleChange}
                      onFocus={this.handleFocus} 
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
        <Row id="form" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Credit Card #3</Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="number"
                      min="0"
                      value={this.state.cc_3 ? this.state.cc_3 : 0}
                      id="cc_3"
                      name="cc_3"
                      // 
                      onChange={this.handleChange}
                      onFocus={this.handleFocus} 
                    />
                  </InputGroup>
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
                      className="continue"
                      variant="primary"
                      
                      block
                      id={this.props.currentRow}
                      value="PriPostDebt"
                      onClick={this._next}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      className="continue"
                      variant="primary"
                      
                      block
                      disabled
                    >
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
})(CreditCardDebt);
