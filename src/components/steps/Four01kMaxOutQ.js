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


class Four01kMaxOutQ extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(
      this.props.currentUser.id,
      { four01k_max_out: true },
      this.props.currentStep
    );
    this.props.handleNextStep(event);
  };

  _no = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(
      this.props.currentUser.id,
      { four01k_max_out: false },
      this.props.currentStep
    );
    this.props.handleNextStep(event);
  };

  render() {
    return (
      <Container className="step">
        <Row id="header" className="rowElement">
          <Button onClick={this._prev} variant="link" className="backBtn">
            👈 BACK
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h3>Are you <OverlayTrigger
          placement="top"
          // defaultShow="true"
          delay={{ show: 250, hide: 400 }}
          overlay={(props) => this.props.renderTooltip(props, "Contributing the maximum amount you're allowed to every year, which is ${figures.four01k_max_under_50} in 2021")}
        ><a href="#" className="tooltiptext">maxing-out</a></OverlayTrigger> your <OverlayTrigger
        placement="top"
        // defaultShow="true"
        delay={{ show: 250, hide: 400 }}
        overlay={(props) => this.props.renderTooltip(props, "...or 403(b) or 457 or Thrift Savings Plan")}
      ><a href="#" className="tooltiptext">401(k)</a></OverlayTrigger>? 🤑</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            Got any more disposable income? If so, you should contribute as much as you can to your 401(k).
          </Container>
        </Row>
        <Row id="form" className="rowElement"></Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Button
                    variant="nope"
                    block
                    id={this.props.currentRow}
                    value="PriFour01kMax"
                    // value="PriFour01kMMax"
                    onClick={this._no}
                  >
                    No
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="yeah"
                    block
                    id={this.props.currentRow}
                    value="PriTaxableBrokerageIntro"
                    onClick={this._yes}
                  >
                    Yes
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
})(Four01kMaxOutQ);
