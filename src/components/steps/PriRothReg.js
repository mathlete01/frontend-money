import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import { Tabs, Tab } from "react-bootstrap";
import { updateCurrentRow } from "../../actions/rowActions";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class PriRothReg extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _next = (event) => {
    event.preventDefault();
    // this.props.updateCurrentRow(this.props.getNextRow());
    this.props.updateCurrentUser(this.props.currentUser.id, { 
      roth_eligable: true,
      roth_max: 6000 
    },this.props.currentStep);
    this.props.handleNextStep(event)
  };

  render() {
  
    return (
      <Container className="priority">
        <Row id="header" className="rowElement">
        <Button
            onClick={this._prev}
            variant="link"
            className="backBtn"
            disabled={
              this.props.currentStep === "PriRothReg" ? false : true
            }
          >
            👈 BACK
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h6>YOUR # {this.props.rowNum} PRIORITY:</h6>
            <h3>Max-out a Roth IRA 🥚📈</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            You can contribute up to $6k to a Roth IRA, so do it!
          </Container>
        </Row>
        <Row id="tabs" className="rowElement">
          <Tabs defaultActiveKey="what" id="uncontrolled-tab-example">
            <Tab eventKey="what" title="What">
              <ul>
                <li>
                  Every year, there is a maximum you can contribute to a Roth
                  IRA. The maximum for someone below 50 is $6k.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="why" title="Why">
              As we've said, Roth IRAs are great for three reaons:
              <ol>
                <li>Your money grows tax-free</li>
                <li>
                  You don't pay taxes on it when you withdraw it upon retirement
                </li>
                <li>
                  You can withdraw your contributions (not your <i>earnings</i>,
                  just your contributions) whenever you want. That makes it
                  double as an Emergency Fund.
                </li>
              </ol>
            </Tab>
            <Tab eventKey="where" title="Where">
              <ul>
                <li>
                  Do you already have an investment account at a discount
                  brokerage? Do it there.
                </li>
                <li>
                  Otherwise, open an account at a discount brokerage like{" "}
                  <a href="http://www.vanguard.com" target="_blank">
                    Vanguard
                  </a>{" "}
                  (our favorite) or{" "}
                  <a href="http://www.schwab.com" target="_blank">
                    Schwab
                  </a>
                  .
                </li>
              </ul>
            </Tab>
            <Tab eventKey="how" title="How">
              <ul>
                <li>
                  The first thing you should do is put your money in a target date fund. Do it immediately, it's extremely low-risk and the earlier you do it, the better. Ask the people at the brokerage why people recommend a target date fund and they'll explain it to you.
                </li>
                <li>
                  Once that's set up, you can explore different investing strategies, if you want. But our advice is to just leave it in a target date fund and forget about it. This stratetgy is called "buy and hold". Trying to "time" the market by buying and selling only works if you can tell the future.
                </li>
              </ul>
            </Tab>
          </Tabs>
        </Row>
        <hr className="w-100" />
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                </Col>
                <Col
                  className={
                    this.props.currentStep === "PriRothReg"
                      ? ""
                      : "hidden"
                  }
                >
                  <Button
                    variant="continue"
                    block
                    id={this.props.getNextRow()}
                    value={this.props.currentUser.four01k ? "Four01kMaxOutQ" : "PriTaxableBrokerageIntro"}
                    onClick={this._next}
                  >
                    Continue Below 👇
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
})(PriRothReg);
