import React from "react";
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import StepContainer from "./StepContainer";
import DirectiveContainer from "./DirectiveContainer";

import { updateCurrentStep } from "../actions/stepActions";
import { updateCurrentUser } from "../actions/userActions";

class BothContainer extends React.Component {
  render() {
    return (
      <Row>
        <Col md={5} className="containerContainer">
          <StepContainer 
          className="h-100"
          handleNextDirective = {this.props.handleNextDirective} 
          />
        </Col>
        <Col></Col>
        <Col md={5} className="containerContainer">
          <DirectiveContainer 
          className="h-100"
          directives = {this.props.directives} 
          />
        </Col>
      </Row>
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
})(BothContainer);
