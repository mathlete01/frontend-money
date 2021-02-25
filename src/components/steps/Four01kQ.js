import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { updateCurrentRow } from "../../actions/rowActions";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

class Four01kQ extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, { four01k: true },this.props.currentStep);
    this.props.handleNextStep(event);
  };

  _no = (event) => {
    console.log(` * * * set match and contrib to 0 `)
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, { 
      four01k: false,
      four01k_match: "0",
      four01k_contribution: "0"
     },this.props.currentStep);
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
            <h3>Does your employer offer a <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => this.props.renderTooltip(props, "A 401(k) plan is a retirement investment account that many companies offer their employees.")}
        ><a href="#" className="tooltiptext">401(k) plan</a></OverlayTrigger>? 📈</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            {/* A 401(k) plan is a retirement investment account that many companies
            offer their employees. */}
            <i>Tip: roll over <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => this.props.renderTooltip(props, "Yeah, just like that!")} ><a href="#" className="tooltiptext">highlighted</a></OverlayTrigger> text to see a definition</i>
          </Container>
        </Row>
        <Row id="form" className="rowElement"></Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Button
                    variant="nope"
                    block
                    id={this.props.currentRow}
                    value="CreditCardDebtQ"
                    onClick={this._no}
                  >
                    No
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="yeah"
                    block
                    id={this.props.currentRow}
                    value="Four01kMatch"
                    onClick={this._yes}
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
    currentRow: state.rowReducer.currentRow,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
  updateCurrentRow,
})(Four01kQ);
