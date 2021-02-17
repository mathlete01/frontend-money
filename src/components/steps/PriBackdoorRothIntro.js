import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
// import ReactDOM from "react-dom";
import { updateCurrentRow } from "../../actions/rowActions";

class PriBackdoorRothIntro extends React.Component {
  
  _prev = () => {
    this.props.handlePrevStep();
  };
  
  _next = (event) => {
    event.preventDefault();
    // this.props.updateCurrentRow(this.props.getNextRow());
    this.props.handleNextStep(event);
  };

  render() {
    return (
      <Container className="priority">
        <Row id="header" className="rowElement">
          <Button
            onClick={this._prev}
            variant="link"
            disabled={
              this.props.currentStep === "PriBackdoorRothIntro" ? false : true
            }
          >
            <FontAwesomeIcon icon="chevron-left" /> Back
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h6>YOUR # {this.props.rowNum} PRIORITY:</h6>
            <h3>Max-out a "Backdoor" Roth IRA</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            Also known as a Roth IRA Conversion, the Backdoor Roth is a (totally
            legal) loophole you ought to take advantage of.
          </Container>
        </Row>
        <Row>
          <Tabs
            defaultActiveKey="what"
            id="uncontrolled-tab-example"
            className="tab"
            // activeKey={this.state.activeTab}
            onSelect={this.handleSelect}
          >
            <Tab eventKey="what" title="What">
              <ul>
                <li>
                  You make a non-deductible contribution to a <i>traditional</i>{" "}
                  IRA, then convert it to a <i>Roth</i> IRA.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="why" title="Why">
              <ul>
                <li>
                  As we've said, Roth IRAs are great, but there are income
                  limits and you've exceeded those. This loophole allows anyone
                  with earned income to contribute to a Roth IRA, regardless of
                  income limits.
                </li>
              </ul>
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
                  This is an oversimplification, but basically you (1)
                  contribute up to $6k to a tranditional IRA, then (2) call up
                  the brokerage and ask them to convert that IRA to a Roth IRA.
                </li>
                <li>
                  It's a bit complicated but totally doable. Call up your
                  brokerage and ask them to explain it to you.
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
                <Col></Col>
                <Col
                  className={
                    this.props.currentStep === "PriBackdoorRothIntro"
                      ? ""
                      : "hidden"
                  }
                >
                  <Button
                    className="yes"
                    variant="primary"
                    size="lg"
                    block
                    id={this.props.getNextRow()}
                    value={this.props.currentUser.four01k ? "Four01kMaxOutQ" : "PriTaxableBrokerageIntro"}
                    onClick={this._next}
                    onClick={this._next}
                  >
                    Continue Below ↓
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
})(PriBackdoorRothIntro);