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
// import Tabs from "react-bootstrap/Tabs";
import { Tabs, Tab } from "react-bootstrap";
import TabContainer from "react-bootstrap/TabContainer";
import Nav from "react-bootstrap/Nav";
import { NavItem } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { updateCurrentRow } from "../../actions/rowActions";


class PriTaxableBrokerageIntro extends React.Component {
  
  _prev = () => {
    // this.props.setRow("row2");
    // this.props.handlePrevStep();
    this.props.setRow(this.props.currentRow);
    this.props.handlePrevStep();
    this.props.clearRow(this.props.getNextRow())
  };
  
  _next = (event) => {
    event.preventDefault();
    // this.props.setRow("row3");
    this.props.setRow(this.props.getNextRow());

    this.props.handleNextStep(event);
  };


  render() {
   
    return (
      <Container className="directive">
        <Row id="header" className="rowElement">
        <Button
            onClick={this._prev}
            variant="link"
            disabled={
              this.props.currentStep === "PriTaxableBrokerageIntro" ? false : true
            }
          >
            <FontAwesomeIcon icon="chevron-left" /> Back
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h6>YOUR NEXT PRIORITY:</h6>
            <h3>Invest in a Taxable Brokerage Account</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            Do you have more disposible income to put towards your financial
            goals? If so, it's time to invest in a taxable brokerage account.
          </Container>
        </Row>
        <Row>
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
                  {/* <Button
                    className="no"
                    variant="danger"
                    size="lg"
                    block
                    onClick={this._no}
                  >
                    No
                  </Button> */}
                </Col>
                <Col
                  className={
                    this.props.currentStep === "PriTaxableBrokerageIntro"
                      ? ""
                      : "hidden"
                  }
                >
                  <Button
                    className="yes"
                    variant="primary"
                    size="lg"
                    block
                    // id={this.props.currentRow}
                    id={this.props.getNextRow()}
                    value="DoneForNow"
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
    currentRow: state.rowReducer.currentRow,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
  updateCurrentRow,
})(PriTaxableBrokerageIntro);
