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

class PriFour01kMax extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _next = (event) => {
    event.preventDefault();
    this.props.handleNextStep("DoneForNow");
  };

  render() {
    if (this.props.currentStep !== "PriFour01kMax") {
      return null;
    }
    return (
      <Container className="step">
        <Row id="header" className="rowElement">
          <Button onClick={this._prev} variant="link">
            <FontAwesomeIcon icon="chevron-left" /> Back
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h6>YOUR NEXT PRIORITY:</h6>
            <h3>Max-out your 401(k)</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            They may be poorly named, but they are maybe the best investment you can get your hands on.
          </Container>
        </Row>
        <Row>
          <Tabs defaultActiveKey="what" id="uncontrolled-tab-example">
            <Tab eventKey="what" title="What">
              <ul>
                <li>
                  401(k)s are tax-advantaged retirement accounts that many employers offer their employees as a perk.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="why" title="Why">
              <ul>
                <li>
                The two big deals about a 401(k) are (1) many companies will match your contributions up to a limit, and (2) you contributions are taken out pre-tax.
                </li>
                <li>
                  For example, if your paycheck is $1,000 and you contribute $100 per paycheck to your 401(k), you're only being taxed on $900 of your income!
                </li>
              </ul>
            </Tab>
            <Tab eventKey="where" title="Where">
            <ul>
                <li>
                  If it's offered by your employer, it's in an account at whatever brokerage your employer chose. 
                </li>
                <li>You can't change where the funds are unless you leave the company and do what's called a "rollover".</li>
              </ul>
            </Tab>
            <Tab eventKey="how" title="How">
              <ul>
              <li>
                  Talk to your HR person and they'll explain how to change your contribution level.
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
                <Col>
                  <Button
                    className="yes"
                    variant="primary"
                    size="lg"
                    block
                    onClick={this._next}
                  >
                    Okay
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
})(PriFour01kMax);
