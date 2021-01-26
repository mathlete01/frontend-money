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
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Four01kMatch extends React.Component {

  state = {
    four01k_match: this.props.currentUser.four01k_match
  }

  handleChange = (event) => {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  _next = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, {
      four01k_match: this.state.four01k_match
    });
    this.props.handleNextStep("Four01kContribution");
  };

  _prev = () => {
    this.props.handlePrevStep("Four01k");
  };

  render() {
    if (this.props.currentStep !== "Four01kMatch") {
      return null;
    }
    return (
      <Container className="border step">
        <Row id="header" className="step">
              <Button onClick={this._prev} variant="link"><FontAwesomeIcon icon="chevron-left" /> Back</Button>
          <hr className="w-100" /> 
        </Row>
        <Row id="title" className="step">
          <Container><h3>How much is the employer match?</h3></Container>
        </Row>
        <Row id="body" className="step">
          <Container>
            The "employer match" is the maximum percentage of your paycheck that
            they will contribute to your 401(k).
          </Container>
        </Row>
        <Row id="form" className="step">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText" >
                  <Form.Label >Employer Match</Form.Label>
                </Col>
                <Col >
                  <InputGroup >
                    <FormControl
                    className="formField"
                      type="number"
                      // defaultValue="3"
                      value={this.state.four01k_match ? this.state.four01k_match : 0}
                      id="four01k_match"
                      name="four01k_match"
                      size="lg"
                      onChange={this.handleChange} 
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
        <Row id="buttons" className="step">
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
})(Four01kMatch);
