import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import { updateCurrentRow } from "../../actions/rowActions";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";


class PriBackdoorRothIntro extends React.Component {
  
  _prev = () => {
    this.props.handlePrevStep();
  };
  
  _next = (event) => {
    event.preventDefault();
    this.props.handleNextStep(event);
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
              this.props.currentStep === "PriBackdoorRothIntro" ? false : true
            }
          >
            👈 BACK
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h5>YOUR # {this.props.rowNum} PRIORITY:</h5>
            <h3><OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => this.props.renderTooltip(props, "Meaning: contribute the maximum amount you're allowed to every year")}
        ><a href="#" className="tooltiptext">Max-out</a></OverlayTrigger> a "Backdoor" Roth IRA 🚪</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            So, your income is too high to contribute to a Roth IRA in the standard way. Not only is that a good problem to have, but you're in luck--you can still do a Roth contribution through something known as a Roth IRA Conversion. More commonly known as a Backdoor Roth, it's a (totally legal) loophole you should take advantage of.
          </Container>
        </Row>
        <Row id="tabs" className="rowElement">
          <Tabs defaultActiveKey="what" id="uncontrolled-tab-example">
            <Tab eventKey="what" title="What">
              <ul>
                <li>
                  You make a non-deductible contribution to a <i>traditional</i> IRA, then convert it to a <i>Roth</i> IRA.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="why" title="Why">
              <ul>
                <li>
                  As we've said, Roth IRAs are great, but there are income limits and you've exceeded those. This loophole allows anyone with <OverlayTrigger
          placement="top"
          // defaultShow="true"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => this.props.renderTooltip(props, "Earned income is income you'd make from wages, not from investments")}
        ><a href="#" className="tooltiptext">earned income</a></OverlayTrigger> to contribute to a Roth IRA, regardless of income limits.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="where" title="Where">
              <ul>
                <li>
                  Do you already have an investment account at a brokerage? Do it there.
                </li>
                <li>
                  Otherwise, open an account at a discount brokerage like{" "}
                  <a href="https://investor.vanguard.com/ira/roth-conversion" target="_blank" rel="noreferrer">
                    Vanguard
                  </a>,{" "} 
                  <a href="https://www.schwab.com/resource-center/insights/content/backdoor-roth-is-it-right-you" target="_blank" rel="noreferrer">
                    Schwab
                  </a>, or{" "} 
                  <a href="https://www.fidelity.com/viewpoints/retirement/earn-too-much-contribute-Roth-IRA-conversion" target="_blank" rel="noreferrer">Fidelity</a>.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="how" title="How">
              <ul>
                <li>
                  This is an oversimplification, but basically you (1) contribute up to $6k to a tranditional IRA, then (2) call up the brokerage and ask them to convert that IRA to a Roth IRA.
                </li>
                <li>
                  It's a bit complicated but totally doable. Call up your brokerage and ask them to explain it to you.
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
})(PriBackdoorRothIntro);