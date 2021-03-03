import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Form, FormGroup, FormControl } from "react-bootstrap";
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
            <h3>How much are you <OverlayTrigger
          placement="top"
          // defaultShow="true"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => this.props.renderTooltip(props, "The maximum you can contribute in 2021 is $19,500")}
        ><a href="#" className="tooltiptext">contributing</a></OverlayTrigger> to your <OverlayTrigger
          placement="top"
          // defaultShow="true"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => this.props.renderTooltip(props, "...or 403(b) or 457 or Thrift Savings Plan")}
        ><a href="#" className="tooltiptext">401(k) plan</a></OverlayTrigger>? 💵</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            {/* Usually an employee's contributions are capped at a specific
            maximum percentage. */}
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
                      value={
                        this.state.four01k_contribution
                          ? this.state.four01k_contribution
                          : ""
                      }
                      id="four01k_contribution"
                      name="four01k_contribution"
                      
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
                    variant="continue"
                    block
                    id={this.props.currentRow}
                    value="CreditCardDebtQ"
                    onClick={this._next}
                  >
                    Next
                  </Button>
                  {/* ) : (
                    <Button variant="continue" block disabled>
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
