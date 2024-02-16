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
import figures from "../../data/annual_updates";

class Four01kMatch extends React.Component {

  state = {
    four01k_match: this.props.currentUser.four01k_match
  }

  checkValid = () => {
    if (this.state.four01k_match > -1) {
      return true;
    }
  };

  handleChange = (event) => {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  _next = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, {
      four01k_match: this.state.four01k_match
    },this.props.currentStep);
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
              <Button onClick={this._prev} variant="link" className="backBtn">👈 BACK</Button>
          <hr className="w-100" /> 
        </Row>
        <Row id="title" className="rowElement">
          <Container><h3>How much is the employer <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => this.props.renderTooltip(props, "The employer match is the maximum percentage of your paycheck that the company will contribute to your 401(k) or 403(b) or 457 plan or Thrift Savings Plan")}
        ><a href="#" className="tooltiptext">match</a></OverlayTrigger>? 🏢</h3></Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            {/* The "employer match" is the maximum percentage of your paycheck that
            they will contribute to your 401(k). */}
          </Container>
        </Row>
        <Row id="form" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText" >
                  <Form.Label >Percentage of your Paycheck</Form.Label>
                </Col>
                <Col >
                  <InputGroup >
                    <FormControl
                    className="formField"
                      type="number"
                      min="0"
                      // max="7"
                      maxLength="1"
                      value={this.state.four01k_match ? this.state.four01k_match : ""}
                      id="four01k_match"
                      name="four01k_match"
                      onFocus={this.handleFocus} 
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
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                </Col>
                <Col>
                  {/* {this.checkValid() ? ( */}
                    <Button
                      variant="continue"
                      block
                      id={this.props.currentRow}
                    value="Four01kContribution"
                      onClick={this._next}
                    >
                      Next
                    </Button>
                   {/* ) : (
                    <Button variant="continue"  block disabled>
                      Next
                    </Button>
                  )}  */}
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
})(Four01kMatch);
