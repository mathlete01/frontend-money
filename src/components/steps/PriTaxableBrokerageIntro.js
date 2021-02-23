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
import TabContainer from "react-bootstrap/TabContainer";
import Nav from "react-bootstrap/Nav";
import { NavItem } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { updateCurrentRow } from "../../actions/rowActions";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


class PriTaxableBrokerageIntro extends React.Component {
  
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
            className="backBtn"
            disabled={
              this.props.currentStep === "PriTaxableBrokerageIntro" ? false : true
            }
          >
            👈 BACK
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h6>YOUR # {this.props.rowNum} PRIORITY:</h6>
            <h3>Contribute to a Taxable Brokerage Account 🏦📈</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            Do you have more disposible income to put towards your financial
            goals? If so, it's time to invest in a taxable brokerage account.
          </Container>
        </Row>
        <Row id="tabs" className="rowElement">
        <Tabs defaultActiveKey="what" id="uncontrolled-tab-example">
            <Tab eventKey="what" title="What">
              <ul>
                <li>
                  A taxable brokerage is just a plain old investment account.
                </li>
                <li>
                  It's called "taxable" because it's not tax <i>advantaged</i>{" "}
                  like it's cousins, IRAs and 401(k)s.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="why" title="Why">
              <ul>
                <li>
                  You should <i>only</i> invest in a taxable brokerage account
                  once you have maximized your tax <i>advantaged</i> accounts,
                  like IRAs and 401(k)s. According to your choices, you've
                  already explored those options.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="where" title="Where">
            <ul>
                <li>
                  Do you already have an investment account at a discount brokerage? Do it there.
                </li>
                <li>
                  Otherwise, open an account at a discount brokerage like <a href="http://www.vanguard.com" target="_blank">Vanguard</a> (our favorite) or <a href="http://www.schwab.com" target="_blank">Schwab</a>.
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
        <Row id="form" className="rowElement"></Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                </Col>
                <Col
                  className={
                    this.props.currentStep === "PriTaxableBrokerageIntro"
                      ? ""
                      : "hidden"
                  }
                >
                  <Button
                    variant="continue"
                    // id={this.props.getNextRow()}
                    // Dynamic code above should work, but doesnt, so it's hard-coded below
                    id="row5"
                    value="DoneForNow"
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
})(PriTaxableBrokerageIntro);
