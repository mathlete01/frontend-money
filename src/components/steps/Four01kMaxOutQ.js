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

class Four01kMaxOutQ extends React.Component {

  _yes = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, { four01k_max_out: true },this.props.currentStep);
  };

  _no = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, { four01k_max_out: false },this.props.currentStep);
  };

  _prev = () => {
    // this.props.setRow("row2");
    this.props.setRow(this.props.currentRow);
    this.props.handlePrevStep();
    this.props.clearRow(this.props.getNextRow())
    // this.props.clearRow("row3")
  };

  render() {
    if (this.props.currentStep !== "Four01kMaxOutQ") {
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
            <h3>Are you maxxing-out your 401(k)?</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            Got any more disposible income? If so, your #1 priority is to contribute as much as you can to your 401k. 
          </Container>
        </Row>
        <Row id="form" className="rowElement"></Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Button
                    className="no"
                    variant="danger"
                    size="lg"
                    block
                    // id={this.props.currentRow}
                    id={this.props.getNextRow()}
                    value="Four01kMaxRec"
                    onClick={this._no}
                  >
                    No
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="yes"
                    variant="success"
                    size="lg"
                    block
                    // id={this.props.currentRow}
                    id={this.props.getNextRow()}
                    value="TaxableBrokerageIntro"
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
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
})(Four01kMaxOutQ);
