import React from "react";
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
import { updateCurrentRow } from "../../actions/rowActions";

class Four01kContribution extends React.Component {
  state = {
    four01k_contribution: this.props.currentUser.four01k_contribution,
  };

  checkValid = () => {
    if (this.state.four01k_contribution > -1) {
      return true;
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  _next = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(
      this.props.currentUser.id,
      {
        four01k_contribution: this.state.four01k_contribution,
      },
      this.props.currentStep
    );
    // this.props.handleNextStep("CreditCardDebtQ");
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
            <h3>How much are you contributing to your 401(k)? 💵</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            Usually an employee's contributions are capped at a specific
            maximumm percentage.
          </Container>
        </Row>
        <Row id="form" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Employee Contribution</Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <FormControl
                      className="formField"
                      type="number"
                      min="0"
                      max="100"
                      // defaultValue="6"
                      value={
                        this.state.four01k_contribution
                          ? this.state.four01k_contribution
                          : 0
                      }
                      id="four01k_contribution"
                      name="four01k_contribution"
                      size="lg"
                      onChange={this.handleChange}
                      onFocus={this.handleFocus} 
                    />
                    <InputGroup.Append>
                      <InputGroup.Text>%</InputGroup.Text>
                    </InputGroup.Append>
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
                  {/* {this.checkValid() ? ( */}
                  <Button
                    className="yes"
                    variant="primary"
                    size="lg"
                    block
                    id={this.props.currentRow}
                    value="CreditCardDebtQ"
                    onClick={this._next}
                  >
                    Next
                  </Button>
                  {/* ) : (
                    <Button className="yes" variant="primary" size="lg" block disabled>
                      Next
                    </Button>
                  )} */}
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
})(Four01kContribution);
