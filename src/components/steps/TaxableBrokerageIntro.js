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
import Nav from 'react-bootstrap/Nav'
import { NavItem } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

class TaxableBrokerageIntro extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _next = (event) => {
    event.preventDefault();
    this.props.handleNextStep("DoneForNow");
  };

  render() {
    if (this.props.currentStep !== "TaxableBrokerageIntro") {
      return null;
    }
    return (
      <Container className="step">
        <Row id="header" className="step">
          <Button onClick={this._prev} variant="link">
            <FontAwesomeIcon icon="chevron-left" /> Back
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="step">
          <Container>
            <h3>Let's talk about taxable brokerages</h3>
          </Container>
        </Row>
        <Row id="body" className="step">
          <Container>
            Do you have more disposible income to put towards your financial
            goals? If so, it's time to invest in a taxable brokerage account.
            That's just a fancy name for an investment account that isn't
            tax-advantaged like it's cousin, the IRA.
          </Container>
        </Row>
        {/* <Row>
        <hr className="w-100" />
          <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="step">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content >
                  <Tab.Pane eventKey="first">
                  Do you have more disposible income to put towards your financial
            goals? If so, it's time to invest in a taxable brokerage account.
            That's just a fancy name for an investment account that isn't
            tax-advantaged like it's cousin, the IRA.
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  Do you have more disposible income to put towards your financial
            goals? If so, it's time to invest in a taxable brokerage account.
            That's just a fancy name for an investment account that isn't
            tax-advantaged like it's cousin, the IRA.
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Row> */}
        <Row>
          <Tabs defaultActiveKey="what" id="uncontrolled-tab-example">
            <Tab eventKey="what" title="What">
              A taxable brokerage is just a plain old means an investment account 
            </Tab>
            <Tab eventKey="why" title="Why">
              WhyProfile text Do you have more disposible income to put towards your financial
            goals? If so, it's time to invest in a taxable brokerage account.
            That's just a fancy name for an investment account that isn't
            tax-advantaged like it's cousin, the IRA.
            </Tab>
            <Tab eventKey="where" title="Where">
              WhereContact text Do you have more disposible income to put towards your financial
            goals? If so, it's time to invest in a taxable brokerage account.
            That's just a fancy name for an investment account that isn't
            tax-advantaged like it's cousin, the IRA.
            </Tab>
            <Tab eventKey="how" title="How">
              HowContact text Do you have more disposible income to put towards your financial
            goals? If so, it's time to invest in a taxable brokerage account.
            That's just a fancy name for an investment account that isn't
            tax-advantaged like it's cousin, the IRA.
            </Tab>
          </Tabs>
        </Row>
        <hr className="w-100" />
        <Row id="form" className="step"></Row>
        <Row id="buttons" className="step">
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
})(TaxableBrokerageIntro);
