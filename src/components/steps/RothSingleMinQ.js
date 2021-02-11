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
import { updateCurrentRow } from "../../actions/rowActions";

class RothSingleMinQ extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, { single_max: true },this.props.currentStep);
    // this.props.handleNextStep("RothSingleIncomeQ");
    this.props.setChild(event)
  };

  _no = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(this.props.currentUser.id, { single_max: false },this.props.currentStep);
    // this.props.handleNextStep("RothSingleMaxQ");
    this.props.setChild(event)
  };

  render() {
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
            <h3>Will you earn less than $122,000 this year?</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            That's the maximum you can earn as a single person and still qualify for a Roth IRA.  
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
                    id={this.props.currentRow}
                    value={"RothSingleMaxQ"}
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
                    id={this.props.currentRow}
                    value={"RothSingleIncomeQ"}
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
})(RothSingleMinQ);
