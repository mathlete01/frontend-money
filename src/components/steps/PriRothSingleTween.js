import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Tabs, Tab } from "react-bootstrap";
import { updateCurrentRow } from "../../actions/rowActions";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

class PriRothSingleTween extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _next = (event) => {
    event.preventDefault();
    this.props.handleNextStep(event);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setState({
        magi: this.props.currentUser.magi,
        rothMax: this.props.currentUser.roth_max,
      });
    }
  }

  handleFocus = (event) => event.target.select();

  handleChange = (event) => {
    console.log(`handleChange called`);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  state = {
    magi: this.props.currentUser.magi,
    rothMax: this.props.currentUser.roth_max,
  };

  calcRothMaxSingleYoung = () => {
    const magi = this.state.magi
    const incomeMin = 125000
    const incomeMax = 140000
    const divider = 15000
    const contributionLimit = 6000
    switch (true){
      case magi <incomeMin:
        return contributionLimit
        break;
      case magi >= incomeMax:
        return 0
        break;
      case magi >= incomeMin && magi < incomeMax:
        const num = contributionLimit - (((magi - incomeMin)/ divider) * contributionLimit)
        const rothMax = (Math.round(num * 100) / 100).toFixed(2)
        return rothMax
        break
    }
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
              this.props.currentStep === "PriRothSingleTween" ? false : true
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
            Since you'll make more than $124k but less than $139k this year, the
            amount you'll be able to contribute is reduced.
          </Container>
        </Row>
        <Row>
          <Tabs defaultActiveKey="what" id="uncontrolled-tab-example">
            <Tab eventKey="what" title="What">
              <ul>
                <li>
                  Every year, there is a maximum you can contribute to a Roth
                  IRA.
                </li>
                <li>
                  Check out the table below to see the maximum you're allowed to
                  contribtue to a Roth IRA based on your income.
                </li>
              </ul>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Your Modified Adjusted Gross Income (MAGI)</th>
                    <th>Max Contribution if under 50</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          className="formField"
                          type="number"
                          min="122000"
                          max="139000"
                          // value="131000"
                          value={this.state.magi ? this.state.magi : 131000}
                          id="magi"
                          name="magi"
                          //
                          onChange={this.handleChange}
                          onFocus={this.handleFocus}
                        />
                      </InputGroup>
                    </td>
                    <td>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          className="formField"
                          type="number"
                          value={this.calcRothMaxSingleYoung()}
                          readOnly
                          id="rothMax"
                          name="rothMax"
                          //
                        />
                      </InputGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
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
                  The first thing you should do is put your money in a target
                  date fund. Do it immediately, it's extremely low-risk and the
                  earlier you do it, the better. Ask the people at the brokerage
                  why people recommend a target date fund and they'll explain it
                  to you.
                </li>
                <li>
                  Once that's set up, you can explore different investing
                  strategies, if you want. But our advice is to just leave it in
                  a target date fund and forget about it. This stratetgy is
                  called "buy and hold". Trying to "time" the market by buying
                  and selling only works if you can tell the future.
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
                <Col></Col>
                <Col
                  className={
                    this.props.currentStep === "PriRothSingleTween"
                      ? ""
                      : "hidden"
                  }
                >
                  <Button
                    variant="continue"
                    block
                    id={this.props.getNextRow()}
                    value={
                      this.props.currentUser.four01k
                        ? "Four01kMaxOutQ"
                        : "PriTaxableBrokerageIntro"
                    }
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
})(PriRothSingleTween);
