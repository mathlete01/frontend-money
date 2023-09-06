import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import { updateCurrentRow } from "../../actions/rowActions";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import figures from "../../data/annual_updates";


class RothSingleUnderD extends React.Component {
  _next = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, { earned_income: false },this.props.currentStep);
    this.props.handleNextStep(event)

  };

  _prev = () => {
    this.props.handlePrevStep();
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
            <h3>You must have <OverlayTrigger
          placement="top"
          // defaultShow="true"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => this.props.renderTooltip(props, "Earned income is income you'd make from wages, not from investments")}
        ><a href="#" className="tooltiptext">earned income</a></OverlayTrigger> to contribute to a Roth IRA (any IRA, actually) 🥺</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
          {/* Unfortunately, you can't contribute to either a Roth IRA or a Traditional IRA if you don't have any earned income this year.  */}
          </Container>
        </Row>
        <Row id="form" className="rowElement"></Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                </Col>
                <Col>
                  <Button
                    variant="continue"
                    block
                    id={this.props.currentRow}
                    value={this.props.currentUser.four01k ? "Four01kMaxOutQ" : "PriTaxableBrokerageIntro"}
                    onClick={this._next}
                  >
                    Next 👉
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
})(RothSingleUnderD);
