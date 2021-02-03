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
      <Row className="bothContainer justify-content-md-center">
        <Col md={6} >
          <StepContainer 
          className="h-100"
          handleNextDirective = {this.props.handleNextDirective} 
          />
        </Col>
        {/* <Col md={1}></Col> */}
        <Col md={6} >
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
