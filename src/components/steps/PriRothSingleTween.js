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
import figures from "../../data/annual_updates";

class PriRothSingleTween extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _next = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(
      this.props.currentUser.id,
      {
        magi: this.state.magi,
      },
      this.props.currentStep
    );
    this.props.handleNextStep(event);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setState({
        magi: this.props.currentUser.magi,
      });
    }
  }

  handleFocus = (event) => event.target.select();

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  state = {
    magi: this.props.currentUser.magi,
  };

  calcRothMaxSingleYoung = () => {
    const magi = this.state.magi;
    // const incomeMin = 125000;
		const incomeMin = `${figures.roth_single_min}`;
    const incomeMax = `${figures.roth_single_max}`;
    const divider = 15000;
    const contributionLimitYoung = `${figures.roth_max_under_50}`;
    switch (true) {
      case magi < incomeMin:
        return contributionLimitYoung;
      case magi >= incomeMax:
        return 0;

      case magi >= incomeMin && magi < incomeMax:
        // eslint-disable-next-line no-case-declarations
        const num =
          contributionLimitYoung -
          ((magi - incomeMin) / divider) * contributionLimitYoung;
        // eslint-disable-next-line no-case-declarations
        const rothMaxYoung = Math.round(num);
        return rothMaxYoung;

      default:
        return null;
    }
  };

  calcRothMaxSingleOld = () => {
    const magi = this.state.magi;
    const incomeMin = `${figures.roth_single_min}`;
    const incomeMax = `${figures.roth_single_max}`;
    const divider = 15000;
    const contributionLimitOld = `${figures.roth_max_50_and_over}`;
    switch (true) {
      case magi < incomeMin:
        return contributionLimitOld;

      case magi >= incomeMax:
        return 0;

      case magi >= incomeMin && magi < incomeMax:
        // eslint-disable-next-line no-case-declarations
        const num =
          contributionLimitOld -
          ((magi - incomeMin) / divider) * contributionLimitOld;
        // eslint-disable-next-line no-case-declarations
        const rothMaxOld = Math.round(num);
        return rothMaxOld;

      default:
        return null;
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
            <h5>YOUR # {this.props.rowNum} PRIORITY:</h5>
            <h3>
              <OverlayTrigger
                placement="top"
                // defaultShow="true"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) =>
                  this.props.renderTooltip(
                    props,
                    "Meaning: contribute the maximum amount you're allowed to every year"
                  )
                }
              >
                <a href="#" className="tooltiptext">
                  Max-out
                </a>
              </OverlayTrigger>{" "}
              a Roth IRA 🥚📈
            </h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            Since you'll make more than ${figures.roth_single_min} but less than ${figures.roth_single_max} in {figures.year}, the
            amount you'll be able to contribute is reduced.
          </Container>
        </Row>
        <Row id="tabs" className="rowElement">
          <Tabs defaultActiveKey="what" id="uncontrolled-tab-example">
            <Tab eventKey="what" title="What">
              <ul>
                <li>
                  Every year, there is a maximum you can contribute to a Roth
                  IRA.
                </li>
                <li>
                  Type in your estimated income below to see the maximum you're
                  allowed to contribute to a Roth IRA.
                </li>
              </ul>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>
                      Your{" "}
                      <OverlayTrigger
                        placement="top"
                        // defaultShow="true"
                        delay={{ show: 250, hide: 400 }}
                        overlay={(props) =>
                          this.props.renderTooltip(
                            props,
                            "Your income before taxes are taken away"
                          )
                        }
                      >
                        <a href="#" className="tooltiptext">
                          Gross Income
                        </a>
                      </OverlayTrigger>
                    </th>
                    <th>Max Contribution if under 50</th>
                    <th>Max Contribution if over 50</th>
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
                          min="0"
                          value={this.state.magi ? this.state.magi : ""}
                          id="magi"
                          name="magi"
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
                          min="0"
                          value={this.calcRothMaxSingleYoung()}
                          readOnly
                          id="rothMaxYoung"
                          name="rothMaxYoung"
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
                          min="0"
                          value={this.calcRothMaxSingleOld()}
                          readOnly
                          id="rothMaxOld"
                          name="rothMaxOld"
                        />
                      </InputGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="why" title="Why">
              As we've said, Roth IRAs are great for three reasons:
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
                  Do you already have an investment account at a brokerage? Do
                  it there.
                </li>
                <li>
                  Otherwise, open an account at a discount brokerage like{" "}
                  <a
                    href="https://investor.vanguard.com/ira/roth-ira"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vanguard
                  </a>
                  ,{" "}
                  <a
                    href="https://www.schwab.com/ira"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Schwab
                  </a>
                  , or{" "}
                  <a
                    href="https://www.fidelity.com/retirement-ira/roth-ira"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fidelity
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
                  a target date fund and forget about it. This strategy is
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
