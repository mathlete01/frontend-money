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
import Tooltip from "react-bootstrap/Tooltip";

class DoneForNow extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = (event) => {
    event.preventDefault();
    this.props.handleNextStep(event);
  };

  render() {
    return (
        <Container className="step">
        <Row id="header" className="rowElement">
          <Button 
          onClick={this._prev} variant="link" className="backBtn">
            👈 BACK
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h3>You've got your marching orders ✅</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
          Let's save your work now so you can come back here for your next goal!
          </Container>
        </Row>
        <Row id="form" className="rowElement"></Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col>
                  {/* <Button
                    variant="nope"
                    block
                    onClick={this._no}
                  >
                    No
                  </Button> */}
                </Col>
                <Col>
                  {/* <Button
                    variant="yeah"
                    variant="primary"
                    
                    id={this.props.currentRow}
                    block
                    onClick={this._next}
                  >
                    Okay
                  </Button> */}
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
    // currentUser: state.userReducer.currentUser
  };
};

export default connect(mapStateToProps, { updateCurrentStep })(DoneForNow);
