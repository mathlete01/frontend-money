import React from "react";
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import StepContainer from "./StepContainer";
import DirectiveContainer from "./DirectiveContainer";

import { updateCurrentStep } from "../actions/stepActions";
import { updateCurrentUser } from "../actions/userActions";

class BothContainer extends React.Component {
  state = {
    directives: [],
    // directives: ["Rung1Determination", "D_BackdoorRothIntro"],
    nextStep: ""
  };

  setNextStep = (nextStep) => {
    this.setState({
      nextStep: nextStep,
    });
  }

  handleNextDirective = (nextDirective) => {
    if (this.state.directives.indexOf(nextDirective) !== -1) {
      return null;
    } else {
      this.setState({
        directives: [...this.state.directives, nextDirective],
      });
    }
  };
  render() {
    return (
      <Row className="bothContainer justify-content-md-center">
        <Col md={6} >
          <StepContainer 
          className="h-100"
          handleNextDirective = {this.handleNextDirective} 
          nextStep={this.state.nextStep}
          />
        </Col>
        {/* <Col md={1}></Col> */}
        <Col md={6} >
          <DirectiveContainer 
          className="h-100"
          directives = {this.state.directives} 
          setNextStep={this.setNextStep}
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
